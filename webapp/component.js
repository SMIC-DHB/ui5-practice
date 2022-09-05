sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.ui5-practice.Component", {
      metadata: {
        rootView: {
          viewName: "sap.ui.ui5-practice.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
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

        //set i18n model
        let i18nModel = new ResourceModel({
          bundleName: "sap.ui.ui5-practice.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.setModel(i18nModel, "i18n");

        //other models
        let newData = {
          object: "New Button",
        };
        this.setModel(new JSONModel(newData), "newModel");

        let i18nModelTest = new ResourceModel({
          bundleName: "sap.ui.ui5-practice.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });
        this.setModel(i18nModelTest, "i18nTest");
      },
    });
  }
);
