// IMPORT: Axios
import axios from "axios";

// IMPORT: Config
import config from "../../local";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-25
 *
 * FUNCTION: Fetch skills
 */
export default function fetchSkills() {
  return function(dispatch) {
    // DISPATCH: Fetch has started
    dispatch({ type: "FETCH_SKILLS", payload: null });

    // DEFINE: Endpoint URL
    const skillsEndpoint = config.api.endpoints.skills;

    // GET: Resume data
    axios
      .get(skillsEndpoint)
      .then(res => {
        dispatch({ type: "FETCH_SKILLS_FULFILLED", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_SKILLS_REJECTED", payload: err.response });
      });
  };
}
