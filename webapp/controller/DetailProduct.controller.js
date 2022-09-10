sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
	function (Controller, UIComponent) {
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
		});
	}
);
