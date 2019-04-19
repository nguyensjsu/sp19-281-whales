#### Business Requirements of User Registration Microservice

##### Sign Up and Link an existing clipper ID (or get a new clipper ID)

The user enters the following details. 

* First name
* Last name
* Phone
* Mailing addres: addline1, addline2, city, state, Zip code
* Consent check 
* Choose username: this field is prepopulated with email id n disabled
* Choose password
* Re-enter password

* Checkbox for 'Need new clipper ID'. By default the 'NO' option is chosen. If the user chooses 'NO', previous clipper card ID info should be provided. There should be a register button. 
On click, authenticate with the collection of Clipper IDs in DB. Also check if they are associated with any other account. Else assign it with this account. Otherwise, there is error message not letting the user sign up. The database check is done here, the database is updated only after the sign up button is clicked.
* There is sign Up button at the end.  Upon clicking the button: 

 1. Store the info in db. 
 2. Assign clipper ID, a 10 digit number
 3. Store username password 
 4. Send the response. The response of sign up will have the details of clipper id and other details the user entered. Redirect to login page


##### Login 
User provides the following details:
* Email Address
* Password

On click of login, authenticate the user.
Response will have the userid to create the QR code.
Create a QR code with username. 

Additional function can implement: forgot password.





