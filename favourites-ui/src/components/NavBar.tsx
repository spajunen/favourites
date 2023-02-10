import React from "react"
import {AppBar, Typography, Box, Toolbar} from "@mui/material"
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

function NavBar() {
    return (
        <Box className="nav-bar">
            <AppBar position="sticky" sx={{backgroundColor: "peru"}}>
                <Toolbar>
                    <Box className="nav-links">
                        <FreeBreakfastIcon fontSize="large"/>
                        <Typography variant="h6" component="a" href="/" className="header-link">LISÄÄ UUSI</Typography>
                        <Typography variant="h6" component="a" href="/coffees" className="header-link">KAHVIT</Typography>
                        <Typography variant="h6" component="a" href="/teas" className="header-link">TEET</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
