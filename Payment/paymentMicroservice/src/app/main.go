package main

import (
  "log"
  "net/http"
  "os"
  "payment"
)

func main(){
// start the http server
router := payment.NewRouter()
 log.Fatal(http.ListenAndServe(port(), router))
}

func port() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	return ":"+port
}
