/*
	Copyright @2019 [Amazon Web Services] [AWS]

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
var
    AWS = require("aws-sdk"),
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-1"
    }),
    DIY_DATA_ARR = require("./diy_data.json");

function addNewItemsFromJSON(){
	console.log("All items now removed, re-seeding now");
	var 
		diy = {},
		diy_formatted_arr = [],
		params = {};


	for(var i_int = 0; i_int < DIY_DATA_ARR.length; i_int += 1){
		diy = {
	    	PutRequest: {
	    		Item: {
	    			petname: {
	    				"S": DIY_DATA_ARR[i_int].petname_str
	    			},
	    			breed: {
	    				"S": DIY_DATA_ARR[i_int].breed_str
	    			},
	    			creator: {
	    				"S": DIY_DATA_ARR[i_int].creator
	    			},
	    			data_uploaded: {
	    				"S": DIY_DATA_ARR[i_int].date_uploaded
	    			},
	    			notable_features: {
	    				"S": DIY_DATA_ARR[i_int].notable_features_str
	    			}
	    		}
	    	}
	    };
	    diy_formatted_arr.push(diy);
	}
	params = {
		RequestItems: {
			"lostcats": diy_formatted_arr.reverse()
		}
	};
	DDB.batchWriteItem(params, function(err, data){   
		if(err){
			throw err;
		}
		console.log("OK");         
	});
}

(function init(){
	addNewItemsFromJSON();
})();