-- DropForeignKey
ALTER TABLE `center` DROP FOREIGN KEY `Center_id_fkey`;

-- AlterTable
ALTER TABLE `user` MODIFY `hashedPassword` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Center` ADD CONSTRAINT `Center_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
