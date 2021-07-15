const withImages = require("next-images");
const path = require('path');

module.exports = withImages({
  esModule: true,
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  inlineImageLimit: false,
  images:{
    domains: ['/public/']
  },
  target: "serverless"
});