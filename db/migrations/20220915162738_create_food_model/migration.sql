-- CreateTable
CREATE TABLE `Food` (
    `id` VARCHAR(191) NOT NULL,
    `centerId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `unitMeasurement` ENUM('KG', 'BAG', 'G', 'ML', 'L') NOT NULL,

    UNIQUE INDEX `Food_name_key`(`name`),
    PRIMARY KEY (`id`, `centerId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `Center`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
