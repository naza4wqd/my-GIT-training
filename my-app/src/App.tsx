import { Box } from '@mui/material';

import { useState } from 'react';

import SideBar from './App_components/SideBarOfSite/SideBar';
import EntireSite from './App_components/ContentOfSite/EntireSite';


function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <Box sx={{
      display: 'flex'
    }}>

      <SideBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <EntireSite
        activeTab={activeTab}
      />

    </Box>
  );
}

export default App;