package payment

import (
  "log"
  "net/http"
  "github.com/gorilla/mux"
  "configuration"
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
      configuration.Config().BaseUrl+"{id}",
      controller.InquireBalance,
    },
    Route {
      "GetAllAccounts",
      "GET",
      configuration.Config().BaseUrl,
      controller.GetAllAccounts,
    },
    Route{
      "CreateAccount",
      "POST",
      configuration.Config().BaseUrl+"addaccount",
      controller.CreateAccount,
    },
    Route{
      "AddFunds",
      "POST",
      configuration.Config().BaseUrl+"addfunds",
      controller.AddFunds,
    },
    Route{
      "PayFare",
      "POST",
      configuration.Config().BaseUrl+"payfare",
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
