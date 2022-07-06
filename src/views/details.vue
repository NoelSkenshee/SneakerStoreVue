<template>
  <v-container class="box-details">
    <div class="flex-2" v-if="sneaker">
      <img :src="sneaker.image" alt="image snicker" />
      <div class="action">
        <v-select
          :items="sneaker.sizes"
          label="Select youre own size"
          v-model="sneaker['size']"
        ></v-select>
        <v-btn class="btn" @click="addOrder(sneaker)"
          ><v-icon>mdi-plus</v-icon></v-btn
        >
      </div>
    </div>
    <app-progress v-if="!sneaker"></app-progress>
    <table v-else>
      <tr>
        <th>Price</th>
        <td>${{ sneaker.price }}</td>
      </tr>
      <tr>
        <th>Brand</th>
        <td>{{ sneaker.brand }}</td>
      </tr>
      <tr>
        <th>Model</th>
        <td>{{ sneaker.model }}</td>
      </tr>
    </table>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { UTILS } from "../utils/immutable/const";
import appProgress from "../components/progress.vue";

const { DETAILS_SNEAKER, CART } = UTILS.VX;
export default Vue.extend({
  computed: mapGetters({ sneaker: DETAILS_SNEAKER, orders: CART }),
  methods: {
    ...mapActions({ getById: DETAILS_SNEAKER, addOrder: CART }),
  },
  components: {
    appProgress,
  },
  data() {
    return {};
  },
  
  beforeMount() {
    this.getById(this.$route.params.id);

  },
mounted(){
    setTimeout(() => {
     if(!this.sneaker)this.$router.back()
     }, 4000);
}

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
</style>
