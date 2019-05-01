# Introduction

There are many transportation services that can be aviled using Clipper Card. The problem with this clipper card is that there are no proper portal available to reload clipper card to use all the services. For example if we want to use Bart Train using the clipper Card, then we have go to Bart train web portal and we have to reload our clipper card, and if we want use VTA service using clipper card, then we have go to VTA service to reload out clipper card. There is no proper single application to avail all the services using clipper card. In this project, we are building the prototype to overcome this problem.

# Responsibility

The application that we are building, called eClipper consists of 4 microservices such as Login and Session Management, Menu Service, Payment Service and user services. My responsibality in this project is to develop menu microservice for the application.

# Functionality of Menu Service

The main functionality of menu service is to display the available services for clipper card on mentioning the zip code. If the user mentions the Zip Code of the perticular region, then the user will get all the services available in that region. The detail architecture of the application is provided below.

# Architecture of ClipperMenu MicroService 

> [
![ApplicationArchitecture](https://user-images.githubusercontent.com/33331778/56463504-8c2e6c00-638a-11e9-9b50-4614a79f9af5.png)
](url)

# Architecture Overview of Menu Microservice

In our application we have used angular js for front end and is hosted in heroku. My microservice is hosted in AWS with node.js as backend and MongoDB for database. I have installed the backend server in public subnet and hosted a mongoDB cluster with replication set in private subnet to provide the Partion Tolerence and high availability for the application. I have also provided the elastic load balancer for backend server to handle more traffic. 

# Steps to implement the Menu Microservice

* Host a ubuntu instance in AWS and install Docker Client (Neglected load balancer step)
* Create a MongoDB cluster with replication set in Ubuntu instances. 
* Update the index.js file and provide proper mongoDB url with authentication parameters
* Create docker container image for nodejs backend with the given docker file
* push the code to docker hub.
* in AWS ubuntu server, pull the image and run with proper port mapping.
* Test with postman.

Regards
Manjunatha K F
