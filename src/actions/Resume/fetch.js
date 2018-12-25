// IMPORT: Axios
import axios from "axios";

// IMPORT: Config
import config from "../../local";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-21
 *
 * FUNCTION: Fetch resume
 */
export default function fetchResume() {
  // RETURN: Function
  return function(dispatch) {
    // DISPATCH: Fetch has started
    dispatch({ type: "FETCH_RESUME", payload: null });

    // DEFINE: Endpoint URL
    const resumeEndpoint = config.api.endpoints.resume;

    // GET: Resume data
    axios
      .get(resumeEndpoint)
      .then(res => {
        dispatch({ type: "FETCH_RESUME_FULFILLED", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "FETCH_RESUME_REJECTED", payload: err.response });
      });
  };
}
