// @author: Thomas Thompson
// @github: tomtom28
// @comment: Homework 13 - Friend Finder Express Node app



console.log('API Route Connected Successfully');


// Link in Friends Data
var friendsData = require('../data/friends.js');


// Includes Two Routes
function apiRoutes(app) {

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });

  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function (req, res) {
    console.log(req)
  });

}


// Export for use in main server.js file
module.exports = apiRoutes;
