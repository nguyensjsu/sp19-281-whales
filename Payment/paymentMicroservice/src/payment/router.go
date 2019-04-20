package payment

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
      "/inquire/{id}",
      controller.InquireBalance,
    },
    Route {
      "GetAllAccounts",
      "GET",
      "/",
      controller.GetAllAccounts,
    },
    Route{
      "CreateAccount",
      "POST",
      "/addAccount",
      controller.CreateAccount,
    },
    Route{
      "AddFunds",
      "POST",
      "/addfunds",
      controller.AddFunds,
    },
    Route{
      "PayFare",
      "POST",
      "/payfare",
      controller.PayFare,
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
