let body = document.querySelector('body')

const countryName = (new URLSearchParams(location.search).get('name'))

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        let container = document.createElement('div')
        container.classList.add('container')
        let innerData = `
               <div class="box1">
            <div class="flag">
                <img src="${data[0].flags.png}"
                    alt="Flag Img">
            </div>
        </div>
        <div class="box2">
            <div class="singleCountry">

                <p class="mainName">${data[0].name.common}</p>
                <p class="Population"><h3>Population</h3> <span>${data[0].population}</span></p>
                <p class="Region"><h3>Region</h3> <span>${data[0].region}</span></p>
                <p class="language"><h3>Laguages</h3><span>${Object.values(data[0].languages)}</span></p>
                <p class="capital"><h3>Capital</h3> <span>${data[0].capital}</span></p>
                <p class="currency"><h3>Curencies</h3> <span>${Object.keys(data[0].currencies)}</span></p>
             

            </div>
        </div>
        `
        let borderData = document.createElement('div')
        borderData.classList.add('border')
        let borderInner = `
        <h2>Border: <span>${data[0].borders}</span ></h2 >
    `
        borderData.innerHTML = borderInner

        container.innerHTML = innerData
        body.appendChild(container)
        body.appendChild(borderData)
    })

