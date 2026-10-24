
export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existingProduct = state.find(
        (item) => item.id === action.product.id
      );

      if (existingProduct) {
        return state.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.product, quantity: 1 }];
    }

    case "INCREASE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}
