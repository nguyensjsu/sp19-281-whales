package main

import(
  "net/http"
  "encoding/json"
)

type Controller struct {
  Repository Repository
}

func (c *Controller) InquireBalance(w http.ResponseWriter, r *http.Request){
  account := c.Repository.GetAccount()
  data,_ := json.Marshal(account)
  w.WriteHeader(http.StatusOK)
  w.Write(data)
  return
}
