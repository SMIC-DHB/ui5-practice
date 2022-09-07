sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.InvoiceList", {
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
