### Technical design Document

### APIs
0. Ping the API endpoint</br>
   **GET** {baseURL}/user/ping

1. **POST**  {baseURL}/user/signup </br>
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
    
    
2. **POST** {baseURL}/user/login</br>
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
	| token         | string  | jwtToken
	
	Parameters for Error (Status code: 401)
	
	| Parameter        | Type           | Description  |
	| ------------- |:-------------:| -----:|
	| message     | string  | Error Message
	
	
    yet to update the edit and delete end points.
    
### Database Schema

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
