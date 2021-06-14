import React, { useState, useEffect } from 'react';
import AppHeader from './AppHeader';
import UsCases from './UsCases';
import InternationalCases from './InternationalCases';

const App = () => {
    const [page, setPage] = useState('United States');
    const [usData, setUsData] = useState({});
    const [internationalData, setInternationalData] = useState({});


    // these both are setting data functions
    const getUsData = async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/countries/usa');
        const jsonResponse = await response.json();
        setUsData({
            cases: numberFormatted(jsonResponse.cases),
            recovered: numberFormatted(jsonResponse.recovered),
            deaths: numberFormatted(jsonResponse.deaths)
        })
    }
    
    const getInternationalData = async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/all');
        const jsonResponse = await response.json();
        setInternationalData({
            cases: numberFormatted(jsonResponse.cases),
            recovered: numberFormatted(jsonResponse.recovered),
            deaths: numberFormatted(jsonResponse.deaths)
        })
    }

    // use regex to format numbers
    // straight from stackoverflow
    const numberFormatted = (x) => {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
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

