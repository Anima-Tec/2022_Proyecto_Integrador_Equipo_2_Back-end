dataUser() {
    name="$1"
    isRoot=$(grep wheel /etc/group | cut -d : -f 4 | sed 's/,/\n/g' | grep $user | awk 'NR==1')
    groups=$(
        groups $name | cut -d : -f 2 | sed 's/ //' | sed 's/ /\n/g' | while read -r group; do
            if [ "$group" != "users" ]; then
                echo "  - $group"
            fi
        done
    )

    echo -e "- Nombre: $name\n"

    if [[ "$2" == "showMoreData" ]]; then
        if [[ "${#groups}" -ne 0 ]]; then
            echo -e "- Grupos:"
            echo "$groups"
        else
            echo "- No contiene grupos secundarios"
        fi
        if [[ "$isRoot" == "$name" ]]; then
            echo -e "\n- Tiene permisos root\n"
        fi
    fi
}
