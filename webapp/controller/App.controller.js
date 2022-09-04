sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.ui5-practice.App", {
      onShowHello: function () {
        //show a native or vanilla Js alert
        MessageToast.show("Hello UI5 via Controller");
      },
    });
  }
);
