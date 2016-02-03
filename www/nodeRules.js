var _contactJS = require("contactJS");
var _d = new _contactJS.Discoverer();

var _rules = [
	{
		"id": "25567d57-4e05-4c34-89f6-243c3a62e766",
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
		"id": "f5a77f7e-e152-419c-b2d7-f34d7d31b71b",
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
		"id": "7f899206-501b-40aa-9a04-896473f78282",
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
		"id": "871a6fe5-441c-4fbb-b5bf-89022595e88c",
		"relatedContextInformation": [
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}),
_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_USER_LOCATION_COUNTRY", type: "STRING", parameterList: []}),
],
		"condition": function(R) {
			R.when((this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_FINISHED_LEARNING_UNIT", type: "STRING", parameterList: []}), "==", "unitbe68ef81-b468-4fb5-a2e8-385d7580326a")) && (this.fulfils(_contactJS.ContextInformation.fromContextInformationDescription(_d, {name: "CI_USER_LOCATION_COUNTRY", type: "STRING", parameterList: []}), "contains", "Deutsch")));
		},
		"consequence": function(R) {
			if (typeof window["ruleEngine"]._callbacks["selectLearningUnitCallback"] != "undefined") {
		window["ruleEngine"]._callbacks["selectLearningUnitCallback"]("unit10ccc4db-c7d5-492e-b68d-689e1f68f61d", null);
	}
			R.next();
		}
	},
	{
		"id": "ce8e2db3-58d8-4783-96f2-da1b04033161",
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