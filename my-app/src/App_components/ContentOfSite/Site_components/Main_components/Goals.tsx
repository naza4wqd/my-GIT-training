import { Card, CardContent, Typography, Box, LinearProgress, styled } from "@mui/material";
import { dashBoardData } from "../../../../data/dashBoardData";

const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
    '& .MuiLinearProgress-bar': {
        borderRadius: 4,
        backgroundColor: '#1976d2',
    },
}));

export default function Goals() {
    const { name, targetAmount, currentAmount } = dashBoardData.goals;
    const progress = (currentAmount / targetAmount) * 100;

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 3, pb: '24px !important' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.5px', mb: 2 }}>
                    Goals
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                        {name}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
                        ${targetAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Typography>
                </Box>

                <BorderLinearProgress variant="determinate" value={progress} sx={{ mb: 1 }} />

                <Typography variant="caption" color="text.secondary">
                    Progress for 30,000
                </Typography>
            </CardContent>
        </Card>
    );
}
