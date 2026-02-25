import { Card, CardContent, Typography, Box, Button, TextField, MenuItem } from "@mui/material";
import { useState } from 'react';
import { useFinance } from "../../../../context/FinanceContext";

export default function QuickTransfer() {
    const { contacts, addTransaction } = useFinance();
    const [selectedContact, setSelectedContact] = useState(contacts[0]);
    const [amount, setAmount] = useState('');

    const handleSend = () => {
        if (!amount) return;
        addTransaction({
            name: `Transfer to ${selectedContact}`,
            amount: Math.abs(parseFloat(amount)),
            type: 'Expense'
        });
        setAmount('');
    };

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none', mb: 3 }}>
            <CardContent sx={{ p: 3, pb: '24px !important' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary', letterSpacing: '-0.5px', mb: 2 }}>
                    Quick Transfer
                </Typography>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        select
                        label="To"
                        value={selectedContact}
                        onChange={(e) => setSelectedContact(e.target.value)}
                        size="small"
                    >
                        {contacts.map((contact: string) => (
                            <MenuItem key={contact} value={contact}>
                                {contact}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Amount"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        size="small"
                        type="number"
                    />

                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            mt: 1,
                            bgcolor: '#1976d2',
                            textTransform: 'none',
                            fontWeight: 500,
                            py: 1
                        }}
                        onClick={handleSend}
                    >
                        Send
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
