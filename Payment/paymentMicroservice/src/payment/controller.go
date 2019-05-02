package payment

import(
  "net/http"
  "encoding/json"
  "github.com/gorilla/mux"
  "io/ioutil"
  "github.com/asaskevich/govalidator"
)

type Controller struct {
  Repository Repository
}
var account PaymentAccount
// GET all accounts
func (c *Controller) GetAllAccounts(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
  accounts := c.Repository.GetAllAccounts()
  data,err:= json.Marshal(accounts)
  if err!=nil {
    panic(err)
  }
  w.WriteHeader(http.StatusOK)
  w.Write(data)
  return
}
// GET - inquire payment details of a user
func (c *Controller) InquireBalance(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
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

//POST - create a new payment account for a user
func (c *Controller) CreateAccount(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
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

//POST - Add funds to the account

func (c *Controller) AddFunds(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
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
    // TO be decided later
    //account.Balance = account.Balance + account.funds

    c.Repository.AddFunds(account)
    w.WriteHeader(http.StatusOK)

}

//POST - pay the amount of fare from current balance
func (c *Controller) PayFare(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
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
    // TI BE DECIDED LATER
    //account.Balance = account.Balance - account.funds
    c.Repository.PayFare(account)
    w.WriteHeader(http.StatusOK)
}

func (c *Controller) ValidateCard(w http.ResponseWriter, r *http.Request) {
  enableCors(&w)
  body,err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
    w.WriteHeader(http.StatusBadRequest)
  }
  var paymentMethod PaymentMethod
    err = json.Unmarshal(body, &paymentMethod);
    if err != nil {
      panic(err)
      w.WriteHeader(http.StatusBadRequest)
    }
    validCreditCard := govalidator.IsCreditCard(paymentMethod.CardNumber)
    w.WriteHeader(http.StatusOK)
    data,_ := json.Marshal(validCreditCard)
    w.Write(data)
}

func (c *Controller) updateAccount(w http.ResponseWriter, r *http.Request){
  enableCors(&w)
  body,err := ioutil.ReadAll(r.Body)
  if err != nil {
    panic(err)
    w.WriteHeader(http.StatusBadRequest)
}
  err = json.Unmarshal([]byte(body), &account)
  if err != nil {
    panic(err)
  }
  c.Repository.updateAccount(account)
  w.WriteHeader(http.StatusOK)
}

func validateCard(pm PaymentMethod)bool{
  validCreditCard := govalidator.IsCreditCard(pm.CardNumber)
  return validCreditCard
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
