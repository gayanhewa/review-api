/**
 * Reviews.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {


  attributes: {
    airport_name: {
      type: 'string',
      required: true
    },
    link: {
      type: 'string',
      defaultsTo: '',
      required: false
    },
    title: {
      type: 'string',
      required: true
    },
    author: {
      type: 'string',
      required: true
    },
    author_country: {
      type: 'string',
      defaultsTo: '',
      required: false
    },
    date: {
      type: 'date',
      required: false
    },  
    content: {
      type: 'text',
      required: false
    },
    experience_ariport: {
      type: 'string',
      defaultsTo: ''
    },
    date_vist: {
      type: 'date',
      defaultsTo: null
    },
    type_traveller: {
      type: 'string',
      defaultsTo: ''
    },
    overall_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    queuing_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    terminal_cleanliness_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    terminal_seating_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    terminal_signs_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    food_beverages_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    airport_shopping_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    wifi_connectivity_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    airport_staff_rating: {
      type: 'float',
      defaultsTo: 0.0
    },
    recommended: {
      type: 'float',
      defaultsTo: 0.0
    }
  },
  beforeValidate: function(values, cb) {    
    for (item in values) {
      switch (item) {
        case 'terminal_seating_rating' : 
          if (values.terminal_seating_rating === undefined || isNaN(values.terminal_seating_rating)) { 
            values.terminal_seating_rating = 0.0;
          }
          break;
        case 'terminal_signs_rating' :
          if (values.terminal_signs_rating === undefined || isNaN(values.terminal_signs_rating)) { 
            values.terminal_signs_rating = 0.0;
          }
          break;  
        case 'food_beverages_rating' :
          if (values.food_beverages_rating === undefined || isNaN(values.food_beverages_rating)) { 
            values.food_beverages_rating = 0.0;
          }
          break;  
        case 'wifi_connectivity_rating' :
          if (values.wifi_connectivity_rating === undefined || isNaN(values.wifi_connectivity_rating)) { 
            values.wifi_connectivity_rating = 0.0;
          }
          break; 
        case 'airport_staff_rating' :
          if (values.airport_staff_rating === undefined || isNaN(values.airport_staff_rating)) { 
            values.airport_staff_rating = 0.0;
          }
          break;   
        case 'queuing_rating' :
          if (values.queuing_rating === undefined || isNaN(values.queuing_rating)) { 
            values.queuing_rating = 0;
          }
          break;   
        case 'terminal_cleanliness_rating' :
          if (values.terminal_cleanliness_rating === undefined || isNaN(values.terminal_cleanliness_rating)) { 
            values.terminal_cleanliness_rating = 0;
          }
          break;   
        case 'airport_shopping_rating' :
          if (values.airport_shopping_rating === undefined || isNaN(values.airport_shopping_rating)) { 
            values.airport_shopping_rating = 0;
          }
          break; 
        case 'overall_rating' :
          if (values.overall_rating === undefined || isNaN(values.overall_rating)) { 
            values.overall_rating = 0;
          }
          break;                                           
      }
    }
    cb();
  }
};

