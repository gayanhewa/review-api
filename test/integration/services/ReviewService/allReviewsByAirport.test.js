var sinon = require('sinon'),
  assert = require('assert');

describe('#allReviewsByAirport()', function() {
  it('should check allReviewsByAirport function', function (done) {
    var params = {
      airport: 'aalborg-airport'
    };
    ReviewsService
    .allReviewsByAirport(params, function(err, results) {
        Reviews.find({ where: { "airport_name": params.airport }}, function(err, reviews) {
          assert.equal(results.length, reviews.length);
          done();
        }); 
      
    });
  });
});