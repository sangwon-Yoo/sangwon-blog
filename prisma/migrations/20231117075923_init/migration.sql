-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `authorizedYN` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContentsCategory` (
    `name` VARCHAR(191) NOT NULL,
    `createdDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContentsData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `contentsHtml` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ContentsData_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContentsSummary` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(191) NOT NULL,
    `useId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `subTitle` VARCHAR(191) NOT NULL,
    `representativeImgURL` VARCHAR(191) NOT NULL,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedDate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `ContentsSummary_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ContentsData` ADD CONSTRAINT `ContentsData_title_fkey` FOREIGN KEY (`title`) REFERENCES `ContentsSummary`(`title`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContentsSummary` ADD CONSTRAINT `ContentsSummary_categoryName_fkey` FOREIGN KEY (`categoryName`) REFERENCES `ContentsCategory`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContentsSummary` ADD CONSTRAINT `ContentsSummary_useId_fkey` FOREIGN KEY (`useId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
