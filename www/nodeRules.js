var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "96e63019-b0eb-4ea7-a2b4-cf8fa97cf1f7",
		"relatedContextInformation": [
],
		"condition": function(R) {
			R.when(true);
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unitbe68ef81-b468-4fb5-a2e8-385d7580326a", null);
	}
			R.next();
		}
	},
	{
		"id": "198ec2eb-3d8d-4954-bb8f-1e760823cec2",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitbe68ef81-b468-4fb5-a2e8-385d7580326a")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit9230ce50-308a-4531-88e9-43b26f1d72ae", null);
	}
			R.next();
		}
	},
	{
		"id": "b88510db-f21b-4bf7-89b4-8413e573ff06",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit9230ce50-308a-4531-88e9-43b26f1d72ae")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unitbe68ef81-b468-4fb5-a2e8-385d7580326a", null);
	}
			R.next();
		}
	},
	{
		"id": "031073ad-0c89-49ea-b770-f0a724044a1d",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_USER_AGE", type: "INTEGER", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitbe68ef81-b468-4fb5-a2e8-385d7580326a")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_USER_AGE", type: "INTEGER", parameterList: []}), ">", "22")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit10ccc4db-c7d5-492e-b68d-689e1f68f61d", null);
	}
			R.next();
		}
	},
	{
		"id": "c2087037-2ef4-4123-9cf9-b157b7c93a7e",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_CURRENT_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unit10ccc4db-c7d5-492e-b68d-689e1f68f61d")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["preloadLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["preloadLearningUnitCallback"]("unitbe68ef81-b468-4fb5-a2e8-385d7580326a", null);
	}
			R.next();
		}
	}
];