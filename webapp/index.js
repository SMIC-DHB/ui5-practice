// sap.ui.define(["require", "dependency"], function (require, factory) {
//   "use strict";

//   alert("UI5 is ready to go!");
// });

sap.ui.define(["sap/m/Text"], function (Text) {
  "use strict";


  new Text(
    {
      text: 'Hello UI5!'
    }
  ).placeAt("content");

  
});
