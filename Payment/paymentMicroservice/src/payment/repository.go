package payment
import (
  "github.com/rs/xid"
  "gopkg.in/mgo.v2"
  "gopkg.in/mgo.v2/bson"
  "log"
  "fmt"
  "configuration"
)

type Repository struct {}
var db *mgo.Database
var session mgo.Session

func (r Repository) GetAllAccounts() []PaymentAccount {
  var accounts []PaymentAccount
  c := getSession()
  err := c.Find(bson.M{}).All(&accounts)
  if err != nil {
    log.Fatal(err)
  }
  closeSession()
  return accounts
}

func (r Repository) GetAccount(clipperId string) PaymentAccount{
  var account PaymentAccount
  c := getSession()
  err := c.Find(bson.M{"clipperId":clipperId}).One(&account)
  if err != nil {
    log.Fatal(err)
  }
  return account
}
func (r Repository) CreateAccount(data PaymentAccount) {
  c := getSession()
  err := c.Insert(&data)
  if err != nil {
    log.Fatal(err)
  }
  closeSession()
  //accounts = append(accounts,account);
}

func (r Repository) AddFunds(data PaymentAccount){
  c := getSession()
  err := c.Update(bson.M{"clipperId":data.ClipperId},data)
  if err != nil {
    log.Fatal(err)
  }
  closeSession()
}

func (r Repository) PayFare(data PaymentAccount){
  c := getSession()
  err := c.Update(bson.M{"clipperId":data.ClipperId},data)
  if err != nil {
    log.Fatal(err)
  }
  closeSession()
}

func  getSession() *mgo.Collection{
  session, err := mgo.Dial(configuration.Config().DBServer+":"+configuration.Config().DBPort)
          if err != nil {
                  panic(err)
          }
// Optional. Switch the session to a monotonic behavior.
  session.SetMode(mgo.Monotonic, true)
  return session.DB("clipper").C("payments")
}
func closeSession() {
  session.Close()
}
//TO BE DECIDED LATER
func (r Repository)genXid() {
    id := xid.New()
    fmt.Printf("github.com/rs/xid:   %s\n", id.String())
}
