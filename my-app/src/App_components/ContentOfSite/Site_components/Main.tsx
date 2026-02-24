import { Box, Grid as Grid, Typography } from "@mui/material";
import StatCard from "./Main_components/StatCard"
import FinanceOverview from "./Main_components/FinanceOverview"
import QuickTransfer from "./Main_components/QuickTransfer"
import Goals from "./Main_components/Goals"
import RecentTransactionsList from "./Main_components/RecentTransactionsList"
import FloatingAddButton from "./Main_components/FloatingAddButton"
import CallMadeIcon from '@mui/icons-material/CallMade';
import { dashBoardData } from "../../../data/dashBoardData";

interface activeTabProp {
    activeTab: string
}

function Main(prop: activeTabProp) {
    const formatMoney = (val: number) => `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f5f6f8', p: 3, position: 'relative' }}>

            {prop.activeTab === 'Dashboard' ? <Box>
                {/* Top Row: Stat Cards */}
                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StatCard
                            title="Total Balance"
                            amount={formatMoney(dashBoardData.stats.totalBalance)}
                            icon={<CallMadeIcon sx={{ transform: 'rotate(45deg)' }} />}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StatCard
                            title="Income"
                            amount={formatMoney(dashBoardData.stats.income)}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StatCard
                            title="Expenses"
                            amount={formatMoney(dashBoardData.stats.expenses)}
                        />
                    </Grid>
                </Grid>

                {/* Middle and Bottom Rows using Grid 8 / 4 */}
                <Grid container spacing={3}>
                    {/* Left Column - 8/12 */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Box sx={{ mb: 3 }}>
                            <FinanceOverview />
                        </Box>
                        <Box>
                            <RecentTransactionsList />
                        </Box>
                    </Grid>

                    {/* Right Column - 4/12 */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <QuickTransfer />
                        <Goals />
                    </Grid>
                </Grid>

                <FloatingAddButton />
            </Box>
                :
                <Typography variant="h6" color="text.secondary">
                    Will be sooner ...
                </Typography>
            }
        </Box>
    );
}

export default Main;