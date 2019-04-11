### Team Hackathon Project

### We are the Whales!!!!

### Team Members

To be updated with the github hyperlink to each person's github repo
 * Greeshma Vyas
 * Manjunath 
 * Prathamesh
 * Saliha
 

### Project: 
To be updated. Title and an introduction to what we have chosen.
    
### Project Progress and challenges

#### Day 1 [04/10/2019] 
a. Decided on having daily scrum meeting to follow up on team's progress. 

b. We set a target for the team to finish the task, one week earlier to the submission date. The last week should be spent only on testing the application with all possible test cases. 

c. Discussed which coding languages can be used to build the project? Go / Java / NodeJS

d. Discussed about the sample projects and understood what is expected from the team to build. Also, talked about how the architecture of the project can be designed.

e. Collected thoughts of each team member about how to choose the applicaton that we will be building as part of our project.
 
f. Discussed about Enhancements for Wow factor

g. Agreed on researching about 3 applications [ Burger, Clipper and Payments] to come up with list of modules that can be built along with the corresponding idea of UI pages. 

**Challenges:** To understand each team member's approach and come to initial consensus in getting started off with the project

#### Day 2 
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













