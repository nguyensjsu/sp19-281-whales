package configuration

import(
    "github.com/tkanos/gonfig"
)

type Configuration struct {
  ServerPort string
  DBServer string
  DBPort string
}

var configuration Configuration // project configurations

func Config() Configuration {
  err := gonfig.GetConf("config.json", &configuration)
  if err != nil {
    panic(err)
  }
  return configuration
}
