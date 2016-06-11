/**
 * ReviewsController
 *
 * @description :: Server-side logic for managing Reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 // On demand data load.
   loader : function(req, res) {
    var dl = DataLoader;
    return res.send(dl.load());
  },
  allStats: function(req, res) {
    ReviewsService.allStats(req.allParams(), function(err, response) {
      if (err) {
        console.log(err);
        res.negotiate(err);
      }
      return res.send(response);
   });
  },
  airportsats: function(req, res) {
    ReviewsService.allStatsByAirport(req.allParams(), function(err, response) {
      if (err) {
          console.log(err);
          res.negotiate(err);
      }

      return res.ok(response);
    })
  },
  airportreviews: function(req, res) {

    ReviewsService.allReviewsByAirport(req.allParams(), function(err, response) {
      if (err) {
          console.log(err);
          res.negotiate(err);
      }

      return res.ok(response);
    })
  }

};

