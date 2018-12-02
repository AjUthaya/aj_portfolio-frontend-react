/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-02
 *
 * FUNCTION: Toggle overlayer off onClick
 */
export const toggleOverlayer = function toggleOverlayer() {
  // DEFINE: Create a dulicate state
  this.setState({
    overlayer: {
      ...this.state.overlayer,
      isActive: true
    }
  });
};

export default { toggleOverlayer };
