<template>
  <v-card class="rounded-lg">
    <v-toolbar color="#F5F9FF">
      <v-app-bar-nav-icon>
        <v-avatar size="24">
          <v-img
            class="transaction-header"
            src="@/assets/Group11890.svg"
          /> </v-avatar
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span class="caption text-no-wrap"
          >Recent Transactions</span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-avatar size="24">
          <v-img class="transaction-header" src="@/assets/down-arrow.svg" />
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-list dense>
      <template v-for="(folder, index) in folders">
        <v-divider
          v-if="folder.divider"
          :key="index"
          :inset="folder.inset"
        ></v-divider>
        <v-list-item v-else :key="folder.title">
          <v-list-item-avatar size="36" :color="folder.color" class="pa-2">
            <v-img
              :src="folder.avatar"
              max-height="15.2"
              max-width="16"
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="folder.title"></v-list-item-title>

            <v-list-item-subtitle
              v-text="folder.subtitle"
            ></v-list-item-subtitle>
            <div>
              <v-list-item-avatar size="18" color="#325BAF" class="pa-1">
                <v-img
                  src="@/assets/business-and-finance.svg"
                  max-height="7.86"
                  max-width="10"
                ></v-img>
              </v-list-item-avatar>
              <span
                class="caption text-no-wrap indigo--text text--darken-5 bold"
                >{{ folder.desc }}</span
              >
            </div>
          </v-list-item-content>

          <v-list-item-action>
            <div>
              <v-list-item-action-text
                v-text="folder.amount"
                class="green--text text--darken-5 font-weight-bold"
              ></v-list-item-action-text>

              <v-avatar size="12">
                <v-img class="transaction-header" src="@/assets/next.svg" />
              </v-avatar>
            </div>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "RecentTransactions",
  data: () => ({
    folders: [
      {
        avatar: require(`@/assets/file-storage.svg`),
        subtitle: "20 May 2020",
        title: "Hamleys",
        desc: "Refund On Debit Card",
        color: "#009DFF1A",
        amount: "+S$ 150",
        amountColor: "green",
      },
      { divider: true, inset: true },
      {
        avatar: require(`@/assets/flights.svg`),
        subtitle: "20 May 2020",
        title: "Hamleys",
        desc: "Refund On Debit Card",
        color: "#00D6B51A",
        amount: "+S$ 150",
        amountColor: "black",
      },
      { divider: true, inset: true },
      {
        avatar: require(`@/assets/megaphone.svg`),
        subtitle: "20 May 2020",
        title: "Hamleys",
        desc: "Refund On Debit Card",
        color: "#F251951A",
        amount: "+S$ 150",
        amountColor: "black",
      },
      { divider: true, inset: true },
      {
        avatar: require(`@/assets/file-storage.svg`),
        subtitle: "20 May 2020",
        title: "Hamleys",
        desc: "Refund On Debit Card",
        color: "#009DFF1A",
        amount: "+S$ 150",
        amountColor: "black",
      },
    ],
  }),
};
</script>
