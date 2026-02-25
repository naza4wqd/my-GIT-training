import { Card, CardContent, Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useFinance } from "../../../../context/FinanceContext";

const getIconAndColor = (category: string, type: string) => {
    let icon = type === 'Income' ? <AttachMoneyIcon sx={{ fontSize: 20 }} /> : <ShoppingCartIcon sx={{ fontSize: 20 }} />;
    let bgColor = '#f5f5f5';
    let iconColor = '#757575';
    let textColor = '#424242';

    if (type === 'Income') {
        bgColor = '#e8f5e9'; iconColor = '#2e7d32'; textColor = '#2e7d32';
    } else {
        if (category === 'Groceries' || category === 'Transport') {
            bgColor = '#fff3e0'; iconColor = '#ed6c02'; textColor = '#d32f2f';
        } else {
            bgColor = '#ffebee'; iconColor = '#d32f2f'; textColor = '#d32f2f';
        }
    }

    return { icon, bgColor, iconColor, textColor };
};

export default function RecentTransactionsList() {
    const { transactions } = useFinance();
    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none' }}>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 2 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', letterSpacing: '-0.5px' }}>
                        Recent Transactions
                    </Typography>
                    <Button variant="text" size="small" sx={{ textTransform: 'none', fontWeight: 500 }}>
                        View All
                    </Button>
                </Box>

                <List sx={{ pt: 0 }}>
                    {transactions.slice(0, 5).map((tx: any) => {
                        const { icon, bgColor, iconColor, textColor } = getIconAndColor(tx.name, tx.type);

                        return (
                            <ListItem key={tx.id} disablePadding sx={{ py: 1.5 }}>
                                <ListItemAvatar sx={{ minWidth: 48 }}>
                                    <Avatar sx={{ bgcolor: bgColor, color: iconColor, width: 36, height: 36 }}>
                                        {icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={tx.name}
                                    secondary={tx.date || 'Recent'}
                                    primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem', color: 'text.primary' }}
                                    secondaryTypographyProps={{ fontSize: '0.8rem', mt: 0.2 }}
                                />
                                <Typography sx={{ fontWeight: 600, color: textColor, fontSize: '0.95rem' }}>
                                    {tx.type === 'Expense' ? `-$${Math.abs(tx.amount).toFixed(2)}` : `+$${Math.abs(tx.amount).toFixed(2)}`}
                                </Typography>
                            </ListItem>
                        );
                    })}
                </List>
            </CardContent>
        </Card>
    );
}
