import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader';
import UsCases from './UsCases';
import InternationalCases from './InternationalCases';

const axios = require('axios');

const App = () => {
    const [page, setPage] = useState('United States');
    const [usData, setUsData] = useState({});
    const [internationalData, setInternationalData] = useState({});

    // get request using axios
    const getUsData = () => {
        axios.get('https://disease.sh/v3/covid-19/countries/usa')
            .then(response => {
                setUsData({
                cases: numberFormatted(response.cases),
                recovered: numberFormatted(response.recovered),
                deaths: numberFormatted(response.deaths)
                })
            })
    }

    const getInternationalData = () => {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(response => {
                setInternationalData({
                    cases: numberFormatted(response.cases),
                    recovered: numberFormatted(response.recovered),
                    deaths: numberFormatted(response.deaths) 
                })
            })
    }

    // use regex to format numbers
    // straight from stackoverflow
    const numberFormatted = (x) => {
        /* x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2"); */
        return x;
    }

    // run effects once at beginning of program
    useEffect(() => {
        getUsData();
        getInternationalData();
    })


    // event handler functions that are 
    // passed down as props
    const setVaccine = () => {
        setPage('International')
    }

    const setCases = () => {
        setPage('United States')
    }

    return (
        <>
            <AppHeader page={page} setVaccine={setVaccine} setCases={setCases}/>

            <br />

            <main>
                
                {page === 'United States' ? <UsCases usData={usData}/> : <InternationalCases internationalData={internationalData}/>}
            </main>
        </>
    )
}

export default App;

