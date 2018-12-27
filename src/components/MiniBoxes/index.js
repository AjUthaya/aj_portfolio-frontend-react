// IMPORT: Redux
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
    skills: state.skills
  };
};

// CALL: Function to wrap everything together
const MiniBoxes = connect(mapStateToProps)(Template);

// EXPORT
export default MiniBoxes;
