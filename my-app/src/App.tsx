import { Box, Drawer, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Avatar } from '@mui/material';

// Иконки (если нет, удали пока или установи npm install @mui/icons-material)
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsIcon from '@mui/icons-material/Settings';

import HeaderOfSite from "./components/HeaderOfSite"

// Ширина меню. Выносим в переменную, чтобы менять в одном месте.
const drawerWidth = 240;

function App() {
  return (
    // 1. Box sx={{ display: 'flex' }} — это главный контейнер.
    // Он работает как flex-row. Слева меню, справа контент.
    <Box sx={{ display: 'flex' }}>

      {/* 2. AppBar — Верхняя шапка */}
      <HeaderOfSite />

      {/* 3. Drawer — Боковое меню */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#0a1929',
            color: 'white',
          },
        }}
        variant="permanent" // Меню всегда видно
        anchor="left"
      >
        {/* Логотип или заголовок меню */}
        <Toolbar>
          <Typography variant="h6" sx={{ color: '#90caf9', fontWeight: 'bold' }}>
            FinApp
          </Typography>
        </Toolbar>

        {/* Список кнопок меню */}
        <List>
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

        {/* Аватарка внизу меню */}
        <Box sx={{ position: 'absolute', bottom: 0, p: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar alt="User" src="/static/images/avatar/1.jpg" />
          <Box sx={{ ml: 2 }}>
            <Typography variant="body2">Ivan Ivanov</Typography>
            <Typography variant="caption" sx={{ color: 'grey.500' }}>User</Typography>
          </Box>
        </Box>

      </Drawer>

      {/* 4. Main — Область контента */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#f5f5f5', p: 3, minHeight: '100vh' }}
      >
        {/* Этот Toolbar пустой. Он нужен, чтобы контент не заезжал ПОД шапку */}
        <Toolbar />

        <Typography paragraph>
          Здесь будут наши карточки и графики...
        </Typography>
      </Box>
    </Box>
  );
}

export default App;