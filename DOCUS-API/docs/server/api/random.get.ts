import { coubtries, countryList } from "@doubco/countries";

/*console.log(countryList);*/

export default() => {
    return {
        random_country: countryList[Math.floor(Math.random() * countryList.length)],
    };
}