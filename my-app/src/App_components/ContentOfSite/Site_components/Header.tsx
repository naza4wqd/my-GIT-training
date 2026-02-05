import { AppBar, Toolbar, Typography } from "@mui/material"

function Header() {
    return <AppBar
        position="sticky"
        sx={{
            width: `100%`,
            bgcolor: 'white', // Цвет фона шапки (как на макете)
            color: 'text.primary', // Цвет текста черный
            boxShadow: 1 // Легкая тень
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