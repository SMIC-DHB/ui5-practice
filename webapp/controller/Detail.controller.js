sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
	function (Controller, UIComponent) {
		"use strict";

		return Controller.extend("sap.ui.ui5-practice.controller.Detail", {
			onInit: function () {
				let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter
					.getRoute("detail")
					.attachPatternMatched(this._onObjectMatched, this);
			},

			_onObjectMatched: function (oEvent) {
				this.getView().bindElement({
					path:
						"/" +
						window.decodeURIComponent(
							oEvent.getParameter("arguments").invoicePath
						),
					model: "invoice",
				});
			},
		});
	}
);