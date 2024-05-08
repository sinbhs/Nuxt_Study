// api/countries/find
// method post
// post { country: string }

import { countryList } from "@doubco/countries";
//console.log(countryList);

export default eventHandler(async (event) => {
    const body = await readBody(event); // body {}
    const { country } = body;
    return {
        countries: countryList.filter((obj) => obj.label.includes(country)),
    };
})