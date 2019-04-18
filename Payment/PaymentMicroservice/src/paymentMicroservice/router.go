package main

import (
  "log"
  "net/http"
  "github.com/gorilla/mux"
)

type Route struct {
  Name string
  Method string
  Pattern string
  HandlerFunc http.HandlerFunc
}
var controller = &Controller{Repository: Repository{}}
type Routes []Route

var routes = Routes {
    Route {
      "InquireBalance",
      "GET",
      "/inquirebalance",
      controller.InquireBalance,
    },
}

func NewRouter() *mux.Router {
  router := mux.NewRouter()
  for _,route := range routes {
    var handler http.HandlerFunc
    log.Println(route.Name)
    handler = route.HandlerFunc
    router.Methods(route.Method).
    Path(route.Pattern).
    Name(route.Name).
    Handler(handler)
  }
  return router
}
