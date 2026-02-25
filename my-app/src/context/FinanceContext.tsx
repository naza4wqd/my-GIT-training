import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import { dashBoardData } from '../data/dashBoardData';

export type Transaction = {
    id: string;
    name: string;
    amount: number;
    type: string;
    date?: string;
    color?: string;
};

type Goal = {
    name: string;
    targetAmount: number;
    currentAmount: number;
};

type ContextType = {
    transactions: Transaction[];
    goals: Goal;
    contacts: string[];
    addTransaction: (tx: Omit<Transaction, 'id' | 'date'>) => void;
    totalBalance: number;
    totalIncome: number;
    totalExpenses: number;
    monthlyChartData: { month: string; income: number; expenses: number }[];
    expenseCategoriesData: { name: string; value: number; color: string }[];
};

const FinanceContext = createContext<ContextType | undefined>(undefined);

export const FinanceProvider = ({ children }: { children: ReactNode }) => {
    const [transactions, setTransactions] = useState<Transaction[]>(dashBoardData.transactions);
    const [goals] = useState<Goal>(dashBoardData.goals);
    const [contacts] = useState<string[]>(dashBoardData.quickTransfer.contacts);

    // Dynamic Computations
    const totalIncome = useMemo(() =>
        transactions.filter(t => t.type === 'Income').reduce((acc, t) => acc + (+t.amount), 0)
        , [transactions]);

    const totalExpenses = useMemo(() =>
        transactions.filter(t => t.type === 'Expense').reduce((acc, t) => acc + (+t.amount), 0)
        , [transactions]);

    // Calculate balance dynamically (+ initial fake base if needed, or just diff)
    // We will assume a base of $10,000 for realistic UI looking
    const totalBalance = useMemo(() => totalIncome - totalExpenses, [totalIncome, totalExpenses]);

    // Fake computing monthly data based on transactions. 
    // Usually you'd group by actual dates. Here we'll append to the last month (June).
    const monthlyChartData = useMemo(() => {
        const baseChart = [...dashBoardData.chartData];
        // Ensure we don't accidentally mutate the original import
        const dynamicChart = baseChart.map(m => ({ ...m }));

        // Let's add all dynamic new transactions to 'June' for demonstration
        const newIncome = transactions.filter(t => t.type === 'Income' && !dashBoardData.transactions.find(d => d.id === t.id))
            .reduce((acc, t) => acc + (+t.amount), 0);
        const newExpenses = transactions.filter(t => t.type === 'Expense' && !dashBoardData.transactions.find(d => d.id === t.id))
            .reduce((acc, t) => acc + (+t.amount), 0);

        const juneIndex = dynamicChart.findIndex(c => c.month === 'June');
        if (juneIndex !== -1) {
            dynamicChart[juneIndex].income += newIncome;
            dynamicChart[juneIndex].expenses += newExpenses;
        }

        return dynamicChart;
    }, [transactions]);

    const expenseCategoriesData = useMemo(() => {
        const expenses = transactions.filter(t => t.type === 'Expense');

        // Define our fixed categories and their colors
        const categories = [
            { id: 'Food', color: '#00C49F' },
            { id: 'Transport', color: '#FFBB28' },
            { id: 'Entertainment', color: '#FF8042' },
            { id: 'Shopping', color: '#0088FE' },
            { id: 'Utilities', color: '#8884d8' },
            { id: 'Groceries', color: '#2e7d32' },
            { id: 'Sharing', color: '#ed6c02' },
            { id: 'Other', color: '#a4de6c' }
        ];

        return categories.map(cat => {
            const sum = expenses
                .filter(t => t.name === cat.id)
                .reduce((acc, t) => acc + (+t.amount), 0);

            return {
                name: cat.id,
                value: sum,
                color: cat.color
            };
        }).filter(cat => cat.value > 0); // Only show categories that have expenses
    }, [transactions]);

    const addTransaction = (tx: Omit<Transaction, 'id' | 'date'>) => {
        const newTx: Transaction = {
            ...tx,
            id: Math.random().toString(36).substring(7),
            date: new Date().toLocaleDateString('ru-RU'),
            color: tx.type === 'Income' ? 'success' : 'error'
        };
        setTransactions(prev => [newTx, ...prev]);
    };

    return (
        <FinanceContext.Provider value={{
            transactions,
            goals,
            contacts,
            addTransaction,
            totalBalance,
            totalIncome,
            totalExpenses,
            monthlyChartData,
            expenseCategoriesData
        }}>
            {children}
        </FinanceContext.Provider>
    );
};

export const useFinance = () => {
    const context = useContext(FinanceContext);
    if (!context) {
        throw new Error('useFinance must be used within a FinanceProvider');
    }
    return context;
};
