// DEFINE: Init state
const initState = {
  data: [],
  isLoading: false,
  error: false,
  errorMessage: null
};

// ##### RETURN #####
export default function reducer(state = initState, action) {
  switch (action.type) {
    // FETCH SETTINGS
    case "FETCH_SETTINGS": {
      state = {
        ...state,
        data: ["test"]
      };
      break;
    }

    // FALLBACK
    default: {
    }
  }

  return state;
}
