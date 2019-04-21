package main

import (
  "log"
  "net/http"
  "os"
  "configuration"
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
		port = configuration.Config().ServerPort
	}
	return ":"+port
}
