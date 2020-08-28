# What is a REST API?

## API
* Application Programming Interface

## REST
* REpresentational State Transfer
* Architectual style of the web
* A standard/set of guidelines by which we can structure & create API's
* REST API's have identifiable properties...

### REST Properties
1. They make use of Resource-based URL's
   * Webpage - http://www.football.com/scores
   * Webpage - http://www.football.com/teams/arsenal
   * These webapage requests are requests for a resource where the resource is a webpage which is composed of HTML, CSS, & JavaScript
   * These webpage requests are just GET requests
   * We just request the webpage and it's being processed in a browser
   * JSON - http://www.football.com/api/scores
   * JSON - http://www.football/api/teams/arsenal
   *  These JSON requests are requests for a resource where the resource is some data from an API
   * To make the requests we're using an endpoint provided by football.com
  
2. They make use of HTTP Methods
   * GET - Used to retrieve data from the server
   * POST - Used to send data to the server
   * PUT - Used to update data
   * DELETE - Used to delete data

3. They make use of HTTP Status Codes
   * 200 means OK
   * 404 means not found
   * 500 means server error

## In This Playlist...
* Learn about HTTP methods and what they're for
* Create an API using Node.js, Express, & MongoDB
* Test our API using Postman
* Create a simple front-end to interact with our API