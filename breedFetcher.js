const request = require('request');
const searchCats = 'https://api.thecatapi.com/v1/breeds/search?q=';
const argv = process.argv.slice(2);
const userCat = searchCats + argv;


request(userCat,(error, response, body)=>{
  const data = JSON.parse(body);
  console.log(data);
  if (error) {
    console.log('wrong url');
    return;
  }
  if (data.length === 0) {
    throw new Error("error: can't find the cat 😿");
  }

});
// console.log('hey');