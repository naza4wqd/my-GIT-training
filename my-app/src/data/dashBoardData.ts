export const dashBoardData = {
    stats: {
        totalBalance: 12450.00,
        income: 4500.00,
        expenses: 1200.00
    },
    chartData: [
        { month: 'Jan', income: 500, expenses: 200 },
        { month: 'Feb', income: 300, expenses: 500 },
        { month: 'March', income: 800, expenses: 400 },
        { month: 'April', income: 400, expenses: 1000 },
        { month: 'May', income: 900, expenses: 800 },
        { month: 'June', income: 700, expenses: 1200 }
    ],
    quickTransfer: {
        contacts: ['Alice Johnson', 'Bob Smith', 'Charlie Brown']
    },
    goals: {
        name: 'New Laptop',
        targetAmount: 2000.00,
        currentAmount: 1200.00
    },
    transactions: [
        { id: '1', name: 'Groceries', date: 'from image_5', amount: -10.00, color: 'warning' },
        { id: '2', name: 'Salary', date: 'from image_5', amount: 4500.00, color: 'success' },
        { id: '3', name: 'Groceries', date: 'from image_5', amount: -20.00, color: 'success' },
        { id: '4', name: 'Groceries', date: 'from image_5', amount: -100.00, color: 'error' },
        { id: '5', name: 'Salary', date: 'from image_5', amount: -20.00, color: 'success' }
    ]
};
