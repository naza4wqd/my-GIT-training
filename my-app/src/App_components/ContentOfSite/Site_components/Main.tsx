import { Box, Grid as Grid } from "@mui/material";
import StatCard from "./Main_components/StatCard"

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CallMadeIcon from '@mui/icons-material/CallMade';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

function Main() {
    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#5b7da0', p: 2 }}>

            <Grid container spacing={3}>
                {/* xs={12} — на мобилках на всю ширину, md={4} — на десктопе 1/3 ширины (4 из 12 колонок) */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard
                        title="Total Balance"
                        amount="$12,450.00"
                        icon={<AccountBalanceWalletIcon />}
                        trend="+12%"
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard
                        title="Income"
                        amount="$4,500.00"
                        icon={<CallReceivedIcon />}
                    />
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <StatCard
                        title="Expenses"
                        amount="$1,200.00"
                        icon={<CallMadeIcon />}
                        trend="+14%"
                    />
                </Grid>
            </Grid>

            {/* Здесь позже будет таблица */}
        </Box>
    );
}

export default Main;