import { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFinance } from "../../../../context/FinanceContext";

export default function FloatingAddButton() {
    const { addTransaction } = useFinance();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState('Expense');
    const [category, setCategory] = useState('Groceries');
    const [amount, setAmount] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setType('Expense');
        setCategory('Groceries');
        setAmount('');
    };

    const handleAdd = () => {
        if (!category || !amount) return;
        const val = parseFloat(amount);
        addTransaction({
            name: category,
            amount: val,
            type: type
        });
        handleClose();
    };

    return (
        <Box>
            <Fab
                color="primary"
                aria-label="add"
                onClick={handleOpen}
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    boxShadow: '0px 8px 16px rgba(25, 118, 210, 0.24)'
                }}
            >
                <AddIcon />
            </Fab>

            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
                <DialogTitle sx={{ fontWeight: 600 }}>New Transaction</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
                        <TextField
                            select
                            label="Type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            size="small"
                        >
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </TextField>

                        <TextField
                            select
                            label="Category"
                            size="small"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled={type === 'Income'}
                        >
                            <MenuItem value="Food">Food & Dining</MenuItem>
                            <MenuItem value="Groceries">Groceries</MenuItem>
                            <MenuItem value="Sharing">Sharing</MenuItem>
                            <MenuItem value="Transport">Transport</MenuItem>
                            <MenuItem value="Entertainment">Entertainment</MenuItem>
                            <MenuItem value="Shopping">Shopping</MenuItem>
                            <MenuItem value="Utilities">Utilities</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                            <MenuItem value="Salary" style={{ display: type === 'Income' ? 'block' : 'none' }}>Salary / Income</MenuItem>
                        </TextField>

                        <TextField
                            label="Amount"
                            placeholder="0.00"
                            size="small"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button onClick={handleClose} color="inherit" sx={{ textTransform: 'none' }}>Cancel</Button>
                    <Button onClick={handleAdd} variant="contained" disabled={!amount || (!category && type === 'Expense')} sx={{ textTransform: 'none', bgcolor: '#1976d2' }}>Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
