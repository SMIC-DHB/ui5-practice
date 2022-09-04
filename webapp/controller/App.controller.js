sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.ui5-practice.App", {
      onInit: function () {
        //set the data view on the view
        let oData = {
          recipient: {
            name: "UI5",
          },
        };
        let oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
      },
      onShowHello: function () {
        //show a native or vanilla Js alert
        MessageToast.show("Hello UI5 via Controller");
      },
    });
  }
);
