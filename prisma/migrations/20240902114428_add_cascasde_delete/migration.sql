-- DropForeignKey
ALTER TABLE "ContentsData" DROP CONSTRAINT "ContentsData_title_fkey";

-- AddForeignKey
ALTER TABLE "ContentsData" ADD CONSTRAINT "ContentsData_title_fkey" FOREIGN KEY ("title") REFERENCES "ContentsSummary"("title") ON DELETE CASCADE ON UPDATE CASCADE;
