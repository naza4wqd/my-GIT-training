import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsIcon from '@mui/icons-material/Settings';

interface SideBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void
}

function ListSideBar(prop: SideBarProps) {

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Transactions', icon: <SyncAltIcon /> },
        { text: 'Wallet', icon: <AccountBalanceWalletIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> }
    ]

    return <List sx={{ p: 2, flexGrow: 1 }}>
        {menuItems.map(item => (
            <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                    selected={prop.activeTab === item.text}
                    onClick={() => prop.setActiveTab(item.text)}
                    sx={{
                        borderRadius: 1.5,
                        py: 1,
                        '&.Mui-selected': {
                            bgcolor: 'rgba(33, 150, 243, 0.12)',
                            color: '#60a5fa',
                            '& .MuiListItemIcon-root': { color: '#60a5fa' }
                        },
                        '&.Mui-selected:hover': { bgcolor: 'rgba(33, 150, 243, 0.2)' },
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.04)' }
                    }}
                >
                    <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                            fontSize: '0.95rem',
                            fontWeight: prop.activeTab === item.text ? 600 : 500
                        }}
                    />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
}

export default ListSideBar