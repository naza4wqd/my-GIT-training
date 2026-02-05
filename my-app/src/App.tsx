import { Box } from '@mui/material';

import SideBar from './App_components/SideBarOfSite/SideBar';
import EntireSite from './App_components/ContentOfSite/EntireSite';

// Ширина меню. Выносим в переменную, чтобы менять в одном месте.
export const drawerWidth = 200;

function App() {
  return (
    // 1. Box sx={{ display: 'flex' }} — это главный контейнер.
    // Он работает как flex-row. Слева меню, справа контент.
    <Box sx={{
      display: 'flex'
    }}>

      {/* 3. Drawer — Боковое меню */}
      <SideBar />

      <EntireSite />

    </Box>
  );
}

export default App;