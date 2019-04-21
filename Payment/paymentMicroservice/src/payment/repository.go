package payment
import (
)

type Repository struct {}

var accounts = []PaymentAccount{
  PaymentAccount{
    Id: "1",
    ClipperId: "1",
    Balance: 23.1,
  },
  PaymentAccount{
    Id: "2",
    ClipperId: "2",
    Balance: 232.1,
  },
  PaymentAccount{
    Id: "3",
    ClipperId: "3",
    Balance: 2.1,
  },
}

func (r Repository) GetAllAccounts() []PaymentAccount {
  return accounts
}

func (r Repository) GetAccount(clipperId string) PaymentAccount{
  var acc PaymentAccount
  for _,item := range accounts {
    if item.Id == clipperId {
      acc = item
    }
  }
  return acc
}
func (r Repository) CreateAccount(data PaymentAccount) {
  accounts = append(accounts,account);
}

func (r Repository) AddFunds(data PaymentAccount){
  for i,_ := range accounts {
    item := &accounts[i]
    if item.Id == data.Id {
      item.Balance = item.Balance + data.Funds
      item.Funds = 0.0
    }
  }
}

func (r Repository) PayFare(data PaymentAccount){
  for i,_ := range accounts {
    item := &accounts[i]
    if item.Id == data.Id {
      item.Balance = item.Balance - data.Fare
      item.Fare = 0.0
    }
  }
}
