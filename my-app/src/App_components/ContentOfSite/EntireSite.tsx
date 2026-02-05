import { Box } from "@mui/material"

import Header from "./Site_components/Header"
import Main from "./Site_components/Main"
import { DRAWER_WIDTH } from "../../constants"

function EntireSite() {
    return <Box sx={{
        flexGrow: 1,
        display: `flex`,
        flexDirection: `column`,
        minHeight: `100vh`,
        width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` }
    }}>
        < Header />
        < Main />
    </Box>
}

export default EntireSite