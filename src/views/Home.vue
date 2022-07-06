<template>
  <div class="home">
    <app-progress v-if="sneakerMatrix.length <= 0"></app-progress>
    <v-row v-else v-for="(row, id) in sneakerMatrix" :key="id" no-gutters>
      <v-col v-for="(sneaker, id_) in row" :key="id_" order="last">
        <sneaker :sneaker="sneaker" :formatDate="formatDate" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { mapGetters, mapActions } from "vuex";
import { UTILS } from "../utils/immutable/const";
import sneaker from "../components/sneaker.vue";
import appProgress from "../components/progress.vue";
const { LIST_SNEAKERS, SNEAKER_MATRIX_X_2 } = UTILS.VX;
export default {
  name: "Home",
  components: {
    sneaker,
    appProgress,
  },
  computed: mapGetters({
    sneakers: LIST_SNEAKERS,
    sneakerMatrix: SNEAKER_MATRIX_X_2,
  }),
  methods: {
    ...mapActions({ listSneakers: LIST_SNEAKERS }),
    formatDate(date: string) {
      const newdate = new Date(date);
      return `${newdate.getMonth()} / ${newdate.getDay()} / ${newdate.getFullYear()}`;
    },
  },
  mounted() {
    this.listSneakers();
  },
};
</script>

<style scoped>
.row.no-gutters {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;
}
.col {
  max-width: 49%;
  margin: 5px;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
