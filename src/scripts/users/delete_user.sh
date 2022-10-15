#!/bin/bash

deleteUser() {
    clear
    # Check root user
    if [ $(id -u) -ne 0 ]; then
        echo "Necesitas permisos root"
        break
    fi

    read -p "Ingresa el nombre del usuario : " username
    userFind=$(grep "$username" /etc/passwd | cut -d : -f 1)

    if [ "$userFind" = "$username" ]; then
        userdel "$username"
        [ $? -eq 0 ] && echo -e "Usuario $username borrado del sistema correctamente!\n" || echo -e "Fallo al borrar el usuario $username del sistema\n"
    else
        echo "No existe el usuario $username"
    fi

    sleep 2
}

deleteUser
