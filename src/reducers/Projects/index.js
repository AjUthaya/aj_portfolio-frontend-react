// DEFINE: Init state
const initState = {
  data: [],
  isLoading: false,
  error: false,
  errorTitle: null,
  errorMessage: null,
  errorRes: null
};

// ##### RETURN #####
export default function reducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_PROJECTS": {
      state = {
        ...state,
        isLoading: true
      };
      break;
    }
    case "FETCH_PROJECTS_FULFILLED": {
      localStorage.setItem("projects", JSON.stringify(action.payload));

      state = {
        ...state,
        isLoading: false,
        data: action.payload
      };
      break;
    }

    case "FETCH_PROJECTS_REJECTED": {
      // DEFINE: Error object
      const err = action.payload;

      // IF: Internal server error
      // ELSE: Error with response
      if (!err.response) {
        state = {
          ...state,
          isLoading: false,
          error: true,
          errorTitle: err.serverError.title,
          errorMessage: err.serverError.message,
          errorRes: err.serverError
        };
      } else {
        state = {
          ...state,
          isLoading: false,
          error: true,
          errorTitle: err.response.statusText,
          errorMessage: err.response.data.message,
          errorRes: err.response
        };
      }

      break;
    }

    // FALLBACK
    default: {
    }
  }

  return state;
}
