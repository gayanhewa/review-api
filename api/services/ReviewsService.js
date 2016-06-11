
var self = module.exports = {
  allStats: function(params, cb) {
    Reviews.native(function(err, collection) {
      var conditions = [
          { $group: {
              _id: "$airport_name",
              count: { $sum: 1 }
          }
        },
        { $sort: { count: -1 } }
      ];
      
      if (parseInt(params.offset) > 0) {
        conditions.push({ $skip: parseInt(params.offset) });
      }

      if ( parseInt(params.limit) > 0 ) {
        conditions.push({ $limit: parseInt(params.limit) });
      }

      if (err) return res.serverError(err);
       collection.aggregate(
       conditions,
        function(err,result) {
          if (err) cb(err);
          cb(null, result);
        });
    });
  },
  allStatsByAirport: function(params, cb) {

    Reviews.native(function(err, collection) {

      // If min rating is not specified defaults to zero
      if (undefined === params.min_overall_rating) {
        params['min_overall_rating'] = 0;
      }  

      var conditions = [
        {
          $match: { airport_name: params.airport, overall_rating: { $gt: parseInt(params.min_overall_rating) }}
        },
        { $group: {
            _id: "$airport_name",
            count: { $sum: 1 },
            overall_rating: { $avg: '$overall_rating'},
            recommended: { $sum: '$recommended'}
          }
        },
        { $sort: { count: -1 } }
      ];

      if (err) return res.serverError(err);
       collection.aggregate(
        conditions,
        function(err,result) {
          if (err) cb(err);
          cb(null, result);
        });
    });
  },
  allReviewsByAirport: function(params, cb) {
    // If min rating is not specified defaults to zero
    if (undefined === params.min_overall_rating) {
      params['min_overall_rating'] = 0;
    }  
    var conditions = { 
        select: ['airport_name', 'overall_rating', 'recommended', 'author_country', 'content', 'date'], 
        where: {
          airport_name: params.airport,
          overall_rating: { $gte: parseInt(params.min_overall_rating) }  
        }, sort: 'date desc',
        limit: params.limit, 
        skip: params.offset
      };

    Reviews
      .find(conditions)
      .exec(function(err, result) {
         if (err) {
            console.log(err);
            cb(err);
         } 

         cb(null, result);
      });  
  }        

};