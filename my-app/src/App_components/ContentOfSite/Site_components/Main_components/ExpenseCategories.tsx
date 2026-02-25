import { Card, CardContent, Typography, Box } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { useFinance } from "../../../../context/FinanceContext";

export default function ExpenseCategories() {
    const { expenseCategoriesData } = useFinance();

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none', mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: '-0.5px', mb: 2 }}>
                    Expenses by Category
                </Typography>

                <Box sx={{ width: '100%', height: 220, position: 'relative' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={expenseCategoriesData}
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {expenseCategoriesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                                itemStyle={{ fontWeight: 500 }}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Total</Typography>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            ${expenseCategoriesData.reduce((a, b) => a + b.value, 0)}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
