#!/bin/bash

main() {
    if [ $(id -u) -ne 0 ]; then
        echo "NECESITAS PERMISOS ROOT"
        sleep 2
        exit
    fi

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
            bash ./users/create_user.sh
            ;;
        2)
            bash ./users/update_user.sh
            ;;
        3)
            bash ./users/delete_user.sh
            ;;
        4)
            bash ./groups/create_group.sh
            ;;
        5)
            bash ./groups/delete_group.sh
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
