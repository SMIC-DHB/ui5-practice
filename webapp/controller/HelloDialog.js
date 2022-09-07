sap.ui.define(
	["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
	function (ManagedObject, Fragment) {
		"use strict";

		return ManagedObject.extend("sap.ui.ui5-practice.controller.HelloDialog", {
			constructor: function (oView) {
				this._oView = oView;
			},

			exit: function () {
				delete this._oView;
			},

			open: function () {
				let oView = this._oView;

				//create the dialog lazily
				if (!oView.byId("helloDialog")) {
					let oFragmentController = {
						onCloseDialog: function () {
							oView.byId("helloDialog").close();
						},
					};
					// load async XML fragment
					Fragment.load({
						id: oView.getId(),
						name: "sap.ui.ui5-practice.Fragment.HelloDialog",
						controller: oFragmentController,
					}).then(function (oDialog) {
						//connect dialog to root view of the component (model, lifecycle)
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					oView.byId("helloDialog").open();
				}
			},
		});
	}
);
