package payment


type PaymentAccount struct {
    Id string `json:"id"`
    ClipperId string `json:"clipperId"`
    Balance float64 `json:"balance"`
    Funds float64 `json:"funds"`
    Fare float64 `json:"fare"`
    DateCreated string `json:"dateCreated"`
    PaymentMethods PaymentMethod `json:"paymentMethods"`

}

type PaymentMethod struct {
  Id string `json:"id"`
  Type  string `json:"paymentMethod"`
  CardNumber  string `json:"cardNumber"`
  ExpiryDate string `json:"expiry"`
  Name string `json:"name"`
  Cvv string `json:"cvv"`
}
