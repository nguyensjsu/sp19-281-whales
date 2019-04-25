### Team Hackathon Project

### We are the Whales!!!!

### Team Members

 * [Greeshma Vyas](https://github.com/greeshmavyas)
 * [Manjunatha Koni Gururaja](https://github.com/konman01)
 * [Prathamesh Karve](https://github.com/PrathamR)
 * [Saliha Mehboob](https://github.com/salihasjsu)

### Project 
#### The Future of Clipper
To be updated. Add introduction to what we have chosen.
    
### Project Progress and challenges
#### Design Phase

#### WOW factor ideas log!

The plan is to eventually implement a couple of the following:
1. grpc / Protobuf for marshalling instead of JSON
2. Autodeployment using Jenkins
3. VPC peering

#### Day 1 [04/10/2019] 
**Attendees:** Greeshma, Manjunatha, Prathamesh, Saliha

**Agenda:** Project kickoff meeting

a. Decided on having daily scrum meeting to follow up on team's progress. 

b. We set a target for the team to finish the task, one week earlier to the submission date. The last week should be spent only on testing the application with all possible test cases. 

c. Discussed which coding languages can be used to build the project? Go / Java / NodeJS

d. Discussed about the sample projects and understood what is expected from the team to build. Also, talked about how the architecture of the project can be designed.

e. Collected thoughts of each team member about how to choose the applicaton that we will be building as part of our project.
 
f. Discussed about Enhancements for Wow factor

g. Agreed on researching about 3 applications [ Burger, Clipper and Payments] to come up with list of modules that can be built along with the corresponding idea of UI pages. 

**Challenges:** To understand each team member's approach and come to initial consensus in getting started off with the project

#### Day 2 [04/11/2019] 
**Attendees:** Greeshma, Manjunatha, Prathamesh, Saliha

**Agenda:** Discuss each person's project idea proposal and try to converge on one by the end of the meeting

a. We discussed about each person's idea of what can be built for our project. The suggestions included 
* Future of clipper application
* Using block chain on cloud to implement cryptocurrency.

b. Agreed on building 'future of clipper' application. 

c. Discussed the following basic approach to the application:

1. Displays title, about website, login or sign up buttons, faqs.
Latest news in the transport dept. Links to other VTA related websites. Also, choose monthly and day pass. Login sign up button leads to those pages respectively
2. Login page. To sign up with account info. Here there will be distinction if the user belongs to an institution like sjsu, or a different company. If the ID number is provided any discounts or free rides benefits will be applied
3. Once Logged in- available balance should be shown on the top of the page:
We will have options of: clipper wallet, transaction history.
In clipper wallet: Available money, add money from different ways, request balance from      other user account. Once money is updated, show payment summary.
4. Transaction History page, will provide info regarding every ride taken and money spent for that ride. Depending on whether it is vta or bart, it will show money reduction on hourly or location basis
5. Can use the mobile app for that user with QR code to scan at the station. Accordingly the database gets updated by reducing the available balance and transaction info is updated. In case of trains like vta, it is on 2 hr basis the money gets deducted. For trains like bart, the start and end location is noted and the money is reduced accordingly

So possibly we can have the following microservices,

* Static info of first page and Login
* Clipper wallet
* QR code and transaction history 

Scaling:
* Xaxis: we create replicas of the database and prove the scaling. Also we can have replicas by having multiple instances and using load balancer. 
* Y axis: Split each microservice and show others are not interdependent.
* Z axis: splitting customers along modulus of customer_id, or along geographical location/zipcode that will be provided during sign up


**Challenging task of the day:** 
Figuring out the application from many suggestions
* That can be built in 10 days 
* Also, that which proves scaling along different axes of the AKF cube.

#### Day 3 [04/12/2019] 
**Attendees:** Greeshma, Manjunatha, Prathamesh, Saliha

**Agenda:** To meet in person and finalize on the application to be createed with all the microservices.

* We discussed all the questions and possible flaws the clipper application can have and also, thought about the solution to create it as a web browser.
* Came up with the following microservices for the application. Each team member was given ownership of each of the microservices.
  1. Login/Sign up: Allocating random QR code for the customer each time they login is also taken care as part of this module.
  2. Cash Wallet
  3. Transaction History
  4. Ability to check the services tied with the clipper application from the location the user accesses it.
 
#### Day 4 [04/13/2019] 
**Attendees:** Greeshma, Prathamesh, Saliha

**Agenda:** Had a brief meeting about each team member's progress towards designing their microservices. Discussed the high level overview of the following:

1. The database to be used for the microservices depending on the use cases considering the parameter of consistency and availability.
2. Though the microservices have independent functionality, there are some dependencies that are to be handled during the build phase. Discussed about this aspect and also about how the integration of these services can be made.
3. Schema design
4. Decided the scalable factors in the project. 
5. Discussed about a possible "Wow factor" enhancement - Using gRPC and Protobuf instead of REST APIs and JSON marshalling for improving the performance of communication between microservices.

#### 04/14/2019 to 04/16/2019
Having understood the microservices [Login/SignUp, Payment, Transaction History and Clipper Menu] to be created, all of us spent a couple of days to brainstorm about the following aspects:

1. APIs that each microservice will expose for other microservices and client

2. Database schema / design for each microservice

3. Propose a date when we will test our first end to end working prototype

#### Day 8 [04/17/2019]
**Attendees:** Greeshma, Prathamesh, Saliha

**Agenda:** To discuss the progress each team member has made, with an idea to mutually help each other. 

1. Each of us tried to explain the list of APIs that each microservice will expose for other microservices and client. Depicted it diagramatically for better understanding and ease while creating the go application.
2. Decided to have each microservice running atleast locally within two days, so as to attempt to integrate them during the next in-person meeting. 
3. There was a lot of enthusiasm among the team mates in proposing the "WOW factor" ideas. Decided to list them all and finally try to accomplish atleast a couple.

#### 04/18/2019 to 04/20/2019
**Progress So Far** </br>

Greeshma Vyas:
* Created the API desgin document that contains the details of all the APIs user Registration module will have.
* Created the APIs specified in the document. The language used to build backend for the user module is GO.
* Made an integration with MongoDB and tested the APIs locally.
* Understood the session based authentication in GO.

Manjunath:

Prathamesh:
* Created GET and POST APIs in Go
* Created database design

Saliha:

#### Day 11
**Minutes of Meeting on 04/20/2018** </br>
**Attendees:** Greeshma, Prathamesh, Saliha </br>
**Agenda:**  To track the progress in the project and set the future tasks. <br>

* Discussed the progress each of us have made so far as mentioned above in the 'Progress so far' section.
* Discussed the implementation of front end.
* Decided to have each module to be deployed on EC2 instances' docker hosts.
* Thought through how to integrate the microservices into one single application if each microservice is deployed as EC2 instances on different accounts of AWS. Each of us should look up and decide the approach.
* Also, shared ideas about session management to be done from the frontend or backend. Discussed whether to call any of the microservice that in turn sends the request to the user module to verify the authentication, or directly call the user module api from client side before the client tries to access any other module of the application. 
* Set future tasks to get each of the microservices up and running and having them integrated with the database. Also, try to implement mongoDB replication and sharding to prove the scaling properties.
***Saliha:*** Database cluster Integration with apis is completed.

#### 04/20/2019 to 04/24/2019
**Progress So Far** </br>

Prathamesh:
* Added metadata
* Containerized the application microservice and deployed to AWS
* Tested with MongoDB hosted on AWS

#### Day 15
**Minutes of Meeting on 04/24/2018** </br>
**Attendees:** Greeshma, Manjunatha, Prathamesh, Saliha </br>
**Agenda:** To discuss roadblocks and pending tasks for each microservice and make a plan for frontend development

* Discussed different strategies to handle user sessions
* Discussed about the need of an additional API in Menu microservice
* Brainstormed techniques for handling user ID to clipper ID mapping
* Voted about frontend technologies, Angular is the winner
* Will be meeting tomorrow (25th) to kickstart frontend coding


















