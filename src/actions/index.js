const ADD = "ADD";

export const addEntry = (user) => {
  return {
    type: ADD,
    payload: user
  };
};
