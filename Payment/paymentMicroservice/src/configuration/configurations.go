package configuration

import(
    "github.com/tkanos/gonfig"
)

type Configuration struct {
  ServerPort string
  BaseUrl string
  Server1 string
  Server2 string
  Server3 string
  DBUrl string
  DBUser string
  DBPwd string
  ReadPreference string
  DBName string
  ReplicaSet string
  AuthSource string
  Collection string
}

var Configs = Configuration{}
// project  Default configurations
func Config() Configuration {
  var configurations Configuration
  err := gonfig.GetConf("config.json", &configurations)
  if err != nil {
    panic(err)
  }
  return configurations
}
