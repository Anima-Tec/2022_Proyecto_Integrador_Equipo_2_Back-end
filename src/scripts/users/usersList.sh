usersList() {
    clear
    echo -e "------------------- Usuarios en el sistema -------------------\n"
    users=$(grep home /etc/passwd | cut -d : -f 1)
    for user in $users; do
        source /project/2022_Proyecto_Integrador_Equipo_2_Back-end/src/scripts/users/dataUser.sh
        dataUser "$user"
    done
    echo "--------------------------------------------------------------"
}
