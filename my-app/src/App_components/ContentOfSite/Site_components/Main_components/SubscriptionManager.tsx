import { Card, CardContent, Typography, Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Chip } from "@mui/material";
import { dashBoardData } from "../../../../data/dashBoardData";

export default function SubscriptionManager() {
    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none', mb: 3 }}>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 2 } }}>
                <Typography variant="h6" sx={{ fontWeight: 600, letterSpacing: '-0.5px', mb: 2 }}>
                    Subscriptions
                </Typography>

                <List sx={{ pt: 0 }}>
                    {dashBoardData.subscriptions.map((sub) => (
                        <ListItem key={sub.id} disablePadding sx={{ py: 1 }}>
                            <ListItemAvatar sx={{ minWidth: 48 }}>
                                <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36, fontWeight: 'bold' }}>
                                    {sub.logo}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={sub.name}
                                secondary={`Due: ${sub.dueDate}`}
                                primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                                secondaryTypographyProps={{ fontSize: '0.8rem', mt: 0.2 }}
                            />
                            <Box sx={{ textAlign: 'right' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                                    ${sub.price.toFixed(2)}
                                </Typography>
                                <Chip label={sub.status} size="small" color="success" variant="outlined" sx={{ height: 20, fontSize: '0.7rem' }} />
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}
