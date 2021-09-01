let countries = [
    {id: 1, name: 'United States', goldMedalCount: 2, silverMedalCount: 2, bronzeMedalCount: 3},
    {id: 2, name: 'China', goldMedalCount: 3, silverMedalCount: 1, bronzeMedalCount: 0},
    {id: 3, name: 'Germany', goldMedalCount: 0, silverMedalCount: 2, bronzeMedalCount: 2},
]

export function getCountries() {
    return countries;
}

export function incrementMedal(countryId, medalType) {
    const index = countries.findIndex((c) => c.id === countryId);

    if (medalType === 'gold') {
        countries[index].goldMedalCount++;
    }
    else if (medalType === 'silver') {
        countries[index].silverMedalCount++;
    }
    else {
        countries[index].bronzeMedalCount++;
    }
}

export function decrementMedal(countryId, medalType) {
    const index = countries.findIndex((c => c.id === countryId));

      if (medalType === 'gold') {
        if (countries[index].goldMedalCount !== 0) {
            countries[index].goldMedalCount -= 1;
          }
    }
    else if (medalType === 'silver') {
        if (countries[index].silverMedalCount !== 0) {
            countries[index].silverMedalCount -= 1;
          }
    }
    else {
        if (countries[index].bronzeMedalCount !== 0) {
            countries[index].bronzeMedalCount -= 1;
          }
    }
}

export function getCountryTotal(countryId) {
    const index = countries.findIndex((c => c.id === countryId));

    return countries[index].goldMedalCount + countries[index].silverMedalCount + countries[index].bronzeMedalCount;
}

export function getTotalMedalCount(medal) {
    return countries.reduce((a,b) => a + b[medal + 'MedalCount'], 0);
}