import { Card, CardContent, Typography, Box, Button, TextField, MenuItem } from "@mui/material";
import { dashBoardData } from "../../../../data/dashBoardData";

export default function QuickTransfer() {
    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0', mb: 3 }}>
            <CardContent sx={{ p: 3, pb: '24px !important' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.5px', mb: 2 }}>
                    Quick Transfer
                </Typography>

                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        select
                        label="To"
                        defaultValue={dashBoardData.quickTransfer.contacts[0]}
                        size="small"
                        sx={{ bgcolor: 'white' }}
                    >
                        {dashBoardData.quickTransfer.contacts.map((contact: string) => (
                            <MenuItem key={contact} value={contact}>
                                {contact}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label="Amount"
                        placeholder="0.00"
                        size="small"
                        sx={{ bgcolor: 'white' }}
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
                    >
                        Send
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
}
