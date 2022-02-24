<template>
  <v-card class="mx-auto" max-height="770" max-width="340">
    <v-navigation-drawer class="mx-auto pa-5" color="#0C365A" width="100%" dark>
      <v-list-item>
        <v-list-item-content>
          <v-img height="35" max-width="125" src="@/assets/Logo1.svg" />
          <span class="caption blue--text"
            >Trusted way of banking for 3,000+ SMEs and startups in
            Singapore</span
          >
        </v-list-item-content>
      </v-list-item>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" link>
          <v-list-item-icon x-small>
            <v-avatar size="18"> <v-img :src="item.avatar" /></v-avatar>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white-text body-2">{{
              item.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: "AppDrawer",
  data: () => ({
    items: [
      {
        avatar: require(`@/assets/Home.svg`),
        text: "Home",
      },
      {
        avatar: require(`@/assets/Card.svg`),
        text: "Cards",
      },
      {
        avatar: require(`@/assets/Payments.svg`),
        text: "Payments",
      },
      {
        avatar: require(`@/assets/Credit.svg`),
        text: "Credit",
      },
      {
        avatar: require(`@/assets/Account.svg`),
        text: "Settings",
      },
    ],
  }),
};
</script>
