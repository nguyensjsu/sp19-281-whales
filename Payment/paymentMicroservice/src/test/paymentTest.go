package paymentTest

import (
  "testing"
  "github.com/stretchr/testify/assert"
  "encoding/json"
  "payment"
)

func TestBalanceToJSON(t *testing.T) {
  balance := payment.Repository.GetAccount()
  json,_ := json.Marshal(balance)
  assert.Equal(t,`{"Id":"1","UserId":"1","Balance":20}`, string(json),"marshalling wrong")
}
