provider "aws" {
  version = "~> 2.0"
  region  = "us-west-2"
}

module "dynamo" {
  source = "./dynamo"
}
