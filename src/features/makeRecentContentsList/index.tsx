import useGetSummaryList from "@/hook/useGetSummaryList";
import RecentContents from "@/features/makeRecentContentsList/block/RecentContents";
import dayjs from "dayjs";

export default function MakeRecentContentsList() {

    const { data, status } = useGetSummaryList();

    return (
        <>
            {data?.map((summary, index) => {
                return (
                    <RecentContents
                        key={index}
                        date={`${dayjs(summary.updatedDate).format('MMM. DD. YY')}`}
                        title={summary.title}
                        subtitle={summary.subTitle}
                        category={summary.categoryName}
                        imgSrc={summary.representativeImgURL || ''}
                        linkUrl={`/contents/${summary.id}`}
                    />
                );
            })}
        </>
    );
}