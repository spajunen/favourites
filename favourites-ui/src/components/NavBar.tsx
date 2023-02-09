import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

function NavBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky" sx={{backgroundColor: "peru"}}>
                <Toolbar>
                    <Box sx={{display: "flex", gap: "20px"}}>
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