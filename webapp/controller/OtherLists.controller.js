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
			onFilterProducts: function (oEvent) {
				// build filter array
				let aFilter = [];
				let sQuery = oEvent.getParameter("query");

				if (sQuery) {
					aFilter.push(
						new Filter("ProductName", FilterOperator.Contains, sQuery)
					);
				}

				//filter binding
				let oList = this.byId("productList");
				let oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);

				//let dataInvoices = this.getView().getModel("invoices");
			},

			onLiveFilterOther: function (aEvent) {
				let aFilter = [];
				// let newQuery = newEvent.getParameter("query");
				let aQuery = aEvent.getSource().getValue();

				if (aQuery) {
					aFilter.push(
						new Filter("ProductName", FilterOperator.Contains, aQuery)
					);
				}

				//filter binding
				let aList = this.byId("productList");
				let aBinding = aList.getBinding("items");
				aBinding.filter(aFilter);
			},

			onNavigate: function (oEvent) {
				let oItem = oEvent.getSource();
				let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("product", {
					productPath: window.encodeURIComponent(
						oItem.getBindingContext("product").getPath().substr(1)
					),
				});
			},
		});
	}
);
