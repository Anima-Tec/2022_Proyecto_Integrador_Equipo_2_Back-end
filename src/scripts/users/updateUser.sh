#!/bin/bash

menu() {
    while :; do
        clear
        user="$1"
        groups=$(grep $user /etc/group | cut -d : -f 1)
        isRoot=$(grep wheel /etc/group | cut -d : -f 4 | sed 's/,/\n/g' | grep $user | awk 'NR==1')
        optionNumber=$([[ ${#groups} -eq 0 ]] && echo "2" || echo "3")

        echo -e "-------------------- Usuario --------------------\n"
        source ./users/dataUser.sh
        dataUser "$user" "showMoreData"
        echo -e "\n-------------------------------------------------\n"

        echo -e "--------------------- Menu ----------------------\n"
        echo -e "1- Agregar grupo\n"
        if [[ "${#groups}" -ne 0 ]]; then
            echo -e "2- Remover grupo\n"
        fi
        if [[ "$isRoot" == "$user" ]]; then
            echo -e "$optionNumber- Quitar permisos root\n"
        else
            echo -e "$optionNumber- Dar permisos root\n"
        fi
        echo -e "$((optionNumber + 1))- Cambiar contraseña\n"
        echo -e "$((optionNumber + 2))- Volver\n"

        echo -e "-------------------------------------------------\n"
        read -p "> Seleccione una opcion: " option
        clear
        case $option in
        1)
            echo -e "---------------- Agregar grupo ----------------\n"
            read -p "> Ingrese el nombre del grupo: " newGroup
            source ./groups/manageGroups.sh
            manageGroups $newGroup "add"
            ;;
        2)
            echo -e "---------------- Remover grupo ----------------\n"
            read -p "> Ingrese el nombre del grupo: " removeGroup
            source ./groups/manageGroups.sh
            manageGroups $removeGroup "remove"
            ;;
        3)
            if [[ "$isRoot" == "$user" ]]; then
                echo "Quitar permisos root"
                gpasswd -d "$user" wheel
                [ $? -eq 0 ] && echo -e "Se le quitaron permisos root al usuario $user!\n" || echo -e "Fallo al remover permisos root al usuario $user\n"
            else
                echo "Dar permisos root"
                usermod -aG wheel "$user"
                [ $? -eq 0 ] && echo -e "Se le asigaron permisos root al usuario $user!\n" || echo -e "Fallo al asignar permisos root al usuario $user\n"
            fi
            ;;
        4)
            echo -e "---------------- Cambiar contraseña ----------------\n"
            read -p "> Ingrese la nueva contraseña: " newPass

            passwd "$user"
            [ $? -eq 0 ] && echo -e "Se actualizo la contraseña del usuario $user correctamente!\n" || echo -e "Fallo al actualizar la contraseña del usuario $user\n"
            ;;
        5)
            break
            ;;
        *)
            echo "ERROR!!!! Opcion incorrecta"
            sleep 2
            ;;
        esac

        sleep 2
    done
}

main() {
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

    source ./users/usersList.sh
    usersList "$users"

    read -p $'\n'"> Ingresa el nombre del usuario: " tecUserName
    userFind=$(grep "$tecUserName" /etc/passwd | cut -d : -f 1 | sed 1q)

    if [[ "$userFind" == "$tecUserName" ]]; then
        menu "$userFind"
    else
        clear
        echo "No existe el usuario $tecUserName"
    fi
    sleep 2
}

main
