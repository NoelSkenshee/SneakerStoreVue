import axios from "axios";
import { UTILS } from "../utils/immutable/const";
import { HttpResponseSneaker } from "../utils/types/responseHttp";
const {
  LIST_SNEAKERS,
  SET_SNEAKERS,
  SNEAKER_MATRIX_X_2,
  DETAILS_SNEAKER,
  SET_DETAILS_SNEAKER,
  CART,
  REMOVE_ORDER,
  SEND_ORDER,
} = UTILS.VX;
const { url, ends } = UTILS.API;

export default {
  state: {
    LIST_SNEAKERS: [],
    DETAILS_SNEAKER: {},
    CART: [],
  },

  /**     */

  getters: {
    [LIST_SNEAKERS]: (state: any) => state[LIST_SNEAKERS],
    [SNEAKER_MATRIX_X_2]: (state: any) => {
      const result = [];
      for (let index = 0; index < state[LIST_SNEAKERS].length; index++)
        result.push([
          state[LIST_SNEAKERS][index],
          state[LIST_SNEAKERS][(index += 1)],
        ]);

      return result; //matrix (x*2)
    },
    [DETAILS_SNEAKER]: (state: any) => state[DETAILS_SNEAKER],
    [CART]: (state: any) => state[CART],
  },

  mutations: {
    [SET_SNEAKERS]: (state: any, data: any) => {
      state[LIST_SNEAKERS] = data;
    },
    [SET_DETAILS_SNEAKER]: (state: any, data: any) => {
      state[DETAILS_SNEAKER] = data;
    },
    [CART]: (state: any, order: any) => {
      state[CART].unshift(order);
    },

    [REMOVE_ORDER]: (state: any, order: any) => {
      state[CART] = state[CART].filter((ord: any) => ord._id != order._id);
    },
    [SEND_ORDER](state: any) {
      state[CART] = [];
    },
  },

  actions: {
    [LIST_SNEAKERS]: async (vx: { commit: any }) => {
      try {
        const { data } = await axios.get(url(ends.sneaker));
        if (!data.error) vx.commit(SET_SNEAKERS, data.data);
        else console.log(data.error);
      } catch (err) {
        console.log(err);
      }
    },
    [DETAILS_SNEAKER]: async (vx: { commit: any }, id: string) => {
      try {
        const res = await await axios.get<HttpResponseSneaker>(
          url(ends.sneaker, id)
        );
        if (!res.data.error) vx.commit(SET_DETAILS_SNEAKER, res.data.data);
      } catch (error) {
        console.log(error);
      }
    },

    [CART]: (vx: { commit: any }, order: any) => {
      vx.commit(CART, order);
    },

    [REMOVE_ORDER]: (vx: { commit: any }, order: any) => {
      vx.commit(REMOVE_ORDER, order);
    },

    async [SEND_ORDER](vx: { commit: any }, order: any) {
      console.log(JSON.stringify(order).toString());

      const res = await (
        await axios.post<HttpResponseSneaker>(url(ends.sale), order, {
          headers: {},
        })
      ).data;
      if (!res.error) vx.commit(SEND_ORDER);
      else {
        console.log(JSON.stringify(res).toString());
      }
    },
  },
};
