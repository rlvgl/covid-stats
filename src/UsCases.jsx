import React from 'react';
import { Container, Typography, Card, CardContent} from '@material-ui/core';

function UsCases (props) {
    return (
        <>
            <Container>

            <Typography variant="h5" color="textSecondary">US Cases</Typography>

            <br />

            <Card>
                <CardContent>
                    <Typography>Total Cases: {props.usData.cases}</Typography>
                    <Typography></Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Total Recovered: {props.usData.recovered}</Typography>
                    <Typography></Typography>
                </CardContent>
            </Card>


            <Card>
                <CardContent>
                    <Typography>Total Deaths: {props.usData.deaths}</Typography>
                    <Typography></Typography>
                </CardContent>
            </Card>
            </Container>

            
        </>
    )
}

export default UsCases;