const countryContainer = document.querySelector('.countries-container')


fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(country)
            const countryCard = document.createElement('div')
            countryCard.classList.add('country-card')
            const cardHTML = `
             <img src="${country.flags.svg}" alt="flag">
                            <div class="card-text">
                                <h3>${country.name.common}</h3>
                                <p><b>Population: </b>${country.population}</p>
                                <p><b>Region: </b>${country.region}</p>
                                <p><b>Capital: </b>${country.capital}</p>
                               <p><b>Language: </b>${country.languages}</p>
                            </div>
            `
            countryCard.innerHTML = cardHTML
            countryContainer.appendChild(countryCard)
        })
    })


