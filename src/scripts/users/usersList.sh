usersList() {
    clear
    echo -e "------------------- Usuarios en el sistema -------------------\n"
    users=$(grep home /etc/passwd | cut -d : -f 1)
    for user in $users; do
        source ./users/dataUser.sh
        dataUser "$user"
    done
    echo "--------------------------------------------------------------"
}
