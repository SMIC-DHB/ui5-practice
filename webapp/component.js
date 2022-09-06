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
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
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

        // other models
        let newData = {
          object: "New Button",
        };
        this.setModel(new JSONModel(newData), "newModel");
      },
    });
  }
);
