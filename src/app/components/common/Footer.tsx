import {AppBar, Container, Toolbar, Typography} from "@mui/material";
import Box from "@mui/material/Box";

export function Footer() {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        display="flex"
                        flexDirection={'column'}
                        paddingTop={2}
                        paddingBottom={2}
                    >
                        <Typography variant="subtitle1" display="block">
                            Copyrightⓒ{new Date().getFullYear()} All rights reserved
                        </Typography>
                        <Typography variant="subtitle1" display="block">
                            This site is not associated with NEXON Korea. Data sourced from NEXON OpenAPI.
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}