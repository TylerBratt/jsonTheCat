const request = require('request');
const fetchBreedDescription = function(userCat, callback) {
  
  request(userCat,(error, response, body)=>{
    const data = JSON.parse(body);
    
    if (error) {
      // if error is true callback error
      callback(new Error('wrong URL'));
      return;
    }
    if (data.length === 0) {
      //if requested breen cannot be found in API returns error
      callback(new Error("error: can't find the cat 😿"));
      return;
    }
    callback(null, data[0].description);
  });
};


module.exports = { fetchBreedDescription };
