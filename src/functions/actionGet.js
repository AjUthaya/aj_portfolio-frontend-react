// IMPORT: Axios
import axios from "axios";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-27
 *
 * FUNCTION: To get data from an API endpoint
 */
export default function actionGet({ title = "", url = "", serverError = {} }) {
  return function(dispatch) {
    // DISPATCH: Fetch has started
    dispatch({ type: `FETCH_${title}`, payload: null });

    // GET: Data from endpoint
    axios
      .get(url + "?per_page=100")
      .then(res => {
        dispatch({ type: `FETCH_${title}_FULFILLED`, payload: res.data });
      })
      .catch(err => {
        // IF: Internal server error
        // ELSE: Error with response
        if (!err.response) {
          dispatch({
            type: `FETCH_${title}_REJECTED`,
            payload: { serverError: serverError, error: err }
          });
        } else {
          dispatch({
            type: `FETCH_${title}_REJECTED`,
            payload: err
          });
        }
      });
  };
}
