import { Box, Grid as Grid, Typography } from "@mui/material";
import StatCard from "./Main_components/StatCard"
import FinanceOverview from "./Main_components/FinanceOverview"
import QuickTransfer from "./Main_components/QuickTransfer"
import RecentTransactionsList from "./Main_components/RecentTransactionsList"
import FloatingAddButton from "./Main_components/FloatingAddButton"
import ExpenseCategories from "./Main_components/ExpenseCategories"
import SubscriptionManager from "./Main_components/SubscriptionManager"
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useFinance } from "../../../context/FinanceContext";

interface activeTabProp {
    activeTab: string
}

function Main(prop: activeTabProp) {
    const { totalBalance, totalIncome, totalExpenses } = useFinance();
    const formatMoney = (val: number) => `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, position: 'relative' }}>

            {prop.activeTab === 'Dashboard' ? <Box>
                {/* Top Row: Stat Cards */}
                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StatCard
                            title="Total Balance"
                            amount={formatMoney(totalBalance)}
                            icon={<CallMadeIcon sx={{ transform: 'rotate(45deg)' }} />}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StatCard
                            title="Income"
                            amount={formatMoney(totalIncome)}
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StatCard
                            title="Expenses"
                            amount={formatMoney(totalExpenses)}
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
                        <Box sx={{ mb: 3 }}>
                            <RecentTransactionsList />
                        </Box>
                    </Grid>

                    {/* Right Column - 4/12 */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <ExpenseCategories />
                        <QuickTransfer />
                        <SubscriptionManager />

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