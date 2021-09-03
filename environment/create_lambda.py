#
#	Copyright @2019 [Amazon Web Services] [AWS]
#
#	Licensed under the Apache License, Version 2.0 (the "License");
#	you may not use this file except in compliance with the License.
#	You may obtain a copy of the License at
#
#	    http://www.apache.org/licenses/LICENSE-2.0
#
#	Unless required by applicable law or agreed to in writing, software
#	distributed under the License is distributed on an "AS IS" BASIS,
#	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#	See the License for the specific language governing permissions and
#	limitations under the License.
#
'''

SOLUTION

This solution requires that you replace one
Fill Me In (FMI) with the role ARN provided in the Qwiklabs console
and the other FMI with your bucket name.

'''

import boto3

LAMBDA_CLIENT = boto3.client("lambda")

result = LAMBDA_CLIENT.create_function(
    Code={"S3Bucket": "c25720a329984l591425t1w792912479461-s3bucket-1my9vpcu3b00q","S3Key": "website_api_code.zip"},
    Description="Amazing website",
    FunctionName="DIYSearch",
    Handler="query_data.handler",
    MemorySize=128,
    Publish=True,
    Role="arn:aws:iam::792912479461:role/cat-search-role-for-lambda",
   	Runtime="python3.6",
   	Timeout=30
)
print(result)
