// IMPORT: Axios
import axios from "axios";

// IMPORT: Config
import config from "../../local";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-25
 *
 * FUNCTION: Fetch projects
 */
export default function fetchProjects() {
  return function(dispatch) {
    // DISPATCH: Fetch has started
    dispatch({ type: "FETCH_PROJECTS", payload: null });

    // DEFINE: Endpoint URL
    const projectsEndpoint = config.api.endpoints.projects;

    // GET: Resume data
    axios
      .get(projectsEndpoint)
      .then(res => {
        dispatch({ type: "FETCH_PROJECTS_FULFILLED", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_PROJECTS_REJECTED", payload: err.response });
      });
  };
}
