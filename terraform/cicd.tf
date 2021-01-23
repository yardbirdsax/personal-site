resource "aws_iam_policy" "cicd_policy" {
  name = "josh-site-cicd-policy"
  policy = <<EOT
{
  "Version":"2012-10-17",
  "Statement":[
    {
      "Effect":"Allow",
      "Action":[
        "s3:Get*",
        "s3:PutObject",
        "s3:Head*",
        "s3:DeleteObject",
        "s3:HeadBucket*"
      ],
      "Resource": [
        "${aws_s3_bucket.bucket.arn}/*"
      ]
    }
  ]
}
EOT
}

resource "aws_iam_group" "cicd_group" {
  name = "josh-site-cicd-group"
}

resource "aws_iam_group_policy_attachment" "cicd_group" {
  group = aws_iam_group.cicd_group.name
  policy_arn = aws_iam_policy.cicd_policy.arn
}

resource "aws_iam_user" "cicd_user" {
  name = "josh-site-cicd-user"
}

resource "aws_iam_group_membership" "cicd_group" {
  name = "josh-site-cicd-group-members"
  group = aws_iam_group.cicd_group.name
  users = [ aws_iam_user.cicd_user.name ]
}

resource "aws_iam_access_key" "cicd_user_key" {
  user = aws_iam_user.cicd_user.name
}

output aws_iam_access_key {
  value = aws_iam_access_key.cicd_user_key
}