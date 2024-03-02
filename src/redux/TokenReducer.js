const initialstate = {
  token: null,
};

const TokenReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default TokenReducer;
