const header = document.createElement("h2")
header.innerHTML="Country List"
header.className="title"
document.body.append(header)

fetch('https://restcountries.eu/rest/v2/all')
.then(data=>data.json())
.then(countries => loadcountry(countries))  

function loadcountry(countries){
  const countryList = document.createElement("div");
  countryList.className="maincontainer";
  countries.forEach((country) => 
{
  const countryContainer = document.createElement("div");
  countryContainer.className="container"
  countryContainer.innerHTML = `
    <img class="flag" src="${country.flag}"></img>    
    <div class="text">
    <p class = "name"><b>Name:</b> ${country.name}</p>
    <p class = "city"><b>Capital:</b> ${country.capital}</p>
    <p class = "website"><b>Region Address:</b>${country.region}</p>
    </div>
        
`;
    
  countryList.append(countryContainer);
});


document.body.append(countryList);
};
