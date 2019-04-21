package main

import (
  "log"
  "net/http"
  "os"
  "github.com/tkanos/gonfig"
  "payment"
  "fmt"
)

var configuration Configuration // project configurations

func main(){
  err := gonfig.GetConf("config.json", &configuration)
  if err != nil {
    panic(err)
  }
  // start the http server
  router := payment.NewRouter()
  log.Fatal(http.ListenAndServe(port(), router))
}

func port() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = configuration.ServerPort
	}
	return ":"+port
}
