##APIs

APIs marked in blue will be part of the first prototye

1. <span style="color:blue"> GET {base}/history </span> <br/>
Returns list of transactions in JSON <br/>
**Callers** - Client app

2. GET {base}/history/{tID} <br/>
Get one transaction identified by tID <br/>
**Callers** - Client app

3. GET {base}/history/details
Returns list of transactions in JSON with details <br/>
**Callers** - Client app

4. GET {base}/history/{tID}/detailed <br/>
Get one transaction identified by tID with details <br/>
**Callers** - Client app

5. <span style="color:blue">  POST {base}/history </span> <br/>
Add a new transaction with details in the payload <br/>
**Callers** - Wallet microservice

##Database Design

* MongoDB cluster with sharding and replication
* Document fields marked in blue will be part of the first prototype

#### Typical document structure
* <span style="color:blue"> tID - Unique transaction identifier 
* <span style="color:blue"> uID - Identifies the user account that initiated the transaction
* <span style="color:blue"> sID - Identifies the service with which the transaction is associated
* <span style="color:blue"> price - A float that states how much money was spent on this transaction
