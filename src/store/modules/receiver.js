const SET_RECEIVER_DATA = "receiver/SET_RECEIVER_DATA";

export const setReceiverData = ({ name, englishName, email, picture }) => ({
  type: SET_RECEIVER_DATA,
  payload: { name, englishName, email, picture },
});

const initialState = {
  name: "",
  englishName: "",
  email: "",
  picture: "",
};

const receiver = (state = initialState, action) => {
  switch (action.type) {
    case SET_RECEIVER_DATA:
      return {
        ...state,
        name: action.payload.name,
        englishName: action.payload.englishName,
        email: action.payload.email,
        picture: action.payload.picture,
      };
    default:
      return state;
  }
};

export default receiver;
