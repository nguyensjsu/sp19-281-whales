## APIs

APIs marked bold will be part of the first prototye

1. **GET {base}/transactions** <br/>
Returns list of transactions in JSON <br/>
__*Callers*__ - Client app

2. GET {base}/history/{tID} <br/>
Get one transaction identified by tID <br/>
__*Callers*__ - Client app

3. GET {base}/history/details
Returns list of transactions in JSON with details <br/>
__*Callers*__ - Client app

4. GET {base}/history/{tID}/detailed <br/>
Get one transaction identified by tID with details <br/>
__*Callers*__ - Client app

5. **POST {base}/transactions** </span> <br/>
Add a new transaction with details in the payload <br/>
__*Callers*__ - Wallet microservice

## Database Design

* MongoDB cluster with sharding and replication
* Document fields marked bold will be part of the first prototype

#### Typical document structure
* **tID - Unique transaction identifier**
* **uID - Identifies the user account that initiated the transaction**
* **sID - Identifies the service with which the transaction is associated**
* **price - A float that states how much money was spent on this transaction**
