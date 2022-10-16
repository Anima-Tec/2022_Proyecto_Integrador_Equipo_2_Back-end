#!/bin/bash

createUser() {
    clear
    # Check root user
    if [ $(id -u) -ne 0 ]; then
        echo "Necesitas permisos root"
        break
    fi

    read -p "Ingresa el nombre del usuario : " username
    userFind=$(grep "$username" /etc/passwd | cut -d : -f 1)

    if [ "$userFind" = "$username" ]; then
        echo "Ya existe el usuario $username!"
        break
    fi

    if [ "$1" = "dev" ]; then
        useradd -M -N -g dev "$username"
        passwd "$username"
        usermod -aG wheel "$username"
        [ $? -eq 0 ] && echo -e "Se agrego el desarrollador $username al sistema correctamente!\n" || echo -e "Fallo al agregar el desarrollador $username al sistema\n"
    else
        useradd -M -N "$username"
        passwd "$username"
        [ $? -eq 0 ] && echo -e "Se agrego el usuario $username al sistema correctamente!\n" || echo -e "Fallo al agregar el usuario $username al sistema\n"
    fi
    sleep 2
}

menu() {
    while :; do
        clear
        echo -e "--------------- Crear usuario ----------------\n"
        echo -e "1) - Desarrollador\n"
        echo -e "2) - Normal\n"
        echo -e "3) - Volver al menu\n"
        echo -e "----------------------------------------------\n"

        read -p "Seleccione una opcion: " userOption

        case $userOption in
        1)
            createUser dev
            ;;
        2)
            createUser
            ;;
        3)
            break
            ;;
        *)
            echo "ERROR!!!! Opcion incorrecta"
            sleep 2
            ;;
        esac

    done
}

menu
