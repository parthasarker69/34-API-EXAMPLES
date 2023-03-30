const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountries(data))
}

loadCountries()
const showCountries = (countries) => {
    // console.log(countries)
    const countryContainer = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country.name.common)
        // console.log(country)
        const div = document.createElement('div')
        div.classList.add('country-style')
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>Capital : ${country.capital}</p>
        <button onclick="showDetails('${country.name.common}')">Details</button>
        `
        countryContainer.appendChild(div)
    });
}
const showDetails = name => {

    const url = `https://restcountries.com/v3.1/name/${name}`

    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data[0].name.common))
}
