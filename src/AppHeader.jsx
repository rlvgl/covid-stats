import { CssBaseline } from '@material-ui/core';
import { AppBar, Container, Typography, Toolbar } from '@material-ui/core';
import React from 'react';

export function AppHeader (props) {
    return (
        <>
            <NavBar setVaccine={props.setVaccine} setCases={props.setCases}/>
            <br />
            <br />
            <AppTitle page={props.page}/>
        </>

    )
}

function NavBar (props) {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative" gutterBottom color="transparent">
                <Toolbar>
                    <Typography variant="h6">COVID-19 Tracker</Typography>

                    <Typography onClick={props.setCases} color="textPrimary" style={{margin: '0em 1em'}}>
                        USA
                    </Typography>

                    <Typography onClick={props.setVaccine} color="textPrimary" >
                        International
                    </Typography>
                </Toolbar>
                
            </AppBar>
        </>
    )
}

function AppTitle (props) {
    return (
        <>
        <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>{props.page == 'United States' ? 'America' : 'International'} COVID-19 Tracker</Typography>
            <Typography align="center" color="textSecondary" paragraph>
                This is a COVID-19 tracker and this shows the international and national data for the most recent and updated COVID data in lives lost.
            </Typography>
            <Typography align="center" paragraph color="textSecondary">
                You are currently on the {props.page} page.
            </Typography>
        </Container>    
        </>
    )
}

export default AppHeader;