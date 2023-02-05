function showCountries(){
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://restcountries.com/v3.1/all", true)

    xhr.onload = function(){
        if (xhr.status == 200){
            console.log(200)
            let countries = JSON.parse(this.response)
            console.log(countries);
            countries.forEach(country => {
                const countryCard = document.createElement('div')
                const countryImg = document.createElement('img')
                countryCard.innerHTML = country.name.common
                countryImg.src = country.flags.png
                countryCard.appendChild(countryImg)

                document.getElementById('feed').appendChild(countryCard)
            })
        }
    }

    xhr.send()
}

