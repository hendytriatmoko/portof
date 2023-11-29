<template>
  <!-- <div class="text-center">
    <v-btn color="orange-darken-2" @click="snackbar = true">
      Open Snackbar
    </v-btn>

    <v-snackbar v-model="snackbar" :timeout="timeout" multi-line>
      {{ text }}

      <template v-slot:actions>
        <v-btn color="blue" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div> -->
  <v-snackbar v-model="alert" :color="color" multi-line top>
    {{ text }}

    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="close">
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Alerts",
  methods: {
    ...mapActions({
      setAlert: "alert/set",
    }),
    close() {
      this.setAlert({
        status: false,
      });
    },
  },
  computed: {
    ...mapGetters({
      status: "alert/status",
      color: "alert/color",
      text: "alert/text",
    }),
    alert: {
      get() {
        return this.status;
      },
      set(value) {
        this.setAlert({
          status: value,
          type: "success",
          text: "test",
        });
      },
    },
  },
};
</script>

<style></style>
