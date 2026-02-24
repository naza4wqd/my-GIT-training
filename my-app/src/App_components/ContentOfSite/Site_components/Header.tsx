import { AppBar, Toolbar, Box, InputBase, IconButton, Badge, Avatar, Switch } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Header() {
    return <AppBar
        position="sticky"
        sx={{
            width: `100%`,
            bgcolor: 'white',
            color: 'text.primary',
            boxShadow: 'none',
            borderBottom: '1px solid #e0e0e0'
        }}
    >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: '#f1f3f4',
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
                <Switch defaultChecked color="default" sx={{
                    '& .MuiSwitch-switchBase.Mui-checked': {
                        color: '#424242',
                    },
                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                        backgroundColor: '#424242',
                    },
                }} />
                <Avatar sx={{ width: 32, height: 32 }} src="https://i.pravatar.cc/150?img=11" />
            </Box>
        </Toolbar>
    </AppBar>
}

export default Header