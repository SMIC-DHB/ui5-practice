sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
	function (Controller, MessageToast) {
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
		});
	}
);
