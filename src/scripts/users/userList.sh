usersList() {
    clear
    echo -e "------------------- Usuarios en el sistema -------------------\n"
    users="$1"
    for user in $users; do
        source ./data_user.sh
        dataUser "$user"
    done
    echo "--------------------------------------------------------------"
}
