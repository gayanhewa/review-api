/**
 * ReviewsController
 *
 * @description :: Server-side logic for managing Reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {   
   loader : function(req, res) {
    // The env pass is to stop the data loader from running by mistake. This end point is for convinence purpose. 
    // Ideally the cronjob will execute this process once every month. 
    // REF : config/crontab.js
    if (req.allParams().passcode == process.env.DATALOAD_PASS) {
      var dl = DataLoader;
      dl.load()
      return res.send("DataLoad Successful.");
    }else{
      return res.send("You are not authorized to call this process.");
    }
  },
  allStats: function(req, res) {
    ReviewsService.allStats(req.allParams(), function(err, response) {
      if (err) {
        console.log(err);
        res.negotiate(err);
      }
      return res.ok(response);
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

