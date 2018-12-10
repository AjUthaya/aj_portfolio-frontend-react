/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-02
 *
 * FUNCTION: Example controller
 */
export const controller = function controller() {
  // DEFINE: Create a dulicate state
  this.setState({
    projects: {
      ...this.state.projects,
      isActive: true
    }
  });
};

export default { controller };
