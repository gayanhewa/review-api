var request = require('request');
var self = module.exports = {
   run: function() {
      console.log('DataLoadService');
   },
   load: function() {
    
    // Restore collection
    // Since each month the airport will set a full data dump we would just restore all than match the delta. 
    // For simplicity sake 
    Reviews.drop(function(err, cb){});

    //Converter Class 
    var Converter = require("csvtojson").Converter;
    var converter = new Converter({constructResult:false}); //for big csv data 
     
    //record_parsed will be emitted each csv row being processed 
    converter.on("record_parsed", function (jsonObj) {
      console.log(jsonObj);
        Reviews.create(jsonObj, function(err, item) {
           if (err) { console.log(err);return; }
           //console.log(item.author);
        }); 
    });

    request(process.env.AIRPORT_DATALOAD).pipe(converter);
   }
};