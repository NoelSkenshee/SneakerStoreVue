<template>
  <div>
    <v-toolbar class="header">
      <router-link to="/">
        <div class="logo_box">
          <v-icon size="50px">mdi-home</v-icon>
          <h3>Sneaker Store</h3>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <div>
        <v-btn class="btn" color="green">
          <router-link to="/cart">
            <v-badge :content="orders.length" style="float: right"></v-badge>
            <i class="fa fa-shopping-cart" aria-hidden="true"> </i>
          </router-link>
        </v-btn>
      </div>
    </v-toolbar>

    <slider-image />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import sliderImage from "./slider_image.vue";
import { UTILS } from "../utils/immutable/const";
import { mapGetters, mapState } from "vuex";
import router from "../router/index";
const { CART } = UTILS.VX;
export default defineComponent({
  components: {
    sliderImage,
  },
  computed: mapGetters({ orders: CART }),
});
</script>

<style lang="css" scoped>
header {
  border-radius: none !important;
  height: max-content !important;
  padding: 20px !important;
  background-color: #2b9ec8 !important;
  color: white !important;
}
header > * {
  width: 100% !important;
  border-radius: none !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  align-content: center !important;
}
h1 {
  margin: 0;
}
.logo_box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 20%;
}
.btn {
  background: transparent !important;
}

i {
  color: white;
  font-size: 30px;
}

.v-badge {
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  z-index: 1000;
}
</style>
