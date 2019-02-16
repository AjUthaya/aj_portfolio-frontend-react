// IMPORT: General tests
const network = require("../integration-sub/general/network.spec.ts"),
  document = require("../integration-sub/general/document.spec.ts");

// IMPORT: Global tests
const navigation = require("../integration-sub/global/navigation.spec.ts");

// IMPORT: Frontpage tests
const data = require("../integration-sub/frontpage/data.spec.ts"),
  intro = require("../integration-sub/frontpage/intro.spec.ts"),
  resume = require("../integration-sub/frontpage/resume.spec.ts"),
  skills = require("../integration-sub/frontpage/skills.spec.ts"),
  projects = require("../integration-sub/frontpage/projects.spec.ts");

describe("General", () => {
  network();
  document();
});

describe("Global", () => {
  navigation();
});

describe("Frontpage", () => {
  data();
  intro();
  resume();
  skills();
  projects();
});
