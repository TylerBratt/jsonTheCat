const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');
const baseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription(baseUrl + 'Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
      console.log('abc');
      done();

      it('should return an error for an unknown breed', (done) => {
        fetchBreedDescription('Garfield', (err, desc) => {
          // we expect an error for this scenario
          assert.equal(err, "error: can't find the cat 😿");
    
          const expectedDesc = null;
    
          // compare returned description
          assert.equal(expectedDesc, desc);
    
          done();
        });
      });
    });
  });
});

