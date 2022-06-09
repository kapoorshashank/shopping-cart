const INIT_STATE = {
  count: 0,
  carts: [],
};
//accepts state, action
export const reducer = (state = INIT_STATE, action) => {
  console.log("reducer called");
  switch (action.type) {
    case "ADD_ITEM":
      console.log("add cart called");
      let index = state.carts.findIndex(
        (cart) => cart.id === action.payload.id
      );
      console.log(index, "index");
      if (index >= 0) {
        state.carts[index].quantity += 1;
        return {
          ...state,
          count: state.count + 1,
          carts: [...state.carts],
        };
      } else {
        return {
          ...state,
          count: state.count + 1,
          carts: [...state.carts, { ...action.payload, quantity: 1 }],
        };
      }
    case "DEL_ITEM":
      if (typeof action.payload === "number") {
        let deleteIndex = state.carts.findIndex(
          (cart) => cart.id === action.payload
        );
        if (deleteIndex >= 0) {
          state.carts[deleteIndex].quantity -= 1;
          return {
            ...state,
            count: state.count - 1,
            carts: [...state.carts],
          };
        }
        else{
            let filteredData = state.carts.filter((e, i) => {
                return e.id !== action.payload;
              });
              return {
                  ...state,
                  count: state.count - 1,
                  carts: filteredData
              } 
        }
      } else {
        let filteredData = state.carts.filter((e, i) => {
          return e.id !== action.payload.id;
        });
        return {
            ...state,
            count: state.count - action.payload.quantity,
            carts: filteredData
        }
      }
    default:
      return state;
  }
};
