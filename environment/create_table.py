
import boto3
DDB_RESOURCE = boto3.resource("dynamodb", region_name="us-east-1")

DDB_RESOURCE.create_table(
    TableName="lostcats",
    KeySchema=[
        {
            "AttributeName": "petname",
            "KeyType": "HASH"
        }
    ],
    AttributeDefinitions=[
        {
            "AttributeName": "petname",
            "AttributeType": "S"
        }
    ],
    ProvisionedThroughput={
        "ReadCapacityUnits": 1,
        "WriteCapacityUnits": 1
    }
)
