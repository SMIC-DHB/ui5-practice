sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.OtherLists", {
			onInit: function () {
				// this.getView().setModel(
				// 	new JSONModel({
				// 		currency: "EUR",
				// 	}),
				// 	"view"
				// );
				// let oData = this.getView()
				// 	.getModel("product")
				// 	.getProperty("/Products/Currency");
				// console.log(oData);
			},
		});
	}
);
