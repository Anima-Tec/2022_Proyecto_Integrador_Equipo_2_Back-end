#!/bin/bash

deleteUser() {
    clear
    # Check root user
    if [ $(id -u) -eq 0 ]; then
        read -p "Ingresa el nombre del usuario : " username
        userFind=$(cat /etc/passwd | cut -d : -f 1 | grep "$username" | sed 1q)

        if [ "$userFind" = "$username" ]; then
            userdel "$username"
            [ $? -eq 0 ] && echo -e "Usuario $username borrado del sistema correctamente!\n" || echo -e "Fallo al borrar el usuario $username del sistema\n"
        else
            echo "No existe el usuario $username"
        fi
    else
        echo "Debes tener permisos root"
    fi
    sleep 2
}

deleteUser
