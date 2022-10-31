#!/bin/bash

clear

#################################################################

TODAY=$(date "+%d-%b-%Y-%H:%M:%S")
DB_BACKUP_PATH=~/DB_backup
MYSQL_HOST=10.1.0.212
MYSQL_USER=cronBackup
MYSQL_PASSWORD=ljkdsaldas1
DATABASE_NAME=alidar
LOGS_FILE=$DB_BACKUP_PATH/logs.txt

#################################################################

if [ -d $DB_BACKUP_PATH ]; then
    mkdir ${DB_BACKUP_PATH}/${TODAY}
else
    mkdir ${DB_BACKUP_PATH} ${DB_BACKUP_PATH}/${TODAY}
fi

if [ ! -f "$LOGS_FILE" ]; then
    touch $DB_BACKUP_PATH/logs.txt
fi

mysqldump --opt --user=${MYSQL_USER} --password=${MYSQL_PASSWORD} ${DATABASE_NAME} >${DB_BACKUP_PATH}/${TODAY}/${DATABASE_NAME}-${TODAY}.sql

if [ $? -eq 0 ]; then
    echo -e "Backup ${TODAY}/${DATABASE_NAME}-${TODAY}.sql exitoso\n" >>$LOGS_FILE
else
    echo "Backup ${TODAY}/${DATABASE_NAME}-${TODAY}.sql erroneo" >>$LOGS_FILE
fi

clear
