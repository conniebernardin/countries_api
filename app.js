let countries = [];

const loadData = () =>{
    console.log("loading data...");
fetch("https://restcountries.com/v3.1/all")
    .then(result => result.json())
    .then(data => countries = data)
    .then(() => {

    const list = document.querySelector("#country-list");

    const countryNames = countries.map(country => country.name.common);
    
        countryNames.forEach((name) => {
         const listItem = document.createElement("li")
            listItem.innerText = name;
            list.appendChild(listItem);
        })

    });
}
loadData();