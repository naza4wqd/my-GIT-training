import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface StatCardProps {
    title: string;
    amount: string;
    icon: React.ReactNode;
    trend?: string;
}

function StatCard(prop: StatCardProps) {
    return (
        <Card sx={{
            borderRadius: 4,
            height: '100%'
        }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                            {prop.title}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                            {prop.amount}
                        </Typography>
                    </Box>
                    <Avatar sx={{ bgcolor: '#e8f5e9', color: '#2e7d32', width: 40, height: 40 }}>
                        {prop.icon}
                    </Avatar>
                </Box>

                {prop.trend && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUpIcon sx={{ fontSize: 16, color: '#2e7d32' }} />
                        <Typography variant="caption" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                            {prop.trend}
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

export default StatCard