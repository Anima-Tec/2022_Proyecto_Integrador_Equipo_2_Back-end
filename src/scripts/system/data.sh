#!/bin/bash

systemDataMenu() {
    while :; do
        clear
        echo -e "----------- Informacion del sistema -----------\n"
        echo -e "1) - Espacio del sistema\n"
        echo -e "2) - Memoria utilizada\n"
        echo -e "3) - Servicios\n"
        echo -e "4) - Red\n"
        echo -e "5) - Salir\n"
        echo -e "----------------------------------------------\n"
        read -p "Seleccione una opcion: " option
        clear
        case $option in
        1)
            df -h
            read -p $'\n'"Presione cualquier tecla para continuar: " tec
            ;;
        2)
            while :; do
                clear
                echo -e "------------- Espacio del sistema -------------\n"
                echo -e "1) - Detallado\n"
                echo -e "2) - Minimo\n"
                echo -e "3) - Salir\n"
                echo -e "----------------------------------------------\n"
                read -p $'\n'"Seleccione una opcion: " detailOption

                clear
                if [ $detailOption -eq 1 ]; then
                    cat /proc/meminfo
                elif [ $detailOption -eq 2 ]; then
                    free
                elif [ $detailOption -eq 3 ]; then
                    break
                else
                    clear
                    echo "ERROR!!!! Opcion incorrecta"
                    sleep 2
                fi

                if [ $detailOption -eq 1 ] || [ $detailOption -eq 2 ]; then
                    read -p $'\n'"Presione cualquier tecla para continuar: " tec
                fi
            done
            ;;
        3)
            while :; do
                clear
                echo -e "----------------- Servicios ------------------\n"
                echo -e "1) - SSH \n"
                echo -e "2) - MYSQL\n"
                echo -e "3) - Firewall\n"
                echo -e "4) - Ver todos los servicios\n"
                echo -e "5) - Salir\n"
                echo -e "----------------------------------------------\n"

                read -p $'\n'"Seleccione una opcion: " serviceOption

                clear

                case $serviceOption in
                1)
                    systemctl status sshd
                    ;;
                2)
                    systemctl status mysqld
                    ;;
                3)
                    systemctl status firewalld
                    ;;
                4)
                    # https://www.solvetic.com/tutoriales/article/6417-comando-para-ver-los-servicios-activos-en-centos-linux/
                    systemctl list-units --type service
                    ;;
                5)
                    break
                    ;;
                *)
                    clear
                    echo "ERROR!!!! Opcion incorrecta"
                    sleep 2
                    ;;

                esac

                if [[ $serviceOption -eq 1 ||
                    $serviceOption -eq 2 ||
                    $serviceOption -eq 3 ||
                    $serviceOption -eq 4 ]]; then
                    read -p $'\n'"Presione cualquier tecla para continuar: " tec
                fi

            done

            ;;
        4)
            while :; do
                clear
                echo -e "-------------------- Red ---------------------\n"
                echo -e "1) - Ver datos de red detallado\n"
                echo -e "2) - Ver datos de red minimo\n"
                echo -e "3) - Salir\n"
                echo -e "----------------------------------------------\n"

                read -p $'\n'"Seleccione una opcion: " redDetailOption

                clear
                if [ $redDetailOption -eq 1 ]; then
                    ifconfig
                elif [ $redDetailOption -eq 2 ]; then
                    inet=$(ifconfig | grep inet | sed 1q | awk '{print $2}')
                    netmask=$(ifconfig | grep netmask | sed 1q | awk '{print $4}')
                    broadcast=$(ifconfig | grep broadcast | sed 1q | awk '{print $6}')

                    echo -e "Ip: $inet\n"
                    echo -e "Netmask: $netmask\n"
                    echo -e "Broadcast: $broadcast\n"
                elif [ $redDetailOption -eq 3 ]; then
                    break
                else
                    clear
                    echo "ERROR!!!! Opcion incorrecta"
                    sleep 2
                fi

                if [ $redDetailOption -eq 1 ] || [ $redDetailOption -eq 2 ]; then
                    read -p $'\n'"Presione cualquier tecla para continuar: " tec
                fi
            done
            ;;
        5)
            break
            ;;
        *)
            echo "ERROR!!!! Opcion incorrecta"
            sleep 2
            ;;

        esac
    done
}

systemDataMenu
