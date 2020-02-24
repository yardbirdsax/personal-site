variable "bucketName" {
  type = string
}

variable "logBucketName" {
  type = string
}

provider "aws" {
  version = "~> 2.0"
  region = "us-east-1"
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucketName
  acl = "public-read"

  website {
      index_document = "index.html"
  }

  logging {
    target_bucket = var.logBucketName
    target_prefix = "${var.bucketName}/"
  }
}

data "aws_iam_policy_document" "bucketPolicyDocument" {
  statement {
    actions = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.bucket.arn}/*"]
    principals {
      type = "*"
      identifiers = ["*"]
    }
    effect = "Allow"
  }
}

resource "aws_s3_bucket_policy" "bucketPolicy" {
  bucket = aws_s3_bucket.bucket.id
  policy = "${data.aws_iam_policy_document.bucketPolicyDocument.json}"
}


output "bucket_domain_name" {
  value = "${aws_s3_bucket.bucket.bucket_domain_name}"
}

output "website_domain" {
  value = "${aws_s3_bucket.bucket.website_domain}"
}

output "website_endpoint" {
  value = "${aws_s3_bucket.bucket.website_endpoint}"
}


