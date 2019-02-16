// IMPORT: General tests
const network = require("../integration-sub/general/network.spec.ts"),
  document = require("../integration-sub/general/document.spec.ts");

describe("General", () => {
  network();
  document();
});
