# Payment Microservice
E-Clipper web application is going to provide the clipper card user an online portal which will allow them to use the transportation
with online application. The payment module of the application has the following features
1. Inquire current balance.
2. Add funds to your account.
3. Pay fare 
The application will allow the user to refill the account and pay fare using variety fo payment methods like credit,debit and wallet etc.
[17-04-2019]
Following are the uris of apis implemented with in memory data:
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
[20-04-2019]
## Configurations
***github.com/tkanos/gonfig*** package is used to read configurations from a config.json file. 

## Database 
Setup MongoDB replica set with 3 nodes. Integration of mongo db with the application. 
