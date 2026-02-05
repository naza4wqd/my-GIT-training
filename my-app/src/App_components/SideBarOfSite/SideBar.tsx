import { Drawer } from "@mui/material"

import TopSideBar from "./SideBar_components/TopSideBar"
import ListSideBar from "./SideBar_components/ListSideBar"
import BottomSideBar from "./SideBar_components/BottomSideBar"

import { drawerWidth } from "../../App"

function SideBar() {
    return <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                bgcolor: '#0a1929',
                color: 'white',
            },
        }}
        variant="permanent"
        anchor="left"
    >
        {/* Логотип или заголовок меню */}
        <TopSideBar />

        {/* Список кнопок меню */}
        <ListSideBar />

        {/* Аватарка внизу меню */}
        <BottomSideBar />

    </Drawer>
}

export default SideBar