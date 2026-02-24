import { useState } from 'react';
import { Fab, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingAddButton() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            defaultValue="Expense"
                            size="small"
                        >
                            <MenuItem value="Income">Income</MenuItem>
                            <MenuItem value="Expense">Expense</MenuItem>
                        </TextField>

                        <TextField
                            label="Category"
                            placeholder="e.g. Groceries"
                            size="small"
                        />

                        <TextField
                            label="Amount"
                            placeholder="0.00"
                            size="small"
                            type="number"
                        />
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button onClick={handleClose} color="inherit" sx={{ textTransform: 'none' }}>Cancel</Button>
                    <Button onClick={handleClose} variant="contained" sx={{ textTransform: 'none', bgcolor: '#1976d2' }}>Add Transaction</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
