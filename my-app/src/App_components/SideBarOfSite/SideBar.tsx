import { Drawer } from "@mui/material"

import TopSideBar from "./SideBar_components/TopSideBar"
import ListSideBar from "./SideBar_components/ListSideBar"
import BottomSideBar from "./SideBar_components/BottomSideBar"

import { DRAWER_WIDTH } from "../../constants"

interface SideBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void
}

function SideBar(prop: SideBarProps) {
    return <Drawer
        sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                bgcolor: '#0a1929',
                color: 'white',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <TopSideBar />

        <ListSideBar
            activeTab={prop.activeTab}
            setActiveTab={prop.setActiveTab}
        />

        <BottomSideBar />

    </Drawer>
}

export default SideBar