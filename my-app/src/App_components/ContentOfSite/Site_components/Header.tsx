import { AppBar, Toolbar, Typography } from "@mui/material"

function Header() {
    return <AppBar
        position="sticky"
        sx={{
            width: `100%`,
            bgcolor: 'white',
            color: 'text.primary',
            boxShadow: 1
        }}
    >
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                MUI Finance Tracker
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Header