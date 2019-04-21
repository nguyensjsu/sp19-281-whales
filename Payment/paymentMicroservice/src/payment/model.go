package payment

import(
  "gopkg.in/mgo.v2/bson"
  "time"
)

type PaymentAccount struct {
    Id bson.ObjectId `bson:"_id,omitempty" json:"id"`
    ClipperId string `bson:"clipperId" json:"clipperId"`
    Balance float64 `bson:"balance" json:"balance"`
    funds float64 `json:"funds"`
    fare float64 `json:"fare"`
    DateCreated time.Time `bson:"dateCreated" json:"dateCreated"`
    PaymentMethods []PaymentMethod `bson:"paymentMethods" json:"paymentMethods"`

}

type PaymentMethod struct {
  Id bson.ObjectId `bson:"_id,omitempty" json:"id"`
  Type  string `bson:"type" json:"type"`
  CardNumber  string `bson:"cardNumber" json:"cardNumber"`
  ExpiryDate string `bson:"ExpiryDate" json:"expiryDate"`
  Name string `bson:"name" json:"name"`
  Cvv string `bson:"cvv" json:"cvv"`
}
