import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import './index.css'


function NavbarComponent({ view, changeView }) {
    let navigate = useNavigate()
    let home = window.location.pathname === '/'
    return (
        <AppBar position="sticky" className='appBar' style={{
            backgroundColor: '#FF5C5C', margin: 0
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>NEWS APP</div>
                    </Typography>

                    {home && <Box sx={{ flexGrow: 0, display: 'flex' }}>
                        <Typography paddingTop={1}>List</Typography>
                        <Switch color="primary" onChange={changeView} checked={view} />
                        <Typography paddingTop={1}>Grid</Typography>
                    </Box>}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default NavbarComponent