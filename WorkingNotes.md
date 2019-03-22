# Initial Thoughts

* A Basic query will need to have a transaction ID that is manditory and a confidence Level optionally that defaults to 1.
* GraphQL will serve this purpose nicely, and only really require one query, and the entire dataset can/should be represented with a single schema.
* There will need to be two icons selected to represent the same email, or the same Geolocation information. Potential Options:
    * ![Globe Icon](globe.png)
    * ![Email Icon](mail.png)
    * ![Name Icon](cursiveS.png)
    * ![Device Icon](device.png)

* The initial form should have validation to ensure the back end does not waste resources with faulty requests. The best efficiency is to have nothing to do on the most expensive resource, however, for performance on the end user side, we will want to only do small quick tasks. The final purpose of validating requests prior to delivering them to the server, is to ensure that it does not process requests that are going to return an error. Most efficiently, we want to server only to hand out data, not errors.
* for the purpose of code clarity, readability, and consistency. Prettier/ESLint will be used in the code editor to automate the process of formatting code to follow best practices and standards.
* Logging is handled on the back end by a simple logging library called `Bunyan` this is set to a rotating log file with three periods each lasting one week. This is just a standard that I have been building into my apps, and can be modified to be included in the front end, and can be stored for shorter time periods on the front end using local storage as the media. In my opinion we would probably want to store the most recent 1000(?) log entries for debugging only if neccesary.




  