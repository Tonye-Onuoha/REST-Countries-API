const saveCountries = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getCountries = (key) => JSON.parse(localStorage.getItem(key));

export { saveCountries, getCountries };
