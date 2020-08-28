# HTTP Methods

- A way of telling the server waht type of request we are making...
- GET
- POST
- PUT
- DELETE

## Our Data (ninjas)

- Database/mongoDB

  - Ninjas Collection
    - ninja-1
    - ninja-2
    - ninja-3
      - name: Ryu
      - rank: Black Belt
      - available: true
    - ninja-4

- Server/API is Express/Node.js

  - We make a request from the front-end/3rd party app, our API then handles the request, gets what it needs from the database, then sends the data back to the front-end/3rd party app

- Front-end/3rd-party app
  - Create a new ninja and store it - POST request
  - Reading/retrieving a list of ninjas - GET request
  - Update/edit an existing ninja - PUT request
  - Delete a ninja from the db - DELETE request

* CRUD - Create Read Update Delete
  - 4 basic operations we perform on data

## Our API Routes

- Read/retrieve a list of ninjas
  - GET request to http://www.ninjago.com/api/ninjas
- Create a new ninja
  - POST request to http://www.ninjago.com/api/ninjas
- Update an existing ninja
  - PUT request to http://www.ninjago.com/api/ninjas/id
- Delete a ninja

  - DELETE request to http://www.ninjago.com/api/ninjas/id

- When making these requests how do we know what type of request we're performing?

## Example Using jQuery

- \$.ajax({ method: "POST", url: "http://www.ninjago.com/api/ninjas", data: { name: "Ganash", rank: "Red Belt" } })
- \$.ajax({ method: "GET", url: "http://www.ninjago.com/api/ninjas" })
