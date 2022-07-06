<template>
  <v-dialog width="600px" v-model="showDialog" persistent>
    <template>
      <v-card width="600px">
        <v-app-bar color="primary">
          <v-toolbar-title><h2>Mode pay</h2></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn @click="close()" color="white" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>
        <form action="">
          <img
            id="cartpay"
            src="https://tse1.mm.bing.net/th?id=OIP.t6Y7mst0EXjVcYYOXm2SNwAAAA&pid=Api&P=0&w=443&h=185"
          />
          <div class="flex-2">
            <v-text-field
              @keypress="error = false"
              v-model="client.client"
              placeholder="Please enter youre name*"
              required
            ></v-text-field>
            <v-select
              label="Select your pay mode"
              :items="bancks"
              v-model="client.creditcard"
            >
            </v-select>
          </div>
          <div class="flex-2">
            <v-text-field
              @keyup="error = false"
              v-model="client.creditcardNo"
              placeholder="Please youre credit card No*"
              required
              type="number"
            ></v-text-field>
            <v-text-field
              @keyup="error = false"
              v-model="client.email"
              placeholder="Please youre emailo*"
              required
              type="email"
            ></v-text-field>
          </div>
          <v-spacer></v-spacer>

          <div class="flex">
            <p class="error" v-if="error">
              Invalid form detected! <i class="fas fa-repeat"></i>
            </p>
            <v-btn type="button" @click="save()">ORDER</v-btn>
          </div>
        </form>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { UTILS } from "../utils/immutable/const";
const { bancks } = UTILS.payComponent;
export default Vue.extend({
  props: ["showDialog"],
  data() {
    return {
      client: {
        client: "",
        creditcard: "",
        creditcardNo: 0,
        email: "",
      },
      bancks,
      error: false,
    };
  },

  methods: {
    save(form: any) {
      const { client, creditcard, creditcardNo, email } = this.client;
      if (!client || !creditcard || !creditcardNo || !email) {
        this.error = true;
        return;
      }
      this.$emit("pay", this.client);
    },
    close() {
      this.$emit("close", this.client);
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;
}

.flex-2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
.flex-2 > * {
  margin: 5px;
}
.flex {
  display: flex;
  justify-items: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.flex > * {
  background: greenyellow !important;
  color: white !important;
}
img#cartpay {
  width: 100%;
}
h2 {
  color: white;
}
.error {
  width: 100%;
  padding: 5px;
  text-align: center;
}
p > i {
  color: greenyellow;
}
</style>
