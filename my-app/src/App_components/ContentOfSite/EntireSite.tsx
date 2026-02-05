import { Box } from "@mui/material"

import Header from "./Site_components/Header"
import Main from "./Site_components/Main"
import { drawerWidth } from "../../App"

function EntireSite() {
    return <Box sx={{
        flexGrow: 1,
        display: `flex`,
        flexDirection: `column`,
        minHeight: `100vh`,
        width: { sm: `calc(100% - ${drawerWidth}px)` }
    }}>
        < Header />
        < Main />
    </Box>
}

export default EntireSite