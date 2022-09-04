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
      onInit: function () {
        let oData = {
          recipient: {
            name: "UI5",
          },
        };
        // let oModel = new JSONModel(oData, oData);
        // this.getView().setModel(oModel);
        this.getView().setModel(new JSONModel(oData), "oData");

        let newData = {
          object: "New Button",
        };
        this.getView().setModel(new JSONModel(newData), "newModel");
        //set i18n model on view
        let i18nModel = new ResourceModel({
          bundleName: "sap.ui.ui5-practice.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModel, "i18n");

        let i18nModelTest = new ResourceModel({
          bundleName: "sap.ui.ui5-practice.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.getView().setModel(i18nModelTest, "i18nTest");
      },
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
