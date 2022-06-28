const lotrReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "GET_BOOKS":
      return {
        ...state,
        allbooks: action.payload,
      };
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    case "GET_CHARACTER":
      return {
        ...state,
        character: action.payload,
      };
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "GET_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };
    case "SET_QOUTE":
      return {
        ...state,
        quote: action.payload,
      };
    case "SET_CHARACTER":
      return {
        ...state,
        character: action.payload,
      };
    case "GET_MOVIE":
      return {
        ...state,
        movie: action.payload,
      };
    case "CLEAR": {
      return {
        ...state,
        character: action.payload,
      };
    }

    default:
      return state;
  }
};

export default lotrReducer;
