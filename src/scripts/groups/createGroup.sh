#!/bin/bash

createGroup() {
    clear
    # Check root user
    if [ $(id -u) -ne 0 ]; then
        echo "Necesitas permisos root"
        break
    fi

    echo -e "--------------- Crear grupo ----------------\n"
    read -p "Ingresa el nombre del grupo : " groupName
    groupFind=$(grep "$groupName" /etc/group | cut -d : -f 1)

    if [ "$groupFind" = "$groupName" ]; then
        echo "Ya existe el grupo $groupName!"
    else
        groupadd "$groupName"
        [ $? -eq 0 ] && echo -e "Grupo $groupName agregado al sistema correctamente!\n" || echo -e "Fallo al agregar el grupo $groupName al sistema\n"
    fi
    sleep 2
}

createGroup
