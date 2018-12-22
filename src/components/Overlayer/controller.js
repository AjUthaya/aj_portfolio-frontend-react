/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-02
 *
 * FUNCTION: Toggle overlayer
 */
export const toggleOverlayer = function toggleOverlayer() {
  this.setState({
    overlayer: {
      ...this.state.overlayer,
      isActive: false
    }
  });
};

export default { toggleOverlayer };
