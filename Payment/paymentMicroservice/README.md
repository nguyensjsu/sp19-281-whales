# Payment Microservice
E-Clipper web application is going to provide the clipper card user an online portal which will allow them to use the transportation
with online application. The payment module of the application has the following features
1. Inquire current balance.
2. Add funds to your account.
3. Pay fare 
The application will allow the user to refill the account and pay fare using variety fo payment methods like credit,debit and wallet etc.

Following are the uris of apis implemented:
### GET:
```
/                                 --> Get All Accounts
inquirebalance/{id}               --> Inquire current balance
```

### POST:
```
/                                 --> Create a new Payment Account
/addfunds                         --> Add money in your account
/payfare                          --> Pay for you fare
```

## Database 
A cluster of riak database is being used to store the data.
