// IMPORT: Redux
import { combineReducers } from "redux";

// IMPORT: Resume
import resume from "./Resume/index";
// IMPORT: Skills
import skills from "./Skills/index";
// IMPORT: Projects
import projects from "./Projects/index";
// IMPORT: Projects
import categories from "./Categories/index";

// EXPORT: Object
export default combineReducers({
  resume,
  skills,
  projects,
  categories
});
