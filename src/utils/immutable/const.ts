export const UTILS = {
  VX: {
    LIST_SNEAKERS: "LIST_SNEAKERS",
    SET_SNEAKERS: "SET_SNEAKERS",
    SNEAKER_MATRIX_X_2: "SNEAKER_MATRIX_X_2",
    DETAILS_SNEAKER: "DETAILS_SNEAKER",
    SET_DETAILS_SNEAKER: "SET_DETAILS_SNEAKER",
    CART: "CART",
    REMOVE_ORDER: "REMOVE_ORDER",
    SEND_ORDER: "SEND_ORDER",
  },
  API: {
    url: (end: string, param?: string) =>
      `https://sneakerstore0.herokuapp.com/${end}/${param || ""}`,
    ends: {
      sneaker: "sneaker",
      sale: "sale",
    },
  },

  payComponent: {
    bancks: [
      "Banco Popular",
      "Banco Ademy",
      "Paypal",
      "Master Card",
      "American Express",
      "Visa",
    ],
  },
};
