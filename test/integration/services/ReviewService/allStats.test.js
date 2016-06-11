var sinon = require('sinon'),
    assert = require('assert');

describe('ReviewsService', function() {
  describe('#allStats()', function() {
    it('should check allStats function', function (done) {
      var params = {
        limit : 10
      };
      ReviewsService
      .allStats(params, function(err, results){
          // check the retured length
          assert.equal(results.length, params.limit);
          // Validate the count against the DB
          Reviews.count({where: { airport_name: results[0]._id }}, function(err, count) {
            assert.equal(results[0].count, count);
            done();
          });  

      });
    });
  });
});