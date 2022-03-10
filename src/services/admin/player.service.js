import { useState, useEffect } from "react";
// import players from "../../data/playersList";
import { PlayerColumnsNames } from "../../data/ColumnsNames";
import { OnRedirectCallback } from "../../helpers/onRedirecCallback";
import http from "../../http-common";
import axios from "axios";
export const useGetColumnsNamesPlayers = () => {
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    setColumns(PlayerColumnsNames);
  }, []);
  return columns;
};

export const GetDataPlayers = () => {
  return (dispatch) => {
    http
      .get("/players")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch({
            type: "GET_PLAYERS",
            payload: res.data,
          });
        }
      })
      .catch((err) => console.error(err));
  };
};

export const AddNewPlayer = (
  { firstName, lastName, age, shirtNumber },
  alert
) => {
  let player = { firstName, lastName, age, shirtNumber };

  //console.log(player.firstName);
  http
    .post("/players", {
      firstName: player.firstName,
      lastName: player.lastName,
      age: player.age,
      shirtNumber: player.shirtNumber,
    })
    .then((res) => {
      if (res.status === 200) {
        alert.success("Player Added to database");
        setTimeout(() => {
          OnRedirectCallback("/admin/players");
        }, 3000);

        console.log(res.data);
      }
    })
    .catch((err) => {
      alert.error("Server error");
      console.log(err);
    });
};

export const UpdatePlayerById = (
  { firstName, lastName, age, shirtNumber },
  id,
  alert
) => {
  let player = { firstName, lastName, age, shirtNumber };
  http
    .put(`/players/${id}`, {
      firstName: player.firstName,
      lastName: player.lastName,
      age: player.age,
      shirtNumber: player.shirtNumber,
    })
    .then((res) => {
      if (res.status === 200) {
        alert.success("Player data is updated");
        setTimeout(() => {
          OnRedirectCallback("/admin/players");
        }, 3000);
      }
      //console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeletePlayerById = (id) => {
  return (dispatch) => {
    http
      .delete(`/players/${id}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          dispatch({
            type: "GET_PLAYERS",
            payload: res.data,
          });
          // OnRedirectCallback("/admin/players");
        }
      })
      .catch((err) => console.log(err));
  };
};

export const GetPlayerWithId = (id, setIsLoaded) => {
  return (dispatch) => {
    http
      .get(`players/${id}`)
      .then((res) => {
        dispatch({ type: "GET_ONE_PLAYER", payload: res.data });
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
