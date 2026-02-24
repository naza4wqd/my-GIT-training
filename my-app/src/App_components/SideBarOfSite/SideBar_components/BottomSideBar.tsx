import { Avatar, Box, Typography, Divider } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function BottomSideBar() {
    return <Box sx={{ mt: 'auto', p: 2 }}>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <Avatar alt="User" src="https://i.pravatar.cc/150?img=11" sx={{ width: 40, height: 40 }} />
            <Box sx={{ ml: 1.5, flex: 1 }}>
                <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>User Profile</Typography>
                <Typography variant="caption" sx={{ color: '#9da4ae' }}>tamel@gmail.com</Typography>
            </Box>
            <ExpandMoreIcon sx={{ color: '#9da4ae' }} />
        </Box>
    </Box>
}

export default BottomSideBar