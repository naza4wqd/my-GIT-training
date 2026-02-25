import { Box } from '@mui/material';
import { useState } from 'react';

import SideBar from './App_components/SideBarOfSite/SideBar';
import EntireSite from './App_components/ContentOfSite/EntireSite';
import { FinanceProvider } from './context/FinanceContext';
import { AppThemeProvider } from './context/ThemeContext';

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <AppThemeProvider>
      <FinanceProvider>
        <Box sx={{
          display: 'flex',
          minHeight: '100vh',
          bgcolor: 'background.default'
        }}>

          <SideBar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <EntireSite
            activeTab={activeTab}
          />

        </Box>
      </FinanceProvider>
    </AppThemeProvider>
  );
}

export default App;