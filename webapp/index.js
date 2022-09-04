// sap.ui.define(["require", "dependency"], function (require, factory) {
//   "use strict";

//   alert("UI5 is ready to go!");
// });

// "this is define via Text"
// sap.ui.define(["sap/m/Text"], function (Text) {
//   "use strict";

//   new Text({
//     text: "Hello UI5!",
//   }).placeAt("content");
// });

sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName: "sap.ui.ui5-practice.view.App",
  }).then(function (oView) {
    oView.placeAt("content");
  });
});
