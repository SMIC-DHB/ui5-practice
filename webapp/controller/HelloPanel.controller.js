sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (Controller, MessageToast, Fragment) {
		"use strict";
		return Controller.extend("sap.ui.ui5-practice.controller.HelloPanel", {
			onShowHello: function () {
				//read message from i18n model
				let oBundle = this.getView().getModel("i18n").getResourceBundle();
				let sRecipient = this.getView()
					.getModel("oData")
					.getProperty("/recipient/name");
				let sMsg = oBundle.getText("helloMsg", [sRecipient]);
				//show message
				MessageToast.show(sMsg);
				//show a native or vanilla Js alert
				// MessageToast.show("Hello UI5 via Controller");
			},

			onOpenDialog: function () {
				let oView = this.getView();

				//create a dialog simply
				if (!this.byId("helloDialog")) {
					//load async XML fragment
					Fragment.load({
						id: oView.getId(),
						name: "sap.ui.ui5-practice.fragment.HelloDialog",
					}).then(function (oDialog) {
						// connect the dialog to the root view of the component (models, lifecycle)
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					this.byId("helloDialog").open();
				}
			},
		});
	}
);
