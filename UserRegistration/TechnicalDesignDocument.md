###Technical design Document

### APIs
0. Ping the API endpoint</br>
   **GET** {baseURL}/user/ping

1. **POST**  {baseURL}/users/signup </br>
   Callers: Client App </br>
   Content-Type: application/json </br>
   **Request**
   
    | Parameter        | Type           | Description      |
    | ------------- |:-------------:| -----:|
    | firstName   | string  | User First Name
    | lastName    | string  | User last name
    | address     | string  | User address
    | city        | string  | User city
    | state       | string  | User state
    | zipcode     | string  | User zipcode
    | phone       | string  | User phone
    | email       | string  | User email
    | password    | string  | User password
    |username     | string  | User Email
    | consent     |string   | Y or N 
    |linkcard     |string   | Y or N
    |cardID       |string   | Existing clipper card ID
    
    **Response** </br>
    Parameters for Success Status code: 200 
    
    
    
    | Parameter        | Type           | Description  |
    | ------------- |:-------------:| -----:|
    | firstName   | string  | User First Name
    | lastName    | string  | User last name
    | email       | string  | User email
    | message     | string  | Successful sign up message 
    | clipperID   | string  | 10 digit clipperID associated with the account
    
    Parameters for Error (Status code: 401)
    
    | Parameter        | Type           | Description  |
    | ------------- |:-------------:| -----:|
    | message     | string  | Error Message
    
    
2. **POST** {baseURL}/users/signin</br>
   Callers: Client App </br>
	Content-type: application/json </br>
	**Request**

	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| email     | string  | User User email
	| password  | string  | User password
    
    **Response**
    
    | Parameter        | Type           | Description  
	| ------------- |:-------------:| -----:|
	| firstName     | string  | User firstName
	| lastname      | string  | User lastName
	| email         | string  | User email
	| address         | Address  | every field detail of user's address
	|id               |string| User's account number
	|clipperid        |string| User's clipper id
	
	Parameters for Error (Status code: 401)
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message     | string  | Error Message

3. Get User by ID</br>
	**GET** {baseURL}/users/:id </br>
	Callers: Client App/ Other microservices</br>
	Content-type: application/json</br>
	 **Request** </br>
    
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| id     | string  | user id


	**Response**

	Parameters for Success (Status code: 200)
	
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| firstName   | string  | User First Name
	| lastName    | string  | User last name
	| address     | string  | User address
	| city        | string  | User city
	| state       | string  | User state
	| zipcode     | string  | User zipcode
	| phone       | string  | User phone
	| email       | string  | User email
	|password     |string  | User password
	|id               |string| User's account number
	|clipperid        |string| User's clipper id

	Parameters for Error (Status code: 401)
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message     | string  | Error Message
	
4. Delete User

	**Delete** {baseURL}/users/:id </br>
	Callers: Client App </br>
   Content-type: application/json

	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| id     | string  | user id


	Response

	Parameters for Success (Status code: 200)
	
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message   | string  | Message with successful deletion of the user

	Parameters for Error (Status code: 401)
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message     | string  | Error Message
5. Edit user

	**PUT** {baseURL}/users/:id</br>
	Callers: Client App </br>
	Content-type: application/json
	**Request** </br>
	email cannot be edited </br>
	The following fields can be edited </br>

	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| firstName   | string  | User First Name
	| lastName    | string  | User last name
	| address     | string  | User address
	| city        | string  | User city
	| state       | string  | User state
	| zipcode     | string  | User zipcode
	| phone       | string  | User phone
	| password    | string  | User password 

	Response

	Parameters for Success (Status code: 200)
	
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| firstName   | string  | User First Name
	| lastName    | string  | User last name
	| address     | string  | User address
	| city        | string  | User city
	| state       | string  | User state
	| zipcode     | string  | User zipcode
	| phone       | string  | User phone
	| email       | string  | User email
	| password    | string  | User password

	Parameters for Error (Status code: 401)
	
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message     | string  | Error Message
	
6. Get All users

	**GET** {baseURL}/users</br>
	Callers: Other Microservices </br>
	Content-type: application/json</br>
	**Response** </br>
	All the users in the db are returned with all the   fields
	
	Parameters for Error (Status code: 401)

	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message     | string  | Error Message
   
  
    
###Database Schema
MongoDB cluster with sharding and replication

1. Collection User

 ```
  {
   _id: POST_ID
   firstName: USER_FIRSTNAME, 
   lastName: USER_LASTNAME,
   address: {
         addressline:'COMMENT_BY',
         city: TEXT,
         state: DATE_TIME,
         zipcode: LIKES 
      },
    phone: USER_PHONE
    email: USER_EMAIL
    password: USER_PASSWORD
    username: USER_EMAIL
    consent: USER_CONSENT_FLAG
    clipperid: CLIPPER_ID_FOR_ACCOUNT    
}

 ```
