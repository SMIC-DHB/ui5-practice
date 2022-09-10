sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent",
		"sap/ui/core/routing/History",
		"sap/m/MessageToast",
	],
	function (Controller, UIComponent, History, MessageToast) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.DetailProduct", {
			onInit: function () {
				let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter
					.getRoute("product")
					.attachPatternMatched(this._onObjectMatched, this);
			},

			_onObjectMatched: function (oEvent) {
				this.getView().bindElement({
					path:
						"/" +
						window.decodeURIComponent(
							oEvent.getParameter("arguments").productPath
						),
					model: "product",
				});
			},

			onNavBack: function (oEvent) {
				let oHistory = History.getInstance();
				let sPreviousHash = oHistory.getPreviousHash();

				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					let oRouter = UIComponent.getRouterFor(this);
					oRouter.navTo("overview", {}, true);
				}
			},

			onRatingChange: function (oEvent) {
				let fValue = oEvent.getParameter("value");
				MessageToast.show(
					this.getView()
						.getModel("i18n")
						.getResourceBundle()
						.getText("ratingConfirmation", [fValue])
				);
			},
		});
	}
);
