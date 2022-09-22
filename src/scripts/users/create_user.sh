#!/bin/bash

createUser() {
    clear
    # Check root user
    if [ $(id -u) -eq 0 ]; then
        read -p "Ingresa el nombre del usuario : " username
        userFind=$(cat /etc/passwd | cut -d : -f 1 | grep "$username" | sed 1q)

        # for i in $(grep "$username" /etc/passwd | cut -d : -f 1); do
        #     if [ "$i" = "$username" ]; then
        #         echo "Ya existe el usuario $username!"
        #         userExist=1
        #     fi
        # done

        if [ "$userFind" = "$username" ]; then
            echo "Ya existe el usuario $username!"
        elif [ "$1" = "dev" ]; then
            useradd -M -g dev "$username"

            passwd "$username"

            usermod -aG wheel "$username"

            clear

            [ $? -eq 0 ] && echo -e "Se agrego el desarrollador $username al sistema correctamente!\n" || echo -e "Fallo al agregar el desarrollador $username al sistema\n"
        else
            useradd -M "$username"
            passwd "$username"
            [ $? -eq 0 ] && echo -e "Se agrego el usuario $username al sistema correctamente!\n" || echo -e "Fallo al agregar el usuario $username al sistema\n"
        fi
    else
        echo "Necesitas permisos root"
    fi
    sleep 2
}

createUserMenu() {
    while :; do
        clear

        echo "1) - Crear un usuario desarrollador"
        echo "2) - Crear un usuario normal"
        echo -e "3) - Volver al menu\n"

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

createUserMenu