-- CreateTable
CREATE TABLE `Donator` (
    `id` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Donator` ADD CONSTRAINT `Donator_id_fkey` FOREIGN KEY (`id`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
