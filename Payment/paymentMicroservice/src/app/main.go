package main

import (
  "log"
  "net/http"
  "os"
  "configuration"
  "payment"
)


func main(){
  env()
  // start the http server
  router := payment.NewRouter()
  log.Fatal(http.ListenAndServe(port(), router))
}

func port() string {
	port := configuration.Configs.ServerPort
  if port == "" {
		port = configuration.Config().ServerPort
	}
  log.Println("Server running on "+ port)
	return ":"+port
}

func env() {
  configuration.Configs.ServerPort = os.Getenv("PORT")
  configuration.Configs.Server1 = os.Getenv("server1")
  configuration.Configs.Server2 = os.Getenv("server2")
  configuration.Configs.Server3 = os.Getenv("server3")
}
