#!/bin/bash

main() {
    if [ $(id -u) -ne 0 ]; then
        echo "NECESITAS PERMISOS ROOT"
        sleep 2
        exit
    fi

    chmod +x ./users/createUser.sh
    chmod +x ./users/dataUser.sh
    chmod +x ./users/deleteUser.sh
    chmod +x ./users/updateUser.sh
    chmod +x ./users/usersList.sh
    chmod +x ./groups/createGroup.sh
    chmod +x ./groups/deleteGroup.sh
    chmod +x ./groups/manageGroups.sh
    chmod +x ./system/data.sh

    menu
}

menu() {
    while :; do
        clear

        echo -e "--------------- Menu Principal ----------------\n"
        echo -e "1) - Crear usuario\n"
        echo -e "2) - Modificar usuario\n"
        echo -e "3) - Eliminar usuario\n"
        echo -e "4) - Crear grupo\n"
        echo -e "5) - Eliminar grupo\n"
        echo -e "6) - Informacion del sistema\n"
        echo -e "7) - Salir\n"
        echo -e "----------------------------------------------\n"

        read -p "> Seleccione una opcion: " option

        case $option in
        1)
            bash ./users/createUser.sh
            ;;
        2)
            bash ./users/updateUser.sh
            ;;
        3)
            bash ./users/deleteUser.sh
            ;;
        4)
            bash ./groups/createGroup.sh
            ;;
        5)
            bash ./groups/deleteGroup.sh
            ;;
        6)
            bash ./system/data.sh
            ;;
        7)
            clear
            break
            ;;
        *)
            echo "ERROR!!!! Opcion incorrecta"
            sleep 2
            ;;

        esac
    done
}

main
