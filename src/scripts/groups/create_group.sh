#!/bin/bash

createGroup() {
    # Check root user
    if [ $(id -u) -eq 0 ]; then
        read -p "Ingresa el nombre del grupo : " groupName
        groupFind=$(cat /etc/group | cut -d : -f 1 | grep "$groupName" | sed 1q)

        if [ "$groupFind" = "$groupName" ]; then
            echo "Ya existe el grupo $groupName!"
        else
            groupadd "$groupName"
            [ $? -eq 0 ] && echo -e "Grupo $groupName agregado al sistema correctamente!\n" || echo -e "Fallo al agregar el grupo $groupName al sistema\n"
        fi
    else
        echo "Necesitas permisos root"
    fi
    sleep 2
}

clear
createGroup
