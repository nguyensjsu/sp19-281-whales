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

#### Typical document structure - version 1
* **tID - Unique transaction identifier**
* **uID - Identifies the user account that initiated the transaction**
* **sID - Identifies the service with which the transaction is associated**
* **price - A float that states how much money was spent on this transaction**

#### Document structure with metadata - version 2
* Will include all 4 fields from version 1
* **mFlag - Flag indicating whether metadata is present**
* **sLoc - Starting location for the commute**
* **eLoc - Ending location for the commute**

#### Enhancements
* Optional metadata field to store service-specific data
* VTA Light rail - Only starting station 
* VTA Bus - Only starting bus stop
* Ford Bikes - Start and end bike station
* Caltrain - Start and end train station


## Server-side Code
* Language - Go
* Packages - 

1. yaml (for parsing configuration) - Will be replaced with env variables
2. codegangsta/negroni - Web server
3. gorilla/mux - Router for serving requests
4. unrolled/render - Formatting request/response content
5. satori/go.uuid - Generating IDs for storing in MongoDB
