import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;

const countrySearch = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function renderCountryList(countries) {
  const markup = countries
    .map(country => {
      return `
            <li>
              ${country.name.common}</p>
            </li>
        `;
    })
    .join('');
  countryList.innerHTML = markup;
  countryList.querySelectorAll('li').forEach(li => {
    li.classList.add("country-detail");
  });
}

countrySearch.addEventListener(
  'input',
  debounce(async ev => {
    if (!ev.target.value) {
      countryList.querySelectorAll('li').forEach(li => {
        li.remove();
      });
      return;
    }
    const countries = await fetchCountries(ev.target.value)
      .then(countries => renderCountryList(countries))
      .catch(error => console.log(error));

    // console.log(countries);
  }, DEBOUNCE_DELAY)
);
