sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.ui5-practice.App", {
      onShowHello: function () {
        //read message from i18n model
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient = this.getView()
          .getModel("oData")
          .getProperty("/recipient/name");
        let sMsg = oBundle.getText("helloMsg", [sRecipient]);
        //show message
        MessageToast.show(sMsg);
        //show a native or vanilla Js alert
        // MessageToast.show("Hello UI5 via Controller");
      },
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
