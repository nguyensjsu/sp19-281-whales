package main

type transactions struct {
    TransId    string   `bson:"tId"`
    UserId     string   `bson:"uId"`
    ServiceId  string   `bson:"sId"`
    Price      string  `bson:"price"`
}

type transReq struct {
    UserId     string
    ServiceId  string
    Price      string
}

type transGet struct {
    UserId  string
}
