package payment

import(
  "net/http"
  "encoding/json"
  "github.com/gorilla/mux"
  "io/ioutil"
)

type Controller struct {
  Repository Repository
}
var account Account
func (c *Controller) GetAllAccounts(w http.ResponseWriter, r *http.Request){
  accounts := c.Repository.GetAllAccounts()
  data,err:= json.Marshal(accounts)
  if err!=nil {
    panic(err)
  }
  w.WriteHeader(http.StatusOK)
  w.Write(data)
  return
}

func (c *Controller) InquireBalance(w http.ResponseWriter, r *http.Request){
  vars := mux.Vars(r)
  account := c.Repository.GetAccount(vars["id"])
  data,err:= json.Marshal(account)
  if err!=nil {
    panic(err)
  }
  w.WriteHeader(http.StatusOK)
  w.Write(data)
  return
}

func (c *Controller) CreateAccount(w http.ResponseWriter, r *http.Request){
  body,err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
    w.WriteHeader(http.StatusBadRequest)
}
  err = json.Unmarshal([]byte(body), &account)
  if err != nil {
    panic(err)
  }
  c.Repository.CreateAccount(account)
  w.WriteHeader(http.StatusOK)
}

func (c *Controller) AddFunds(w http.ResponseWriter, r *http.Request){
  body,err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
    w.WriteHeader(http.StatusBadRequest)
  }
    err = json.Unmarshal(body, &account);
    if err != nil {
      panic(err)
      w.WriteHeader(http.StatusBadRequest)
    }
    c.Repository.AddFunds(account)
    w.WriteHeader(http.StatusOK)
}
func (c *Controller) PayFare(w http.ResponseWriter, r *http.Request){
  body,err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
    w.WriteHeader(http.StatusBadRequest)
  }
    err = json.Unmarshal(body, &account);
    if err != nil {
      panic(err)
      w.WriteHeader(http.StatusBadRequest)
    }
    c.Repository.PayFare(account)
    w.WriteHeader(http.StatusOK)
}
