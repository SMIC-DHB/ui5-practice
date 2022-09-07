sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
	function (Controller, MessageToast, Fragment) {
		"use strict";
		return Controller.extend("sap.ui.ui5-practice.controller.OtherPanel", {
			onShowHello2: function () {
				//read message from i18n model
				let oBundleTest = this.getView()
					.getModel("i18nTest")
					.getResourceBundle();
				let sRecipientTest = this.getView()
					.getModel("newModel")
					.getProperty("/object");
				let sMsgTest = oBundleTest.getText("helloMsg", [sRecipientTest]);
				//show message
				MessageToast.show(sMsgTest);
			},

			onOtherOpenDialog: function () {
				this.getOwnerComponent().openOtherDialog();
				// let oView = this.getView();

				//create a dialog simply
				// 	if (!this.byId("helloOtherDialog")) {
				// 		//load async XML fragment
				// 		Fragment.load({
				// 			id: oView.getId(),
				// 			name: "sap.ui.ui5-practice.Fragment.OtherDialog",
				// 			controller: this,
				// 		}).then(function (otherDialog) {
				// 			// connect the dialog to the root view of the component (models, lifecycle)
				// 			oView.addDependent(otherDialog);
				// 			otherDialog.open();
				// 		});
				// 	} else {
				// 		this.byId("helloOtherDialog").open();
				// 	}
				// },

				// onCloseDialog: function () {
				// 	this.byId("helloOtherDialog").close();
			},
		});
	}
);
