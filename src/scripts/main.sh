#!/bin/bash

# Creación de un Shell script desarrollado en forma modular,
# que permita ABM de usuarios y grupos del sistema.

main() {
    if [ $(id -u) -ne 0 ]; then
        echo "NECESITAS PERMISOS ROOT"
        sleep 2
        exit
    fi

    chmod +x ./users/create_user.sh
    chmod +x ./users/update_user.sh
    chmod +x ./users/delete_user.sh
    chmod +x ./groups/create_group.sh
    chmod +x ./groups/delete_group.sh
    chmod +x ./system/data.sh

    menu
}

menu() {
    while :; do
        clear
        echo "1) - Crear usuario"
        echo "2) - Modificar usuario"
        echo "3) - Eliminar usuario"
        echo "4) - Crear grupo"
        echo "5) - Eliminar grupo"
        echo "6) - Informacion del sistema"
        echo -e "7) - Salir\n"
        read -p "Seleccione una opcion: " option

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
