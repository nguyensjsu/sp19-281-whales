package main

import (
  "log"
  "net/http"
  "os"
)

func main(){
port := os.Getenv("PORT")
if port == "" {
  port = "3000"
}

router := NewRouter()
 log.Fatal(http.ListenAndServe(":"+port, router))
}
