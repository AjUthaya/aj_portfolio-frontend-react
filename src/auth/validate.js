// IMPORT: Axios
import axios from "axios";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-23
 *
 * FUNCTION: Validate token
 */
export default function validate({ token, config }) {
  return new Promise((resolve, reject) => {
    // 1. DEFINE: Validation endpoint
    const validationEndpoint = config.api.endpoints.validateToken;

    // 2. POST: Validation request
    axios
      .post(
        validationEndpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(function(res) {
        resolve(token);
      })
      .catch(function(error) {
        resolve(null);
      });
  });
}
