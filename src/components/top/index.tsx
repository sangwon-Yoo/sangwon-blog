import Header from "@/components/top/header";
import SideMenuBar from "@/components/top/sideMenuBar";
import { useState } from "react";
import MakeSideMenuList from "@/features/makeSideMenuList";

export default function Top() {

    const [showSideMenuBarYN, setShowSideMenuBarYN] = useState<boolean>(false);

    return (
        <>
            <Header setShowSideMenuBarYN={setShowSideMenuBarYN} />
            <MakeSideMenuList showSideMenuBarYN={showSideMenuBarYN} setShowSideMenuBarYN={setShowSideMenuBarYN} />
        </>
    );
}