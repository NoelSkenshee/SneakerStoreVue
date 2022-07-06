<template>
  <app-progress v-if="!sneakers"></app-progress>
  <div v-else class="image_transitions">
    <v-card
      v-for="(class_, id) in imagesClass"
      :key="id"
      :class="'mx-auto ' + class_.setimageclasses"
    >
      <v-img
        v-if="sneakers[class_.pos]"
        :src="sneakers[class_.pos].image"
      ></v-img>
    </v-card>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { UTILS } from "../utils/immutable/const";
const { LIST_SNEAKERS } = UTILS.VX;
import appProgress from "../components/progress.vue";

let interval: any;
export default Vue.extend({
  name: "slider",
  computed: mapGetters({ sneakers: LIST_SNEAKERS }),
  components: {
    appProgress,
  },
  data: () => ({
    images: [],
    interval: interval,
    imagesClass: [
      { setimageclasses: "a", pos: 0 },
      { setimageclasses: "b", pos: 1 },
      { setimageclasses: "c", pos: 2 },
    ],
  }),
  methods: {
    paginate() {
      this.interval = setInterval(() => {
        if (this.imagesClass[2].pos == 0) return this.reset();
        this.imagesClass[0].pos = this.imagesClass[1].pos;
        this.imagesClass[1].pos = this.imagesClass[2].pos;
        this.imagesClass[2].pos--;
      }, 10000);
    },
    reset() {
      this.imagesClass[2].pos = this.sneakers.length - 1;
      this.imagesClass[1].pos = this.imagesClass[2].pos - 1;
      this.imagesClass[0].pos = this.imagesClass[1].pos - 1;

      clearInterval(this.interval);
      this.paginate();
    },
  },
  mounted() {
    this.paginate();
  },
});
</script>

<style scoped>
.image_transitions {
  display: flex;
  padding: 15px;
  justify-content: space-around;
  width: 100%;
}
.image_transitions > * {
  width: 33%;
}
.a {
  transform: scale(0.5);
}
.b {
  transform: scale(1.03);
}
.c {
  transform: scale(0.6);
}
img {
  width: 25%;
}
</style>
