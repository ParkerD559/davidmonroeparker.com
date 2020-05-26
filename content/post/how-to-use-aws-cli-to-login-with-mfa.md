---
title: "How to Use AWS CLI to Login With MFA"
date: 2020-05-24T10:17:39-07:00
categories:
- development
tags:
- aws
- shell
keywords:
- aws
- mfa
- cli
#thumbnailImage: //example.com/image.jpg
---

Logging into AWS using MFA only requires a very simple script.

<!--more-->
If you have setup multi-factor authenication on your AWS account, you'll find yourself running into an issue using the aws cli:

```
$ aws <some command>

An error occurred (AccessDenied) when calling ...
```

This is because your credentials are no longer enough. You now need to authenticate differently, specifically via your MFA device. The command used to create an authenticated session is `aws sts get-session-token`. Passing the `--serial-number` (MFA device arn) and `--token-code` (MFA code) arguments will return a JSON object containing your new session information. It looks like this:

```
{
    "Credentials": {
        "AccessKeyId": "<key id>",
        "SecretAccessKey": "<secret key>",
        "SessionToken": "<session token>",
        "Expiration": "<ISO 8601 utc datetime>"
    }
}
```

The simplest way to use these credentials is to copy/paste their values into `aws configure set` to update the `default` profile credentials. But that's tedious! So let's make a script.

Luckily there is a useful tool called [`jq`](https://stedolan.github.io/jq/download/) that can make parsing the JSON here very easy, and with it the script is very simple:

{{< gist dparker2 3887b0427e53247ed50b3f941553caad >}}

To use, first replace the `DEVICE` variable with your MFA device arn and then call it with your MFA code:

```
$ ./configure-aws-mfa.sh <mfa code>
```

Then do whatever `aws` things you want! Until your session has expired, then just call the script again to start a new session.
