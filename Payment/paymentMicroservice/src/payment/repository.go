package payment
import (
)

type Repository struct {}
type Account struct {
    Id string `json:"id"`
    ClipperId string `json:"clipperId"`
    Balance float64 `json:"balance"`
    Funds float64 `json:"funds"`
    Fare float64 `json:"fare"`
}
var accounts = []Account{
  Account{
    Id: "1",
    ClipperId: "1",
    Balance: 23.1,
  },
  Account{
    Id: "2",
    ClipperId: "2",
    Balance: 232.1,
  },
  Account{
    Id: "3",
    ClipperId: "3",
    Balance: 2.1,
  },
}

func (r Repository) GetAllAccounts() []Account {
  return accounts
}

func (r Repository) GetAccount(clipperId string) Account{
  var acc Account
  for _,item := range accounts {
    if item.Id == clipperId {
      acc = item
    }
  }
  return acc
}
func (r Repository) CreateAccount(data Account) {
  accounts = append(accounts,account);
}

func (r Repository) AddFunds(data Account){
  for i,_ := range accounts {
    item := &accounts[i]
    if item.Id == data.Id {
      item.Balance = item.Balance + data.Funds
      item.Funds = 0.0
    }
  }
}

func (r Repository) PayFare(data Account){
  for i,_ := range accounts {
    item := &accounts[i]
    if item.Id == data.Id {
      item.Balance = item.Balance - data.Fare
      item.Fare = 0.0
    }
  }
}
