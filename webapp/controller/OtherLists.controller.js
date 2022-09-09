sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
	],
	function (Controller, JSONModel, formatter) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.OtherLists", {
			formatter: formatter,
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
				this.getView().setModel(
					new JSONModel({
						currency: "USD",
					}),
					"localDefault"
				);
			},
		});
	}
);
