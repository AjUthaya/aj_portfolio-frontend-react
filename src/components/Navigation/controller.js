/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-21
 *
 * FUNCTION: Toggle navigation
 */
export const toggleNavigation = function toggleNavigation() {
  // DEFINE: Working values
  let navigationIsActive = this.state.navigation.isActive;
  let overlayerIsActive = this.state.overlayer.isActive;

  // IF: Navigation is not active
  // ELSE: Navigation is active
  if (!navigationIsActive) {
    // STATE: Set navigation to active
    this.setState({
      navigation: {
        ...this.state.navigation,
        isActive: true
      }
    });

    // IF: Overlayer is not active, enable it
    if (!overlayerIsActive) {
      this.setState({
        overlayer: {
          ...this.state.overlayer,
          isActive: true
        }
      });
    }
  } else {
    // STATE: Disable navigation
    this.setState({
      navigation: {
        ...this.state.navigation,
        isActive: false
      }
    });

    // IF: Overlayer is active, disable it
    if (overlayerIsActive) {
      this.setState({
        overlayer: {
          ...this.state.overlayer,
          isActive: false
        }
      });
    }
  }
};

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-22
 *
 * FUNCTION: Handle nagvigation item
 */
export const handleNavigationLink = function handleNavigationLink(ref = false) {
  if (ref) {
    document
      .getElementById(ref)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

export default { toggleNavigation, handleNavigationLink };
