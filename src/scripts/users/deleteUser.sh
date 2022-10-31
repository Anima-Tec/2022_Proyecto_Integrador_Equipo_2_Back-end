#!/bin/bash

deleteUser() {
    clear
    # Check root user
    if [ $(id -u) -ne 0 ]; then
        echo "Necesitas permisos root"
        break
    fi

    source /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/users/usersList.sh
    usersList

    read -p $'\n'"Ingresa el nombre del usuario a borrar : " username
    userFind=$(grep "$username" /etc/passwd | cut -d : -f 1)

    if [ "$userFind" = "$username" ]; then
        userdel "$username"
        clear
        [ $? -eq 0 ] && echo -e "Usuario $username borrado del sistema correctamente!\n" || echo -e "Fallo al borrar el usuario $username del sistema\n"
    else
        clear
        echo "No existe el usuario $username"
    fi
    sleep 2
}

deleteUser
