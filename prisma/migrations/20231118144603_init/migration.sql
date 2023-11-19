/*
  Warnings:

  - You are about to drop the column `useId` on the `ContentsSummary` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ContentsSummary` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ContentsSummary` DROP FOREIGN KEY `ContentsSummary_useId_fkey`;

-- AlterTable
ALTER TABLE `ContentsCategory` MODIFY `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `ContentsSummary` DROP COLUMN `useId`,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ContentsSummary` ADD CONSTRAINT `ContentsSummary_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
