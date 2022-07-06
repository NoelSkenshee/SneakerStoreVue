<template>
  <app-progress v-if="!orders"></app-progress>
  <v-container v-else class="box-details">
    <pay-modal
      :showDialog="dialog"
      @pay="save"
      @close="dialog = !dialog"
    ></pay-modal>
    <div class="flex-2">
      <img :src="orders[page].image" alt="image snicker" />
      <div class="action">
        <v-btn class="btn" @click="dialog = !dialog">Order</v-btn>
      </div>
    </div>

    <nav>
      <v-btn class="btn" @click="backPage()"
        ><v-icon>mdi-arrow-left</v-icon></v-btn
      ><v-btn class="danger" @click="removeItem(orders[page])"
        ><v-icon>mdi-delete</v-icon></v-btn
      ><v-btn class="btn" @click="nextPage()"
        ><v-icon>mdi-arrow-right</v-icon></v-btn
      >
    </nav>

    <table>
      <tr>
        <th>Size selected</th>
        <td>{{ orders[page].size }}</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>${{ orders[page].price }}</td>
      </tr>
      <tr>
        <th>Brand</th>
        <td>{{ orders[page].brand }}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>{{ orders[page].model }}</td>
      </tr>
      <tr>
        <th>Total to pay</th>
        <td>${{ getTotal(orders) }}</td>
      </tr>
    </table>
  </v-container>
</template>

<script lang="ts">
import payModal from "../components/payform.vue";
import { UTILS } from "@/utils/immutable/const";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { Order } from "../utils/types/order";
import appProgress from "../components/progress.vue";

const { CART, REMOVE_ORDER, SEND_ORDER } = UTILS.VX;
export default Vue.extend({
  components: {
    payModal,
    appProgress,
  },
  computed: mapGetters({ orders: CART }),
  data() {
    return {
      page: 0,
      dialog: false,
    };
  },
  methods: {
    ...mapActions({ remove: REMOVE_ORDER, orderNow: SEND_ORDER }),
    removeItem(ord_: any) {
      this.orders = this.orders.filter((ord: any) => ord._id != ord_._id);
      this.remove(ord_);
    },
    nextPage() {
      if (this.page == 0) return;
      this.page--;
    },
    backPage() {
      if (this.page == this.orders.length - 1) return;
      this.page++;
    },
    getTotal(order: any[]) {
      let total = 0;
      order.map((order) => (total += order.price));
      return total.toFixed(2);
    },
    save(form: any) {
      this.dialog = false;
      const order = {
        ...form,
        order: this.orders.map((data: Order) => ({
          model: data.model,
          brand: data.brand,
          price: data.price,
          name: data.name,
          size: data.size,
        })),
        totalPay: parseFloat(this.getTotal(this.orders)),
      };
      this.orderNow(order);
    },
  },
  created() {
    this.page = this.orders.length - 1;
  },
});
</script>

<style scoped>
.flex-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
img {
  width: 45%;
}

table {
  width: 100%;
}
table,
tr,
td,
th {
  border: 1px solid blue;
}

th {
  text-align: left;
  padding: 10px;
}
td {
  text-align: right;
  padding: 10px;
}

.box-details {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.action {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  background-color: greenyellow !important;
  color: white !important;
}
.danger {
  background-color: transparent !important;
  color: red !important;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
</style>
