import { Box, Typography } from "@mui/material"

function Main() {
    return <Box
        component="main"
        sx={{
            bgcolor: '#f5f5f5', p: 3,
        }}
    >

        <Typography paragraph>
            Here will be content
        </Typography>
    </Box>
}

export default Main