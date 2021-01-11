import { initMapbox } from '../src/plugins/init_mapbox'
import Papa from 'papaparse';
import moment from 'moment';
import { findFlagUrlByNationality, findFlagUrlByCountryName  } from "country-flags-svg";
import groupBy from 'lodash/groupBy';


const url = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.csv';
const today = moment(new Date("2021-01-08")).format("YYYY-MM-DD")


const obJDataParser = (obj) => {
  let arrayObj = []
  const flagCards = document.querySelector("#cards");
  // console.log(obj.data)
  Object.keys(obj).forEach(key => {
    if (key === "data") {
      obj[key].forEach(element => {
        const newObj = Object.assign({}, element);
        arrayObj.push(newObj);
        // console.log(element);
        // let vaxDay = moment(element[2]).format('YYYY-MM-DD');
        // console.log(vaxDay);
        // console.log(today)
        // if (vaxDay === today) {
        //   // ["location", "iso_code", "date", "total_vaccinations", "daily_vaccinations", "total_vaccinations_per_hundred", "daily_vaccinations_per_million"]
        //   console.log(element[0]);
        //   const flagUrl = findFlagUrlByCountryName(element[0]);
        //   console.log(flagUrl)
        //   flagCards.insertAdjacentHTML('beforeend', `<img class="flag" src="${flagUrl}" alt=""></img>`)
        //   console.log("Total vaccinations")
        //   console.log(element[3]);
        //   console.log("Daily vaccinations")
        //   console.log(element[4]);
        //   console.log("Percentage vaccinations")
        //   console.log(`${element[5]}%`);
        //   console.log("Daily vaccinations x milion")
        //   console.log(`${element[6]}`);
        // }
      })
    }
  });
  // console.log(arrayObj)
  const a = groupBy(arrayObj, function(n) {
    return n[0];
  });
  
  Object.keys(a).forEach(key => {
    let countries = a[key].slice(-1)[0];
    console.log(countries[0])
  //   Object.keys(countries).forEach(key => {
  //     console.log(countries[key]);
          let flagUrl = findFlagUrlByCountryName(countries[0]);
          flagCards.insertAdjacentHTML('beforeend', `<span> ${countries[0]}</span>`)
          flagCards.insertAdjacentHTML('beforeend', `<img class="flag" src="${flagUrl}" alt=""></img>`)
  //   })
  });
}



document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM completamente caricato e analizzato');
  
  const response = fetch(url)
  .then(response => response.text())
  .then(v => Papa.parse(v))
  .catch(err => console.log(err))
  response.then(objData => obJDataParser(objData))
});


initMapbox();



