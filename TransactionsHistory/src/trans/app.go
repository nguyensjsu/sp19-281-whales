package main

import (
    "fmt"
    "log"
    "net/http"
    "encoding/json"
    "github.com/codegangsta/negroni"
    "github.com/gorilla/mux"
    "github.com/unrolled/render"
    "github.com/satori/go.uuid"
    "gopkg.in/mgo.v2"
//    "gopkg.in/mgo.v2/bson"
)

// MongoDB Config
// ToDo : Get from config
var mongodb_server = "mongodb://10.0.1.234:27017,10.0.1.18:27017,10.0.1.107:27017"
var mongodb_database = "eclipper"
var mongodb_collection = "transactions"
var mongo_admin_database =  "admin"
var mongo_username = "admin"
var mongo_password = "*****"

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

// API Ping Handler
func corsHandler(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {
		formatter.JSON(w, http.StatusOK, struct{ Test string }{"API version 1.0 alive!"})
        fmt.Printf("I am CORS")
	}
}

// API Gumball Machine Handler
func getTransListHandler(formatter *render.Render) http.HandlerFunc {
    return func(w http.ResponseWriter, req *http.Request) {

        enableCors(&w)
        session, err := mgo.Dial(mongodb_server)
        if err != nil {
            panic(err)
        }

        err = session.DB(mongo_admin_database).Login(mongo_username, mongo_password)
	if err != nil {
		message := struct {Message string}{"Error while connecting to database!!"}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(message)
		return
	}

        defer session.Close()
        session.SetMode(mgo.Monotonic, true)
        c := session.DB(mongodb_database).C(mongodb_collection)
        result := make([]transactions, 0, 10)

        err = c.Find(nil).All(&result)
        if err != nil {
            log.Fatal(err)
        }
        fmt.Printf("I have CORS")
        fmt.Println("Transactions:", result )
            formatter.JSON(w, http.StatusOK, result)
	}
}

// API Create New Transaction
func createNewTransHandler(formatter *render.Render) http.HandlerFunc {
    return func(w http.ResponseWriter, req *http.Request) {

        fmt.Printf("I have CORS")
        enableCors(&w)
        var t transReq
        _ = json.NewDecoder(req.Body).Decode(&t)

        session, err := mgo.Dial(mongodb_server)
        if err != nil {
                panic(err)
        }

        err = session.DB(mongo_admin_database).Login(mongo_username, mongo_password)
	if err != nil {
		message := struct {Message string}{"Error while connecting to database!!"}
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(message)
		return
	}

        defer session.Close()
        session.SetMode(mgo.Monotonic, true)
        c := session.DB(mongodb_database).C(mongodb_collection)

        log.Println(t.ClipperId)
        log.Println(t.ServiceId)
        log.Println(t.Price)
        log.Println(t.Date)

        uuid := uuid.NewV4()
        var trans = transactions {
            TransId:   uuid.String(),
            UserId:    t.UserId,
            ServiceId: t.ServiceId,
            Price:     t.Price,
            Date:      t.Date,
        }

        err = c.Insert(trans)
	if err != nil {
	    fmt.Printf("insert fail %v\n", err)
        }

        formatter.JSON(w, http.StatusOK, "Done")
    }
}

func enableCors(w *http.ResponseWriter) {
        (*w).Header().Set("Access-Control-Allow-Origin", "*")
}
