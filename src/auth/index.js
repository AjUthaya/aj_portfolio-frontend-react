// IMPORT: Token validation
import Validate from "./validate";
import Generate from "./generate";

// IMPORT: Config
import config from "../local";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-23
 *
 * FUNCTION: Generate/Validate authentication token
 */
export default async function auth() {
  // GET: Token from local session
  let token = sessionStorage.getItem("token");

  // IF: Token is not empty
  if (token !== null) {
    // POST: Validate token
    const validatedToken = await Validate({ token, config });

    // RETURN: If token is valid
    if (validatedToken) {
      return validatedToken;
    }
  }

  // POST: Generate token
  token = await Generate({ config });
  // RETURN: Token

  return "";
}
