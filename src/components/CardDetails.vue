<template>
  <v-card class="rounded-lg">
    <v-toolbar color="#F5F9FF">
      <v-app-bar-nav-icon>
        <v-avatar size="24">
          <v-img
            class="transaction-header"
            src="@/assets/Group11889.svg"
          /> </v-avatar
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span class="caption text-no-wrap">Card Details</span></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="24">
          <v-img class="transaction-header" src="@/assets/down-arrow.svg" />
        </v-avatar>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "CardDetails",
  data: () => ({
    onboarding: 0,
    length: 3,
  }),
};
</script>
