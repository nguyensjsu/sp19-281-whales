package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	"github.com/codegangsta/negroni"
	"github.com/unrolled/render"
	"github.com/satori/go.uuid"
	"gopkg.in/mgo.v2"
    "gopkg.in/mgo.v2/bson"
)

// MongoDB Config
// ToDo : Get from config
var mongodb_server = "localhost"
var mongodb_database = "cmpe281"
var mongodb_collection = "transactions"

// NewServer configures and returns a Server.
func NewServer() *negroni.Negroni {
	formatter := render.New(render.Options{
		IndentJSON: true,
	})
	n := negroni.Classic()
	mx := mux.NewRouter()
	initRoutes(mx, formatter)
	n.UseHandler(mx)
	return n
}

// API Routes
func initRoutes(mx *mux.Router, formatter *render.Render) {
	mx.HandleFunc("/ping", pingHandler(formatter)).Methods("GET")
	mx.HandleFunc("/transactions", getTransListHandler(formatter)).Methods("GET")
	mx.HandleFunc("/transactions", createNewTransHandler(formatter)).Methods("POST")
//	mx.HandleFunc("/order/{id}", gumballOrderStatusHandler(formatter)).Methods("GET")
//	mx.HandleFunc("/order", gumballOrderStatusHandler(formatter)).Methods("GET")
//	mx.HandleFunc("/orders", gumballProcessOrdersHandler(formatter)).Methods("POST")
}

// Helper Functions
func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
		panic(fmt.Sprintf("%s: %s", msg, err))
	}
}

// API Ping Handler
func pingHandler(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		formatter.JSON(w, http.StatusOK, struct{ Test string }{"API version 1.0 alive!"})
	}
}

// API Gumball Machine Handler
func getTransListHandler(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		session, err := mgo.Dial(mongodb_server)
        if err != nil {
                panic(err)
        }
        defer session.Close()
        session.SetMode(mgo.Monotonic, true)
        c := session.DB(mongodb_database).C(mongodb_collection)
        var result bson.M
        err = c.Find(bson.M{"SerialNumber" : "1234998871109"}).One(&result)
        if err != nil {
                log.Fatal(err)
        }
        fmt.Println("Gumball Machine:", result )
		formatter.JSON(w, http.StatusOK, result)
	}
}

// API Create New Transaction
func createNewTransHandler(formatter *render.Render) http.HandlerFunc {
    return func(w http.ResponseWriter, req *http.Request) {
        decoder := json.NewDecoder(req.Body)
        var t test_struct
        err := decoder.Decode(&t)
        if err != nil {
            panic(err)
        }
        log.Println(t.UserId)
        log.Println(t.ServiceId)
        log.Println(t.Price)

        uuid := uuid.NewV4()
        var trans = transactions {
            TransId:   uuid.String(),
            UserId:    t.UserId,
            ServiceId: t.ServiceId,
            Price:     t.Price
        }

        formatter.JSON(w, http.StatusOK, "Done")
}
