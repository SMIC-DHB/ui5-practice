sap.ui.define(
	["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],
	function (ManagedObject, Fragment) {
		"use strict";

		return ManagedObject.extend("sap.ui.ui5-practice.controller.OtherDialog", {
			constructor: function (oView) {
				this._oView = oView;
			},

			exit: function () {
				delete this._oView;
			},

			open: function () {
				let oView = this._oView;

				//create the dialog lazily
				if (!oView.byId("helloOtherDialog")) {
					let oFragmentController = {
						onCloseDialog: function () {
							oView.byId("helloOtherDialog").close();
						},
					};
					// load async XML fragment
					Fragment.load({
						id: oView.getId(),
						name: "sap.ui.ui5-practice.Fragment.OtherDialog",
						controller: oFragmentController,
					}).then(function (otherDialog) {
						//connect dialog to root view of the component (model, lifecycle)
						oView.addDependent(otherDialog);
						otherDialog.open();
					});
				} else {
					oView.byId("helloOtherDialog").open();
				}
			},
		});
	}
);
