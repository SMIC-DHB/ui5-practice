sap.ui.define([], function () {
	"use strict";
	return {
		statusState: function (sStatus) {
			let resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("Error");
				case "B":
					return resourceBundle.getText("Success");
				case "C":
					return resourceBundle.getText("Success");
				default:
					return sStatus;
			}
		},
	};
});
