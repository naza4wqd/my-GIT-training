import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface StatCardProps {
    title: string;
    amount: string;
    icon: React.ReactNode;
    trend?: string;
}

function StatCard({ title, amount, icon, trend }: StatCardProps) {
    return (
        <Card sx={{
            borderRadius: 4,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            height: '100%'
        }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 600 }}>
                            {title}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>
                            {amount}
                        </Typography>
                    </Box>
                    {/* Круглая иконка или индикатор тренда как на макете */}
                    <Avatar sx={{ bgcolor: '#e8f5e9', color: '#2e7d32', width: 40, height: 40 }}>
                        {icon}
                    </Avatar>
                </Box>

                {trend && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <TrendingUpIcon sx={{ fontSize: 16, color: '#2e7d32' }} />
                        <Typography variant="caption" sx={{ color: '#2e7d32', fontWeight: 600 }}>
                            {trend}
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

export default StatCard