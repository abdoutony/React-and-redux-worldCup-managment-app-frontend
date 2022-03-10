const initialState = {
  players: [],
  player: {
    _id: 0,
    firstName: "",
    lastName: "",
    age: 0,
    shirtNumber: 0,
    createdAt: 0,
  },
};

const PlayerReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_PLAYERS":
      return {
        ...state,
        players: payload,
      };
    case "FORM_UPDATE":
      return {
        ...state,
        [state.player.payload.prop]: payload.value, // when ever we type anything to the form it is gonna update the state
      };
    case "CLEAR_FORM_PLAYER":
      return {
        ...state,
        player: {
          firstName: "",
          lastName: "",
          age: 0,
          shirtNumber: 0,
        },
      };
    case "GET_ONE_PLAYER":
      return {
        ...state,
        player: payload,
      };

    default:
      return state;
  }
};

export default PlayerReducer;
