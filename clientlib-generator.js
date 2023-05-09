var clientlib = require("aem-clientlib-generator");
var path = require("path");
var process = require("process");


const CLIENTLIB_DIR = process.env.npm_config_directory || "theme-clientlibs"
const CLIENTLIB_CATEGORY = process.env.npm_config_category

if(!CLIENTLIB_CATEGORY){
  throw 'category parameter should be present'
}
clientlib(
  [
    {
      categories: [CLIENTLIB_CATEGORY],
      name: CLIENTLIB_CATEGORY,
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