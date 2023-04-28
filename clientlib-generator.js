var clientlib = require("aem-clientlib-generator");
var path = require("path");
clientlib(
  [
    {
      categories:["adaptiveform.theme.canvas3"],
      name: "forms-clientlib-site",
      cssProcessor: ["default:none", "min:none"],
      jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
      allowProxy: true,
      customProperties: [
        "formsTheme"
      ],
      "formsTheme": "true",

      serializationFormat: "xml",

      assets: {
        resources:{
            base:"css/resources/images",
            files:["dist/**/*.svg","dist/**/*.gif","dist/**/*.png"]
        },
        js: [
          { src: "dist/theme.js", dest: "theme.js" },
          {
            src: "dist/theme.js.map",
            dest: "theme.js.map",
          },
        ],
        css: ["dist/theme.css", "dist/theme.css.map"],
      },
    }
  ],
  {
    cwd: __dirname,
    clientLibRoot: path.join(__dirname, "libs/fd/af/themes/corecomponents/canvas3-theme/clientlibs/"),
  },
  function () {
    console.log("clientlibs created");
  }
);