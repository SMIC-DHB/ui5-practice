/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(
		["sap/ui/ui5-practice/test/integration/NavigationJourney"],
		function () {
			QUnit.start();
		}
	);
});
