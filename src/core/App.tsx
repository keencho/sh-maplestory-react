import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {createContext, useEffect, useMemo, useState} from "react";
import {Router} from "./Router.tsx";
import {Header} from "@/app/components/common/Header.tsx";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function Core() {
    const [mode, setMode] = useState<'light' | 'dark'>(localStorage.getItem('mode') as never ?? 'dark');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    useEffect(() => {
        localStorage.setItem('mode', mode)
    }, [mode]);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                    }}
                >
                    <Header />
                    <Router />
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
