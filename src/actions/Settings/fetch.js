/**
 * @author  Aj
 * @version 1.0
 * @since   2018-11-20
 *
 * FUNCTION: Fetch x from x
 */
export default function fetchSettings() {
  // RETURN: Function
  return function(dispatch) {
    // DISPATCH: Send data to redux store
    dispatch({ type: "FETCH_SETTINGS", payload: null });
  };
}
