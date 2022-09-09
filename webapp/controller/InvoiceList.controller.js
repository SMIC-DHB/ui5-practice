sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
	],
	function (Controller, JSONModel, formatter, Filter, FilterOperator) {
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

			onFilterInvoices: function (oEvent) {
				// build filter array
				let aFilter = [];
				let sQuery = oEvent.getParameter("query");

				if (sQuery) {
					aFilter.push(
						new Filter("ProductName", FilterOperator.Contains, sQuery)
					);
				}

				//filter binding
				let oList = this.byId("invoiceList");
				let oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);

				//let dataInvoices = this.getView().getModel("invoices");
			},

			onLiveFilterInvoices: function (aEvent) {
				let aFilter = [];
				// let newQuery = newEvent.getParameter("query");
				let aQuery = aEvent.getSource().getValue();

				if (aQuery) {
					aFilter.push(
						new Filter("ProductName", FilterOperator.Contains, aQuery)
					);
				}

				//filter binding
				let aList = this.byId("invoiceList");
				let aBinding = aList.getBinding("items");
				aBinding.filter(aFilter);
			},

			// onSuggest: function (event) {
			// 	let aFilters2 = [];
			// 	var sValue = event.getParameter("suggestValue");
			// 	if (sValue) {
			// 		aFilters2 = [
			// 			new Filter(
			// 				[
			// 					new Filter("ProductName", function (sText) {
			// 						return (
			// 							(sText || "").toUpperCase().indexOf(sValue.toUpperCase()) >
			// 							-1
			// 						);
			// 					}),
			// 					// new Filter("Name", function (sDes) {
			// 					// 	return (
			// 					// 		(sDes || "").toUpperCase().indexOf(sValue.toUpperCase()) >
			// 					// 		-1
			// 					// 	);
			// 					// }),
			// 				],
			// 				false
			// 			),
			// 		];
			// 	}

			// 	console.log(sValue);
			// 	console.log(aFilters2);
			// 	let newList = this.byId("invoiceLIst");
			// 	let newBinding = newList.getBinding("items");
			// 	newBinding.filter(aFilters2);
			// 	newList.suggest(aFilters2);
			// 	// this.oSF.getBinding("invoiceList").filter(aFilters2);
			// 	// this.oSF.suggest();
			// },
		});
	}
);
