sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
	],
	function (Controller, JSONModel, formatter) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.InvoiceList", {
			formatter: formatter,
			onInit: function () {
				// let oViewModel = new JSONModel({
				// 	currency: "EUR",
				// });
				// this.getView().setModel(oViewModel, "view");
				this.getView().setModel(
					new JSONModel({
						currency: "EUR",
					}),
					"view"
				);
			},
		});
	}
);
