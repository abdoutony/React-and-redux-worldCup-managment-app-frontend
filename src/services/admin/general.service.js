import { AddNewPlayer, UpdatePlayerById } from "./player.service";

export const useFormUpdate = ({ prop, value }) => {
  return {
    type: "FORM_UPDATE",
    payload: { prop, value },
  };
};

export const OnFormButtonPressed = (values, action, alert) => {
  switch (action) {
    case "ADD_PLAYER":
      AddNewPlayer(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          age: values.age,
          shirtNumber: values.shirtNumber,
        },
        alert
      );

      break;
    case "EDIT_PLAYER":
      UpdatePlayerById(
        {
          firstName: values.firstName,
          lastName: values.lastName,
          age: values.age,
          shirtNumber: values.shirtNumber,
        },
        values.id,
        alert
      );
      break;
    default:
      console.log("sana hilwa");
  }
};

export const clearForm = (action) => {
  return (dispatch) => {
    dispatch({ type: action });
  };
};
