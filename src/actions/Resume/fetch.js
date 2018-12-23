// IMPORT: Axios
import axios from "axios";

// IMPORT: Config
import Config from "../../local";

console.log(Config);

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
    /*
    axios
      .get(config.endpoint + "tree")
      .then(res => dispatch(receiveTreeData(res.data)))
      .catch(err => dispatch(treeRequestFailed(err)));
      */

    // DISPATCH: Send data to redux store
    dispatch({ type: "FETCH_RESUME", payload: null });
  };
}
