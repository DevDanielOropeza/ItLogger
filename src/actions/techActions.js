import {
  GET_TECHS,
  ADD_TECH,
  DELET_TECH,
  SET_LOADING,
  TECHS_ERROR,
  LOGS_ERROR,
} from "./types";

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Add technician to server
export const addTech = (technician) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(technician),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Delete a technician from the server
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELET_TECH,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.statusText,
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
