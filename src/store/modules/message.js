const SET_PRAISE_MODAL = "message/SET_PRAISE_MODAL";

export const setPraiseModal = ({ name, englishName, email, picture }) => ({ type: SET_PRAISE_MODAL, payload: { name, englishName, email, picture } });

const initialState = {
  name: "",
  englishName: "",
  email: "",
  picture: "",
};

const message = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRAISE_MODAL:
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

export default message;
