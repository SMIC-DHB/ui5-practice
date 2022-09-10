sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/ui/core/UIComponent",
		"sap/ui/core/routing/History",
		"sap/m/MessageToast",
		"sap/m/Dialog",
		"sap/m/library",
		"sap/m/Text",
		"sap/ui/core/library",
		"sap/m/Button",
	],
	function (
		Controller,
		UIComponent,
		History,
		MessageToast,
		Dialog,
		mobileLibrary,
		Text,
		coreLibrary,
		Button
	) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.DetailProduct", {
			onInit: function () {
				let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter
					.getRoute("product")
					.attachPatternMatched(this._onObjectMatched, this);
			},

			_onObjectMatched: function (oEvent) {
				this.byId("rating").reset();
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
				this.oSuccessMessageDialog = null;
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
				MessageToast.show(
					this.getView()
						.getModel("i18n")
						.getResourceBundle()
						.getText("ratingConfirmation", [oEvent.getParameter("value")])
				);

				let oMessage = this.getView()
					.getModel("i18n")
					.getResourceBundle()
					.getText("ratingConfirmation", [oEvent.getParameter("value")]);

				// dialog message
				// this.oSuccessMessageDialog = null;
				//declare classes to used from sap library
				let DialogType = mobileLibrary.DialogType;
				let ValueState = coreLibrary.ValueState;
				let ButtonType = mobileLibrary.ButtonType;

				let rateValue = oEvent.getParameter("value");

				let state = " ";
				if (rateValue >= 3) {
					state = "Success";
				} else if (rateValue == 2) {
					state = "Warning";
				} else {
					state = "Error";
				}

				if (!this.oSuccessMessageDialog) {
					this.oSuccessMessageDialog = new Dialog({
						type: DialogType.Message,
						title: state,
						// state: ValueState.Success,
						state: state,
						content: new Text({
							text: oMessage,
						}),
						beginButton: new Button({
							type: ButtonType.Emphasized,
							text: "OK",
							press: function () {
								this.oSuccessMessageDialog.close();
							}.bind(this),
						}),
					});
				}

				this.oSuccessMessageDialog.open();
			},
		});
	}
);
