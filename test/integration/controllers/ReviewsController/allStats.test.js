var request = require('supertest'), 
assert = require('assert');
describe('ReviewsController', function() {

  describe('#allStats()', function() {
    it('should return to json', function (done) {
      request(sails.hooks.http.app)
        .get('/api/all/stats?limit=10')
        .send()
        .expect(200)
        .end(function(err, result){          
          if (err) return done(err);
          assert.equal(('count' in result.body.data[0]), true);
          assert.equal(result.body.data.length, 10);
          done();
        });
    });
  });

});