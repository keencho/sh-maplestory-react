import {createTheme, ThemeProvider} from '@mui/material/styles';
import {createContext, useEffect, useMemo, useState} from "react";
import {Router} from "./Router.tsx";
import {Header} from "@/app/components/common/Header.tsx";
import {BrowserRouter} from "react-router-dom";
import {Container} from "@mui/material";
import {Footer} from "@/app/components/common/Footer.tsx";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const lightPrimary = {
    50: '#fff4e1',
    100: '#ffe2b3',
    200: '#ffd082',
    300: '#ffbc50',
    400: '#ffad29',
    500: '#ff9f05',
    600: '#fc9302',
    700: '#f68300',
    800: '#f07300',
    900: '#e75900',
    A100: '#ffe2b3',
    A200: '#ffd082',
    A400: '#ffad29',
    A700: '#f68300'
};

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
                    primary: {
                        ...lightPrimary,
                    },
                },
                typography: {
                    fontFamily: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
                }
            }),
        [mode],
    );

    return (
        <BrowserRouter>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <Container
                        maxWidth={false}
                        disableGutters
                        sx={{
                            width: '100%',
                            height: '100%',
                            bgcolor: 'background.default',
                            color: 'text.primary',
                            padding: 0,
                            overflow: 'hidden',
                            transition: '0.3 ease in',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <Header/>
                        <Container
                            disableGutters
                            maxWidth={false}
                            sx={{
                                overflow: 'auto',
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <Container
                                maxWidth={'xl'}
                                sx={{
                                    flex: 1,
                                    paddingTop: 2,
                                    paddingBottom: 2
                                }}
                            >
                                <Router/>
                            </Container>
                            <Footer />
                        </Container>
                    </Container>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>
    );
}
