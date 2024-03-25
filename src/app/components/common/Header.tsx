import {useContext} from "react";
import {ColorModeContext} from "@/core/App.tsx";
import {Button} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";

export function Header() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return (
        <Box sx={{
            width: '100%',
            height: '60px',
            borderBottom: 1,
            borderBottomColor: 'divider'
        }}>
            current theme: {theme.palette.mode}
            <Button variant="outlined" onClick={colorMode.toggleColorMode}>change</Button>
        </Box>
    )
}