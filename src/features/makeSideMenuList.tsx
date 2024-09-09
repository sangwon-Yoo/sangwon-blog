import {useQuery} from "@tanstack/react-query";
import {APIInternal} from "@/apiClient/apis";
import {ResCategoryList, ResCategoryWithSummaryList} from "@/types/response";
import {ENDPOINT} from "@/const/endpoint";
import {QUERY_KEY} from "@/const/queryKey";
import Mother from "@/components/top/sideMenuBar/Mother";
import Child from "@/components/top/sideMenuBar/Child";
import SideMenuBar from "@/components/top/sideMenuBar";
import {Dispatch, SetStateAction} from "react";

export default function MakeSideMenuList(
    {showSideMenuBarYN, setShowSideMenuBarYN}: {
        showSideMenuBarYN: boolean,
        setShowSideMenuBarYN: Dispatch<SetStateAction<boolean>>
    }
) {

    const { status, data } = useQuery({
        queryKey : [QUERY_KEY.getCategoryWithSummaryList],
        queryFn : () => APIInternal<ResCategoryWithSummaryList>({
            url : ENDPOINT.getCategoryWithSummaryList,
            contentsType : 'application/json'
        }),
        staleTime : 5 * 60 * 1000,
        retry : false,
    });

    if(status != 'success' || !data) {
        return null;
    }

    const motherList = data.map((mother, index) => (
        <Mother
            key={index}
            text={mother.categoryName}
            childList={mother.summaryList.map((child, index) => (
                <Child key={index} text={child.contentsName} linkUrl={`/contents/${child.id}`} />
            ))}
        />
    ));

    return (
        <SideMenuBar showYN={showSideMenuBarYN} setShowYN={setShowSideMenuBarYN} motherList={motherList} />
    )
}