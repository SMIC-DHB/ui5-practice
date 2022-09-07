sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/resource/ResourceModel",
		"./controller/HelloDialog",
		"./controller/OtherDialog",
	],
	function (UIComponent, JSONModel, ResourceModel, HelloDialog, OtherDialog) {
		"use strict";

		return UIComponent.extend("sap.ui.ui5-practice.Component", {
			metadata: {
				manifest: "json",
			},
			init: function () {
				//call the init function of the parent of SAP UI component
				UIComponent.prototype.init.apply(this, arguments);

				//set data models
				let oData = {
					recipient: {
						name: "UI5",
					},
				};

				this.setModel(new JSONModel(oData), "oData");

				// other models
				let newData = {
					object: "New Button",
				};
				this.setModel(new JSONModel(newData), "newModel");

				// set dialog by instantiating
				this._helloDialog = new HelloDialog(this.getRootControl());

				// set dialog by instantiating
				this._otherDialog = new OtherDialog(this.getRootControl());
			},

			//exit function outside of return
			//JS
			exit: function () {
				this._helloDialog.destroy();
				delete this._helloDialog;

				this._otherDialog.destroy();
				delete this._otherDialog;
			},
			//open function
			openHelloDialog: function () {
				this._helloDialog.open();
			},

			//open function
			openOtherDialog: function () {
				this._otherDialog.open();
			},
		});
	}
);
