package main

type transactions struct {
    TransId    string   `bson:"tId"`
    UserId     string   `bson:"uId"`
    ServiceId  string   `bson:"sId"`
    Price      float64  `bson:"price"`
}

type transReq struct {
    UserId     string
    ServiceId  string
    Price      float64
}
