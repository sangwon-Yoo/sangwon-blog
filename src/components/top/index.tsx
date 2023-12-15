import Header from "@/components/top/header";
import SideMenuBar from "@/components/top/sideMenuBar";
import { useState } from "react";

export default function Top() {

    const [showSideMenuBarYN, setShowSideMenuBarYN] = useState<boolean>(false);

    return (
        <>
            <Header setShowSideMenuBarYN={setShowSideMenuBarYN} />
            <SideMenuBar showYN={showSideMenuBarYN} setShowYN={setShowSideMenuBarYN} />
        </>
    );
}