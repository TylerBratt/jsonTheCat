const { fetchBreedDescription } = require('./breedFetcher');
const searchCats = 'https://api.thecatapi.com/v1/breeds/search?q=';
const argv = process.argv.slice(2);
const userCat = searchCats + argv;

fetchBreedDescription(userCat, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
