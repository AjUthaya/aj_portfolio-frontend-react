// IMPORT: Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// IMPORT: Template view file
import Template from "./template";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-11-21
 *
 * FUNCTION: Map data to view template
 */
const mapStateToProps = state => {
  return {
    test: state.settings
  };
};

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-11-21
 *
 * FUNCTION: Map actions to view template
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators({}, dispatch);
};

// CALL: Function to wrap everything together
const MiniBoxes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

// EXPORT
export default MiniBoxes;
