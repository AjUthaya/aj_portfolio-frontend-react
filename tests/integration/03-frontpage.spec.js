// IMPORT: Frontpage tests
const data = require("../integration-sub/frontpage/data.spec.ts"),
  intro = require("../integration-sub/frontpage/intro.spec.ts"),
  resume = require("../integration-sub/frontpage/resume.spec.ts"),
  skills = require("../integration-sub/frontpage/skills.spec.ts"),
  projects = require("../integration-sub/frontpage/projects.spec.ts");

describe("Frontpage", () => {
  data();
  intro();
  resume();
  skills();
  projects();
});
