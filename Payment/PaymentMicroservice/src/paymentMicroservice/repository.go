package main
import (

)

type Repository struct {}
type Account struct {
    Id string
    UserId string
    Balance float64
}
var account Account

func (r Repository) GetAccount() Account {
  account = Account {Id:"1",UserId:"1", Balance:20}
  return account
}
