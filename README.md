# Reviews API

This application resutls in a set of public API's that any system can consume. The application consists of a few key parts. 

The application is build with SailsJS and MongoDB backend. 
 
 ## DB configuration
  In order to run the app successfully , ensure that the database connection seeting sare set properly. All values are set via ENV variables.

       
          localMongodbServer: {
          adapter: 'sails-mongo',
          host: process.env.MONGO_HOST,
          port: process.env.MONGO_PORT,
          user: process.env.MONGO_UN,
          password: process.env.MONGO_PW,
          database: process.env.MONGO_DB 
        }
    
 ## DataLoader 

  The data loader will load the data from the csv provided once a month. This application is built under the assumption made from the spec , that the csv provided monthly is a complete dump of the review data. 

  The application can trigger the data load in two ways :

  - Cronjob 
  
    This is executed one every month. You can find the schedule at config/cronjob.js

  - On deman 
  
    I have also hooked up a open route that will trigger the dataload asyncrhonously. 

        
          GET /load?passcode=DATALOAD_PASS
        

 For the data loader to work properly we need to have the following env variables set 
 
  - AIRPORT_DATALOAD 
  
    Path to the data load file , must be a remote file path. 

  - DATALOAD_PASS 
    
    Passcode to be used to trigger the data load in an ad-hoc manner , this is passed as query string passcode GET /load

### API ENDPOINTS 
  Summary of available endpoints.

#### GET /load 
  Trigger the data load.

#### GET /api/all/stats  
  A collection of all airports stats, the collection should be ordered by the count of reviews each item in the collection should have the following information:
  
  - Name of the airport
  - Count of reviews

Parameters :
  
  - limit : Number of items to return
  - offset : Number of items to offset    
    
#### GET /api/:airport/stats
   Return stats for a selected Airport. 
   
Parameters : 
   
  - airport 

  name/key of the Airport

  - min_overall_rating 

  Filter stats by minimum overall rating passed. Defaults to 0

#### GET /api/:airport/reviews
  A collection of reviews for the given airport the collection should be ordered by “date”, so the latest review is returned as first element each review in the collection should have the following information:
  
  - overall_rating
  - recommendation
  - date
  - author_country
  - content

Parameters :
  
  - airport : name/key of the airport  
  - min_overall_rating
  - limit
  - offset

