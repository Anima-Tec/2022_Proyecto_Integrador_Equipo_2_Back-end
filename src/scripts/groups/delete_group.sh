#!/bin/bash

deleteGroup() {
    # Check root user
    if [ $(id -u) -eq 0 ]; then
        read -p "Ingresa el nombre del grupo : " groupName
        groupFind=$(cat /etc/group | cut -d : -f 1 | grep "$groupName" | sed 1q)

        if [ "$groupFind" = "$groupName" ]; then
            groupdel "$groupName"
            [ $? -eq 0 ] && echo -e "Grupo $groupName eliminado del sistema correctamente!\n" || echo -e "Fallo al eliminar el grupo $groupName del sistema\n"
        else
            echo "No existe el grupo $groupName"
        fi
    else
        echo "Necesitas permisos root"
    fi
    sleep 2
}

clear
deleteGroup
