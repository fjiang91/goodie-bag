
import axios from 'axios';

const initialState = {
  candies: []
}

const POPULATE_CANDIES = 'POPULATE_CANDIES';

export const populateCandiesActionCreator = (data) => {
    return {
      type: POPULATE_CANDIES,
      candies: data
    }
};

export const populateCandiesThunkActionCreator = () => {
  return async dispatch => {
    try {
      let { data } = await axios.get('/api/candies');
      dispatch(populateCandiesActionCreator(data));
    } catch (error) {
      console.log(error);
    }
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_CANDIES:
      return { ...state, candies: [...action.candies]};
    default:
      return state
  }
}

export default rootReducer;
