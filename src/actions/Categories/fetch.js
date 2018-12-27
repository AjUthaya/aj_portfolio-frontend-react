// IMPORT: Config
import config from "../../local";

// IMPORT: Get endpoint data
import actionGet from "../../functions/actionGet";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-21
 *
 * FUNCTION: Fetch categories
 */
export default function fetchCategories() {
  // DEFINE: Config object to get data from endpoint
  const getConfig = {
    title: "CATEGORIES",
    url: config.api.endpoints.categories,
    serverError: config.api.serverError
  };

  return actionGet(getConfig);
}
