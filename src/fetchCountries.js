const searchParams = new URLSearchParams({
  fields: "name,capital,population,flags,languages"
});
const API_URL = "https://restcountries.com/v3.1/name"
console.log(searchParams)
export const fetchCountries = (name) => {
  return fetch(`${API_URL}/${name}?${searchParams}`
  )
    .then(response => {
      return response.json();
    })
    
}
