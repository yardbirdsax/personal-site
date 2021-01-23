terraform {
  
  backend "s3" {
    bucket = "jef-remote-state"
    key    = "josh.feiermanfamily.com"
    region = "us-east-1"
  }
  
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>2.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}