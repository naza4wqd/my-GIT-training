import { AppBar, Toolbar, Box, InputBase, IconButton, Badge, Avatar, Switch } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useThemeContext } from "../../../context/ThemeContext";

function Header() {
    const { mode, toggleTheme } = useThemeContext();
    return <AppBar
        position="sticky"
        sx={{
            width: `100%`,
            color: 'text.primary',
            boxShadow: 'none',
        }}
    >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: mode === 'light' ? '#f1f3f4' : 'rgba(255, 255, 255, 0.05)',
                borderRadius: 2,
                px: 2,
                py: 0.5,
                width: 300
            }}>
                <SearchIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
                <InputBase
                    placeholder="Search..."
                    sx={{ ml: 1, flex: 1, fontSize: '0.9rem' }}
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <IconButton>
                    <Badge variant="dot" color="error">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <Switch checked={mode === 'dark'} onChange={toggleTheme} color="default" sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: mode === 'light' ? '#424242' : '#90caf9',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: mode === 'light' ? '#424242' : '#90caf9',
                    },
                }} />
                <Avatar sx={{ width: 32, height: 32 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2TtnsUygscoXPw0bqtTOHC2a7DwmhC7NBg&s" />
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header