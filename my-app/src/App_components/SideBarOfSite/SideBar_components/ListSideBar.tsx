import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';

function ListSideBar() {
    return <List>
        {['Dashboard', 'Transactions', 'Wallet', 'Settings'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon sx={{ color: 'white' }}>
                        {index === 0 ? <DashboardIcon /> :
                            index === 1 ? <AttachMoneyIcon /> :
                                index === 2 ? <AccountBalanceWalletIcon /> : <SettingsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        ))}
    </List>
}

export default ListSideBar