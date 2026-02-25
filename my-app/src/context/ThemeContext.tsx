import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material';

type ThemeContextType = {
    mode: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            background: {
                                default: '#f5f6f8',
                                paper: '#ffffff',
                            },
                        }
                        : {
                            background: {
                                default: '#0a1929',
                                paper: '#132f4c',
                            },
                            text: {
                                primary: '#ffffff',
                                secondary: '#b2bac2',
                            },
                            primary: {
                                main: '#3399ff',
                            }
                        }),
                },
                components: {
                    MuiCard: {
                        styleOverrides: {
                            root: {
                                backgroundImage: 'none',
                                borderColor: mode === 'light' ? '#e0e0e0' : 'rgba(194, 224, 255, 0.08)',
                            },
                        },
                    },
                    MuiDrawer: {
                        styleOverrides: {
                            paper: {
                                backgroundColor: mode === 'light' ? '#1c2536' : '#0a1929',
                                borderRight: mode === 'light' ? 'none' : '1px solid rgba(194, 224, 255, 0.08)',
                            }
                        }
                    },
                    MuiAppBar: {
                        styleOverrides: {
                            root: {
                                backgroundColor: mode === 'light' ? '#ffffff' : '#0a1929',
                                color: mode === 'light' ? '#1a1a1a' : '#ffffff',
                                borderBottom: mode === 'light' ? '1px solid #e0e0e0' : '1px solid rgba(194, 224, 255, 0.08)',
                                boxShadow: 'none'
                            }
                        }
                    }
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeContext must be used within AppThemeProvider');
    return context;
};
