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
            bash /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/users/createUser.sh
            ;;
        2)
            bash /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/users/updateUser.sh
            ;;
        3)
            bash /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/users/deleteUser.sh
            ;;
        4)
            bash /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/groups/createGroup.sh
            ;;
        5)
            bash /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/groups/deleteGroup.sh
            ;;
        6)
            bash /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/system/data.sh
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
