var clientlib = require("aem-clientlib-generator");
var path = require("path");
var process = require("process");


const CLIENTLIB_DIR = process.env.npm_config_directory || "libs/fd/af/themes/corecomponents/canvas3-theme/clientlibs/"
const CLIENTLIB_CATEGORY = process.env.npm_config_category || "adaptiveform.theme.canvas3"


clientlib(
  [
    {
      categories: [CLIENTLIB_CATEGORY],
      name: "forms-clientlib-site",
      cssProcessor: ["default:none", "min:none"],
      jsProcessor: ["default:none", "min:gcc;compilationLevel=whitespace"],
      allowProxy: true,
      customProperties: [
        "formsTheme"
      ],
      formsTheme: "true",
      serializationFormat: "xml",
      assets: {
        resources: {
          base: "css/resources/images",
          files: ["dist/**/*.svg", "dist/**/*.gif", "dist/**/*.png"]
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
    clientLibRoot: path.join(__dirname, CLIENTLIB_DIR),
  },
  function () {
    console.log("clientlibs created");
  }
);