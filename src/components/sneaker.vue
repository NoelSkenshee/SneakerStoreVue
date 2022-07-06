<template>
    <v-card :class="'pa-2'" outlined tile>
            <v-card-title>
              <span>{{ sneaker.brand }}-{{ sneaker.model }}</span>
              <v-spacer></v-spacer>
              <span>{{ formatDate(sneaker.createdAt)}}</span>
              <router-link  :to="'details/'+sneaker._id">
              <v-btn icon color="primary" >
                <i small class="fas fa-info"></i>
              </v-btn>
              </router-link>

            </v-card-title>
          <v-img
            :src="sneaker.image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            style="max-height:300px"
          >
          </v-img>
        </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
  props:["sneaker","formatDate"]


})
</script>

<style scoped>
i{
    font-size: 30px;
    color: blue;
    border: 1px solid blue;
    border-radius:100% ;
    width: 25px;
    height: 25px;
    margin-left: 5px;

}
</style>