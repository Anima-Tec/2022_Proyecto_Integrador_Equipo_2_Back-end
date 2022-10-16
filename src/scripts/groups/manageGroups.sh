manageGroups() {
    clear

    groupName="$1"
    option="$2"
    groupFind=$(grep "$groupName" /etc/group | cut -d : -f 1)

    if [ "$groupFind" = "$groupName" ]; then
        case $option in
        "add")
            usermod -aG "$groupName" "$user"
            [ $? -eq 0 ] && echo -e "Se agrego el grupo $groupName al usuario $user!\n" || echo -e "Fallo al agregar el grupo $groupName al usuario $user\n"
            ;;
        "remove")
            gpasswd -d "$user" "$groupName"
            [ $? -eq 0 ] && echo -e "Se elimino el grupo $groupName del usuario $user!\n" || echo -e "Fallo al eliminar el grupo $groupName del usuario $user\n"
            ;;
        esac
    else
        echo "No existe el grupo $groupName"
    fi
}
