import { Toolbar, Typography, Box } from "@mui/material";
import ShowChartIcon from '@mui/icons-material/ShowChart';

function TopSideBar() {
    return <Toolbar sx={{ py: 2, mb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pl: 1 }}>
            <Box sx={{
                bgcolor: '#2196f3',
                color: 'white',
                p: 0.5,
                borderRadius: 1,
                display: 'flex'
            }}>
                <ShowChartIcon sx={{ fontSize: 24 }} />
            </Box>
            <Typography variant="h6" sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '1.2rem',
                letterSpacing: '-0.5px'
            }}>
                MUI Finance Tracker
            </Typography>
        </Box>
    </Toolbar>
}

export default TopSideBar