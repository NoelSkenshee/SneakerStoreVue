<template>
  <v-app id="container" :style="style">
    <appheader />
    <v-container>
      <router-view></router-view>
    </v-container>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import appheader from "./components/header.vue";
import appFooter from "./components/footer.vue";
export default Vue.extend({
  name: "App",
  components: {
    appheader,
    appFooter,
  },
  data: () => ({
    //
    style:
      "height: 100vh!important; display: flex!important; flex-direction: column!important;justify-content: space-between!important;",
  }),
});
</script>
