// IMPORT: Axios
import axios from "axios";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-23
 *
 * FUNCTION: Generate token
 */
export default function generate({ config }) {
  return new Promise((resolve, reject) => {
    // 1. DEFINE: Validation endpoint
    const generateEndpoint = config.api.endpoints.generateToken,
      apiUsername = config.api.username,
      apiPassword = config.api.password;

    // 2. POST: Validation request
    axios
      .post(
        generateEndpoint,
        {
          username: apiUsername,
          password: apiPassword
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(function(res) {
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        resolve(token);
      })
      .catch(function(error) {
        resolve(null);
      });
  });
}
