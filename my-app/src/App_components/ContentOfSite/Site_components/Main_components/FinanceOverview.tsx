import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFinance } from "../../../../context/FinanceContext";

export default function FinanceOverview() {
    const { monthlyChartData } = useFinance();

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none', height: '100%' }}>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', letterSpacing: '-0.5px' }}>
                            Finance Overview
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Total balance overpast 6 months
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{
                            display: 'flex', alignItems: 'center', gap: 0.5,
                            border: '1px solid', borderColor: 'divider', borderRadius: 1.5, px: 1.5, py: 0.5,
                            color: '#1976d2', fontWeight: 500, fontSize: '0.85rem'
                        }}>
                            <ShowChartIcon sx={{ fontSize: 16 }} />
                            Month
                        </Box>
                        <IconButton size="small">
                            <MoreVertIcon sx={{ fontSize: 20 }} />
                        </IconButton>
                    </Box>
                </Box>

                <Box sx={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={monthlyChartData}
                            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} tickFormatter={(value) => `$${value}`} />
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                itemStyle={{ fontWeight: 500 }}
                            />
                            <Area type="monotone" dataKey="income" stroke="#1976d2" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
                            <Area type="monotone" dataKey="expenses" stroke="#90caf9" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
            </CardContent>
        </Card>
    );
}
