import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';

interface SideBarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void
}

function ListSideBar(prop: SideBarProps) {

    const menuItems = [
        { text: 'Dashboard', icon: <DashboardIcon /> },
        { text: 'Transactions', icon: <AttachMoneyIcon /> },
        { text: 'Wallet', icon: <AccountBalanceWalletIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> }
    ]

    return <List sx={{ p: 0 }}>
        {menuItems.map(item => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton
                    selected={prop.activeTab === item.text}
                    onClick={() => prop.setActiveTab(item.text)}
                    sx={{
                        '&.Mui-selected': { bgcolor: 'rgba(255, 255, 255, 0.16)' },
                        '&.Mui-selected:hover': { bgcolor: 'rgba(255, 255, 255, 0.24)' },
                    }}
                >
                    <ListItemIcon sx={{ color: `white` }}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
            </ListItem>
        ))}
    </List>
}

export default ListSideBar