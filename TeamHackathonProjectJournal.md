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

#### Day 3

* Agenda: To meet in person and finalize on the application to be createed with all the microservices.
* We discussed all the questions and possible flaws the clipper application can have and also, thought about the solution to create it as a web browser.
* Came up with the following microservices for the application. Each team member was given ownership of each of the microservices.
  1. Login/Sign up: Allocating random QR code for the customer each time they login is also taken care as part of this module.
  2. Cash Wallet
  3. Transaction History
  4. Ability to check the services tied with the clipper application from the location the user accesses it.
 
#### Day 4
Had a brief meeting about the progress in each team member's progress towards creating the microservices. Discussed the high level overview of the following:
1. The database to be used for the microservices depending on the use cases considering the parameter of consistency and availability.
2. Though the microservices have independent functionality, there are some dependencies that are to be handled during the build phase. Discussed about this aspect and also about how the integration of these services can be made.
3. Schema design
4. Decided the scalable factors in the project. 
5. Talked about performance betterment by using protobuff instead of marshalling when trying to convert the json input to our services.















