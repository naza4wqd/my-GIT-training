import { Drawer, Box } from "@mui/material"

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
                bgcolor: '#1c2536',
                color: '#9da4ae',
                borderRight: 'none'
            },
        }}
        variant="permanent"
        anchor="left"
    >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <TopSideBar />

            <ListSideBar
                activeTab={prop.activeTab}
                setActiveTab={prop.setActiveTab}
            />

            <BottomSideBar />
        </Box>
    </Drawer>
}

export default SideBar