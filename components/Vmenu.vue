<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="vdate"
        :label="label"
        prepend-inner-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        outlined
        dense
        hide-details
        class="costomgray"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="vdate"
      color="deep-orange"
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  name: "Vmenu",
  props:{
    vdate:String,
    label:String,
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>