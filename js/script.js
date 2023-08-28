fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => displayGlobalData(data.Global))

const displayGlobalData = global => {
    console.log(global);
    const globalContainer = document.getElementById('global-statistics')
    globalContainer.innerHTML = `
    <h3>Global Statistics</h3>
    <br>
    <p>NewConfirmed: ${global.NewConfirmed}
        <br>
        NewDeaths: ${global.NewDeaths}
        <br>
        NewRecovered: ${global.NewRecovered}
        <br>
        TotalConfirmed: ${global.TotalConfirmed}
        <br>
        TotalDeaths: ${global.TotalDeaths}
        <br>TotalRecovered: ${global.TotalRecovered}
    </p>
    `
    document.getElementById('date').innerHTML = `
    <h2>Last Updated on: ${global.Date.slice(0, 10)}</h2>
    `
}

const searchCountry = () => {
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => displayCountryData(data.Countries))
}

const displayCountryData = countries => {
    console.log(countries)
    for (let i = 0; i < countries.length; i++) {
        const countryName = countries[i].Country;
        const countryName2 = countries[i].Slug;

        const inputText = document.getElementById('search-field').value;

        if (countryName === inputText || countryName2 === inputText) {
            const countryContainer = document.getElementById('country-statistics');
            countryContainer.innerHTML = `
            <h3>${countries[i].Country}'s Statistics</h3>
            <br>
            <p>NewConfirmed: ${countries[i].NewConfirmed}
        <br>
        NewDeaths: ${countries[i].NewDeaths}
        <br>
        NewRecovered: ${countries[i].NewRecovered}
        <br>
        TotalConfirmed: ${countries[i].TotalConfirmed}
        <br>
        TotalDeaths: ${countries[i].TotalDeaths}
        <br>TotalRecovered: ${countries[i].TotalRecovered}
    </p>
            `
            document.getElementById('country-statistics').style.display = 'block';
            document.getElementById('search-field').value = "";
        }
    }
}

document.getElementById('search-field').addEventListener('keypress', function (event) {
    if (event.key = 'Enter') {
        document.getElementById('search-button').click();
    }
})