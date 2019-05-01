package main

type User struct {
	Id        string   `json:"id,omitempty"`
	Firstname string   `json:"firstname,omitempty"`
	Lastname  string   `json:"lastname,omitempty"`
	Phone   string    `json:"phone,omitempty"` 
	Address   *Address `json:"address,omitempty"`
	Email   string `json:"email,omitempty"`
	Password   string `json:"password,omitempty"`
	Username string `json:"username,omitempty"`
	Clipperflag string `json:"clipperflag,omitempty"`
	Clipperid string `json:"clipperid,omitempty"`

}

type Address struct {
	Street string `json:"street,omitempty"`
	City  string `json:"city,omitempty"`
	State string `json:"state,omitempty"`
	Zipcode string `json:"zipcode,omitempty:`
}