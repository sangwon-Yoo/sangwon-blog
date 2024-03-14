-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "authorizedYN" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentsCategory" (
    "name" TEXT NOT NULL,
    "representativeImgURL" TEXT NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContentsCategory_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "ContentsData" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "contentsHtml" TEXT NOT NULL,

    CONSTRAINT "ContentsData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentsSummary" (
    "id" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "representativeImgURL" TEXT,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ContentsSummary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentsData_title_key" ON "ContentsData"("title");

-- CreateIndex
CREATE UNIQUE INDEX "ContentsSummary_title_key" ON "ContentsSummary"("title");

-- AddForeignKey
ALTER TABLE "ContentsData" ADD CONSTRAINT "ContentsData_title_fkey" FOREIGN KEY ("title") REFERENCES "ContentsSummary"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentsSummary" ADD CONSTRAINT "ContentsSummary_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "ContentsCategory"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentsSummary" ADD CONSTRAINT "ContentsSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
