import * as actionTypes from "../action";

const initialState = {
  result: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        result: state.result.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.result.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        result: updatedArray
      };
  }

  return state;
};
export default reducer;
