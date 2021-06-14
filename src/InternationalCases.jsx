import React from 'react';
import { Container, Typography, Card, CardContent} from '@material-ui/core';

function InternationalCases (props) {
    return (
        <>
            <Container>

                <Typography variant="h5" color="textSecondary">International Cases</Typography>

                <br />

                <Card>
                    <CardContent>
                        <Typography >Total Cases: {props.internationalData.cases}</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography >Total Recovered: {props.internationalData.recovered}</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <Typography >Total Deaths: {props.internationalData.deaths}</Typography>
                        <Typography></Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}

export default InternationalCases;