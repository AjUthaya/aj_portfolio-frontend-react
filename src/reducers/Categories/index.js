// DEFINE: Init state
const initState = {
  data: JSON.parse(localStorage.getItem("categories")) || [],
  isLoading: false,
  error: false,
  errorTitle: "",
  errorMessage: "",
  errorRes: {}
};

// ##### RETURN #####
export default function reducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES": {
      state = {
        ...state,
        isLoading: true
      };
      break;
    }
    case "FETCH_CATEGORIES_FULFILLED": {
      localStorage.setItem("categories", JSON.stringify(action.payload));

      state = {
        ...state,
        isLoading: false,
        data: action.payload
      };
      break;
    }

    case "FETCH_CATEGORIES_REJECTED": {
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
          errorRes: err.error
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
