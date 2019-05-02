package payment
import (
  "github.com/rs/xid"
  "gopkg.in/mgo.v2"
  "gopkg.in/mgo.v2/bson"
  "log"
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

func (r Repository) updateAccount(data PaymentAccount){
  c := getSession()
  err := c.Update(bson.M{"clipperId":data.ClipperId},data)
  if err != nil {
    log.Fatal(err)
  }
  closeSession()
}

func  getSession() *mgo.Collection{
  var url string
  if configuration.Configs.DBServer == "" {
    url = configuration.Config().DBUrl
  } else{
    url = configuration.Configs.DBServer
  }
  log.Println(url)
  session, err := mgo.Dial(url)
          if err != nil {
                  panic(err)
          }
// Optional. Switch the session to a monotonic behavior.
  session.SetMode(mgo.Monotonic, true)
  return session.DB(configuration.Config().DBName).C(configuration.Config().Collection)
}
func closeSession() {
  session.Close()
}
//TO BE DECIDED LATER
func (r Repository)genXid() {
    id := xid.New()
    log.Printf("github.com/rs/xid:   %s\n", id.String())
}
