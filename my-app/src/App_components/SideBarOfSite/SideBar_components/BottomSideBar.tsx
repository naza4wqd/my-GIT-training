import { Avatar, Box, Typography } from "@mui/material"

function BottomSideBar() {
    return <Box sx={{ position: 'absolute', bottom: 0, p: 2, display: 'flex', alignItems: 'center' }}>
        <Avatar alt="User" src="/static/images/avatar/1.jpg" />
        <Box sx={{ ml: 2 }}>
            <Typography variant="body2">Ivan Ivanov</Typography>
            <Typography variant="caption" sx={{ color: 'grey.500' }}>User</Typography>
        </Box>
    </Box>
}

export default BottomSideBar