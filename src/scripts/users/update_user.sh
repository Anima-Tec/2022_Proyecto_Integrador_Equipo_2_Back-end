#!/bin/bash

dataUser() {
    name="$1"
    groups=$(grep $name /etc/group | cut -d : -f 1 | sed 's/^/  - /' | sed 's/$/\n/')
    usersRoot=$(grep wheel /etc/group)

    echo -e "- Nombre: $name\n"

    if [[ "$2" == "showMoreData" ]]; then
        if [[ "${#groups}" -ne 0 ]]; then
            echo -e "- Grupos:\n"
            echo "$groups"
        else
            echo "- No contiene grupos secundarios"
        fi
        if [[ "$usersRoot" == *"$name"* ]]; then
            echo -e "\n- Tiene permisos root\n"
        fi
    fi
}

usersList() {
    clear

    echo -e "------------------- Usuarios en el sistema -------------------\n"
    users="$1"
    for user in $users; do
        dataUser "$user"
    done
    echo "--------------------------------------------------------------"
}

userMenu() {
    while :; do
        clear
        user="$1"
        groups=$(grep $user /etc/group | cut -d : -f 1)
        usersRoot=$(grep wheel /etc/group)
        optionNumber=$([[ ${#groups} -eq 0 ]] && echo "2" || echo "3")

        echo -e "-------------------- Usuario --------------------\n"
        dataUser "$user" "showMoreData"
        echo -e "\n-------------------------------------------------\n"

        echo -e "--------------------- Menu ----------------------\n"
        echo -e "1- Agregar grupo\n"
        if [[ "${#groups}" -ne 0 ]]; then
            echo -e "2- Remover grupo\n"
        fi
        if [[ "$usersRoot" == *"$user"* ]]; then
            echo -e "$optionNumber- Quitar permisos root\n"
        else
            echo -e "$optionNumber- Dar permisos root\n"
        fi
        echo -e "$((optionNumber + 1))- Cambiar contraseña"
        echo -e "\n-------------------------------------------------\n"
        read -p "> Seleccione una opcion: " option

        case $option in
        1)
            echo -e "---------------- Agregar grupo ----------------\n"
            read -p "> Ingrese el nombre del grupo: " newGroup

            usermod -aG "$newGroup" "$user"
            [ $? -eq 0 ] && echo -e "Se agrego el grupo $newGroup al usuario $user!\n" || echo -e "Fallo al agregar el grupo $newGroup al usuario $user\n"
            sleep 2
            ;;

        2)
            echo -e "---------------- Remover grupo ----------------\n"
            read -p "> Ingrese el nombre del grupo: " removeGroup

            gpasswd -d "$user" "$removeGroup"
            [ $? -eq 0 ] && echo -e "Se elimino el grupo $removeGroup del usuario $user!\n" || echo -e "Fallo al eliminar el grupo $removeGroup del usuario $user\n"
            sleep 2
            ;;

        3)
            echo "Quitar permisos root"

            gpasswd -d "$user" wheel
            [ $? -eq 0 ] && echo -e "Se le quitaron permisos root al usuario $user!\n" || echo -e "Fallo al remover premisos root al usuario $user\n"
            sleep 2
            ;;

        *)
            echo -e "---------------- Cambiar contraseña ----------------\n"
            read -p "> Ingrese la nueva contraseña: " newPass

            passwd "$user"
            [ $? -eq 0 ] && echo -e "Se actualizo la contraseña del usuario $user correctamente!\n" || echo -e "Fallo al actualizar la contraseña del usuario $user\n"
            sleep 2
            ;;

        esac

    done
}

updateUser() {
    clear
    if [ $(id -u) -ne 0 ]; then
        echo "Necesitas permisos root"
        break
    fi

    users=$(grep home /etc/passwd | cut -d : -f 1)

    if [ "${#users}" -eq 0 ]; then
        echo "No hay usuarios en el sistema"
        sleep 2
        exit
    fi

    usersList "$users"

    read -p $'\n'"> Ingresa el nombre del usuario: " tecUserName
    userFind=$(grep "$tecUserName" /etc/passwd | cut -d : -f 1)

    if [[ "$userFind" == "$tecUserName" ]]; then
        userMenu "$userFind"
    else
        clear
        echo "No existe el usuario $tecUserName"
    fi

    sleep 2
}

updateUser
