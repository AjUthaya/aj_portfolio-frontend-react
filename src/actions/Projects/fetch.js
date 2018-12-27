// IMPORT: Config
import config from "../../local";

// IMPORT: Get endpoint data
import actionGet from "../../functions/actionGet";

/**
 * @author  Aj
 * @version 1.0
 * @since   2018-12-21
 *
 * FUNCTION: Fetch skills
 */
export default function fetchProjects() {
  // DEFINE: Config object to get data from endpoint
  const getConfig = {
    title: "PROJECTS",
    url: config.api.endpoints.projects,
    serverError: config.api.serverError
  };

  return actionGet(getConfig);
}
