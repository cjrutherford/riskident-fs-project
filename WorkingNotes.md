# Initial Thoughts

* A Basic query will need to have a transaction ID that is manditory and a confidence Level optionally that defaults to 1.
* GraphQL will serve this purpose nicely, and only really require one query, and the entire dataset can/should be represented with a single schema.
* There will need to be two icons selected to represent the same email, or the same Geolocation information. Potential Options:
    * <img src='globe.png' width='100px'>
    * <img src='mail.png' width='100px'>
    * <img src='device.png' width='100px'>
    * <img src='cursiveS.jpg' width='100px'>
    * <img src='phone.png' width='100px'>
    * <img src='token.png' width='100px'>

* The initial form should have validation to ensure the back end does not waste resources with faulty requests. The best efficiency is to have nothing to do on the most expensive resource, however, for performance on the end user side, we will want to only do small quick tasks. The final purpose of validating requests prior to delivering them to the server, is to ensure that it does not process requests that are going to return an error. Most efficiently, we want to server only to hand out data, not errors.
* for the purpose of code clarity, readability, and consistency. Prettier/ESLint will be used in the code editor to automate the process of formatting code to follow best practices and standards.
* Logging is handled on the back end by a simple logging library called `Bunyan` this is set to a rotating log file with three periods each lasting one week. This is just a standard that I have been building into my apps, and can be modified to be included in the front end, and can be stored for shorter time periods on the front end using local storage as the media. In my opinion we would probably want to store the most recent 1000(?) log entries for debugging only if neccesary.


# Back-end Development

The development of the backend consisted of learning GraphQL basics and getting used to typescript inside the already familiar express boilerplate. I started with defining GraphQL schema to be used in the application, and then setup the route for the GraphiQL tool, and began writing my queries from there.  

The hardest part of the setup was debugging typescript issues of type. This proved to not be very difficult.

# Front-end Development

The development started with a basic project generated with the `@angular/cli` package using `ng new client`. Then from there, I created the basic layout using Angular Material, generated a custom theme, and setup the data connections.

The form component uses Input properties, and an output event to signal the user has selected a transaction, optionally entered a confidence level, and clicked the search button.

From there, the application loads the selected transaction's childrens array mapped to meet the schema represented by the `ag-grid`.

# Caveats

On First select of a transaction, the user will be provided with a listing of the appropriate childrens array, however, if the user were to change the confidence level, a consistent update is not assured at this time. I believe this to be due to unfamiliarity with `ag-grid` and angular service architechture, and could have been resolved with assistance from other developers more skilled with these libraries and concepts.

# Installation

To Start the app with a single instance, simply run `docker-compose up` in the root of the project.

to start the app with a docker swarm configuration run `docker stack deploy -c docker-compose.yml <stack name> ` replacing `<stack name>` with your desired name.