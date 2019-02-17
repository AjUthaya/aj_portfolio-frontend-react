// IMPORT: Frontpage tests
const api = require("../integration-sub/frontpage/api.spec.ts"),
  intro = require("../integration-sub/frontpage/intro.spec.ts"),
  resume = require("../integration-sub/frontpage/resume.spec.ts"),
  skills = require("../integration-sub/frontpage/skills.spec.ts"),
  projects = require("../integration-sub/frontpage/projects.spec.ts");

describe("Frontpage", () => {
  /*
  api();
  intro();
  resume();
  skills();
  */

  projects();
});
