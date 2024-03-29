# Payment Microservice
E-Clipper web application is going to provide the clipper card user an online portal which will allow them to use the transportation
with online application. The payment module of the application has the following features
1. Inquire current balance.
2. Add funds to your account.
3. Pay fare 
The application will allow the user to refill the account and pay fare using variety fo payment methods like credit,debit and wallet etc.
-----
[17-04-2019]
Following are the uris of apis implemented with in-memory data:
### GET:
***BaseURL=/clipperpayments/***
```
/                                 --> Get All Accounts
/{id}                             --> Inquire current balance
```

### POST:
```
/addaccount                       --> Create a new Payment Account
/addfunds                         --> Add money in your account
/payfare                          --> Pay for you fare
/validatecard                     --> validate payment iinformation      
```
[20-04-2019]

## Configurations
***github.com/tkanos/gonfig*** package is used to read configurations from a config.json file. 

## Database 
Setup MongoDB replica set with 3 nodes. Integration of mongo db with the application. 
```
db.createUser( {
        user: "clipperadmin",
        pwd: "admin",
        roles: [{ role: "root", db: "admin" }]
    });

      rs.initiate( {
       _id : "eclipper",
       members: [
          { _id: 0, host: "primary:27017" },
          { _id: 1, host: "secondary1:27017" },
          { _id: 2, host: "secondary2:27017" }
       ]
    })
    
 ```


[21-04-2019]

***"github.com/asaskevich/govalidator"*** to validate the credit card number. 


***Card Validation*** Api completed.


***DB integration*** apis are now integrated with database.


***Testing*** Tested apis with database integrated.

```

    go get github.com/asaskevich/govalidator
    go get gopkg.in/mgo.v2
    go get gopkg.in/mgo.v2/bson
    go get github.com/tkanos/gonfig
    go get github.com/rs/xid
    go get github.com/gorilla/mux
   
```
