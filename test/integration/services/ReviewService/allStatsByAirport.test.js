var sinon = require('sinon'),
  assert = require('assert');
describe('#allStatsByAirport()', function() {
  it('should check allStatsByAirport function', function (done) {
    var params = {
      airport: 'zurich-airport'
    };
    ReviewsService
    .allStatsByAirport(params, function(err, results){
        // asse
        assert.equal(results.length, 1);
        // Check if the count matches
        Reviews.count({where: { airport_name: params.airport }}, function(err, count) {
          assert.equal(results.count, count);
          done();
        });  

    });
  });
});