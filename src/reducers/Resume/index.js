// DEFINE: Init state
const initState = {
  data: JSON.parse(localStorage.getItem("resume")) || [],
  isLoading: false,
  error: false,
  errorTitle: null,
  errorMessage: null,
  errorRes: null
};

// ##### RETURN #####
export default function reducer(state = initState, action) {
  switch (action.type) {
    // FETCH: Resume
    case "FETCH_RESUME": {
      state = {
        ...state,
        isLoading: true
      };
      break;
    }
    case "FETCH_RESUME_FULFILLED": {
      localStorage.setItem("resume", JSON.stringify(action.payload));

      state = {
        ...state,
        data: action.payload
      };
      break;
    }

    case "FETCH_RESUME_REJECTED": {
      state = {
        ...state,
        isLoading: false,
        error: true,
        errorTitle: action.payload.statusText,
        errorMessage: action.payload.data.message,
        errorRes: action.payload
      };
      break;
    }

    // FALLBACK
    default: {
    }
  }

  return state;
}
