#!/bin/bash

deleteGroup() {
    clear
    # Check root user
    if [ $(id -u) -ne 0 ]; then
        echo "Necesitas permisos root"
        break
    fi
    echo -e "---------------- Borrar grupo -----------------\n"
    read -p "Ingresa el nombre del grupo : " groupName
    groupFind=$(grep "$groupName" /etc/group | cut -d : -f 1)

    if [ "$groupFind" = "$groupName" ]; then
        groupdel "$groupName"
        clear
        [ $? -eq 0 ] && echo -e "Grupo $groupName eliminado del sistema correctamente!\n" || echo -e "Fallo al eliminar el grupo $groupName del sistema\n"
    else
        clear
        echo "No existe el grupo $groupName"
    fi

    sleep 2
}

deleteGroup
