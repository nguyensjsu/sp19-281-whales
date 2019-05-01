/*
	E-clipper users API
	Port mapping and initiate the user services
*/

package main

import (
	"os"
)


func main() {

	//session := common.GetMongoSession()
    //defer session.Close()

	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = "8000"
	}

	server := MenuServer()
	server.Run(":" + port)
}