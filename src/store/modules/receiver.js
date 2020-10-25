const SET_RECEIVER_DATA = "receiver/SET_RECEIVER_DATA";

export const setReceiverData = ({ name, englishName, email, picture, phone, tel, team, leaderPart, branch }) => ({
  type: SET_RECEIVER_DATA,
  payload: { name, englishName, email, picture, phone, tel, team, leaderPart, branch },
});

const initialState = {
  name: "",
  englishName: "",
  email: "",
  picture: "",
  phone: "",
  tel: "",
  team: "",
  leaderPart: "",
  branch: "",
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
        phone: action.payload.phone,
        tel: action.payload.tel,
        team: action.payload.team,
        leaderPart: action.payload.leaderPart,
        branch: action.payload.branch,
      };
    default:
      return state;
  }
};

export default receiver;
