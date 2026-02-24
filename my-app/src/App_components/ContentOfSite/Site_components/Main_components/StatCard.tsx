import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

interface StatCardProps {
    title: string;
    amount: string;
    icon?: React.ReactNode;
}

export default function StatCard(prop: StatCardProps) {
    return (
        <Card sx={{
            borderRadius: 2,
            height: '100%',
            boxShadow: 'none',
            border: '1px solid #e0e0e0'
        }}>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500, mb: 1, letterSpacing: '-0.2px' }}>
                            {prop.title}
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 500, color: '#1a1a1a', letterSpacing: '-0.5px' }}>
                            {prop.amount}
                        </Typography>
                    </Box>
                    {prop.icon && (
                        <Avatar sx={{ bgcolor: '#e8f5e9', color: '#2e7d32', width: 44, height: 44 }}>
                            {prop.icon}
                        </Avatar>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}