sap.ui.define(
	["sap/ui/core/util/MockServer", "sap/base/util/UriParameters"],
	function (MockServer, UriParameters) {
		"use strict";

		return {
			init: function () {
				//create mockserver

				let oMockServer = new MockServer({
					// rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/",
					rootUri: "test.json",
				});

				//create URI Parameters
				let oUriParameters = new UriParameters(window.location.href);

				// configure mock server with a delay

				MockServer.config({
					autoRespond: true,
					autoRespondAfter: oUriParameters.get("serverDelay") || 500,
				});

				//simulate
				let sPath = "../localService";
				oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

				// start
				oMockServer.start();
			},
		};
	}
);
