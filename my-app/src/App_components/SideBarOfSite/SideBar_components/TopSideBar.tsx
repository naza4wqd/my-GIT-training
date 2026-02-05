import { Toolbar, Typography } from "@mui/material";

function TopSideBar() {
    return <Toolbar sx={{ boxShadow: 1 }}>
        <Typography variant="h6" sx={{
            color: '#90caf9',
            fontWeight: 'bold', width: `100%`
        }}>
            FinApp
        </Typography>
    </Toolbar>
}

export default TopSideBar