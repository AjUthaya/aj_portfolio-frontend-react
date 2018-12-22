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
    // DISPATCH: Send data to redux store
    dispatch({ type: "FETCH_RESUME", payload: null });
  };
}
