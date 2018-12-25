// DEFINE: Init state
const initState = {
  data: JSON.parse(localStorage.getItem("skills")) || [],
  isLoading: false,
  error: false,
  errorTitle: null,
  errorMessage: null,
  errorRes: null
};

// ##### RETURN #####
export default function reducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_SKILLS": {
      state = {
        ...state,
        isLoading: true
      };
      break;
    }
    case "FETCH_SKILLS_FULFILLED": {
      localStorage.setItem("skills", JSON.stringify(action.payload));

      state = {
        ...state,
        isLoading: false,
        data: action.payload
      };
      break;
    }

    case "FETCH_SKILLS_REJECTED": {
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
