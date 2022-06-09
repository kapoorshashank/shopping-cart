export const ADD = (item) => {
    debugger;
    console.log("actions called")
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const DEL = (id) => {
  return {
    type: "DEL_ITEM",
    payload: id,
  };
};
