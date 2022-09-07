sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.ui5-practice.App", {
		onOpenDialog: function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onOpenOtherDialog: function () {
			this.getOwnerComponent().openOtherDialog();
		},
	});
});
