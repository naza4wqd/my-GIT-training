import { AppBar, Toolbar, Typography } from "@mui/material"

const drawerWidth = 240;

function HeaderOfSite() {
    return <AppBar
        position="fixed"
        sx={{
            width: `calc(100% - ${drawerWidth}px)`, // Ширина = 100% минус ширина меню
            ml: `${drawerWidth}px`, // Отступ слева на ширину меню
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

export default HeaderOfSite