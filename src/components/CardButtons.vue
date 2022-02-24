<template>
  <v-card class="rounded-lg" color="#EDF3FF">
    <v-row>
      <v-col cols="1"></v-col>
      <v-col cols="2" v-if="activeCard.isDisable">
        <v-btn text @click="toggleCard">
          <v-img
            class="transaction-header"
            src="@/assets/Freeze card.svg"
            max-height="32"
            max-width="32"
          />
        </v-btn>
        <span class="caption">Unfreeze Card</span>
      </v-col>
      <v-col cols="2" v-if="!activeCard.isDisable" block>
        <v-btn text @click="toggleCard">
          <v-img
            class="transaction-header"
            src="@/assets/Freeze card.svg"
            max-height="32"
            max-width="32"
          />
        </v-btn>
        <p class="caption text-center">Freeze Card</p>
      </v-col>
      <v-col cols="2">
        <v-btn text>
        <v-img
          class="transaction-header"
          src="@/assets/Set spend limit.svg"
          max-height="32"
          max-width="32"
        />
</v-btn>
        <p class="caption text-center">Set Spend Limit</p>
      </v-col>
      <v-col cols="2">
        <v-btn text>
        <v-img
          class="transaction-header"
          src="@/assets/GPay.svg"
          max-height="32"
          max-width="32"
        />
        </v-btn>

        <p class="caption text-center">Add to GPay</p>
      </v-col>
      <v-col cols="2">
        <v-btn text>
        <v-img
          class="transaction-header"
          src="@/assets/Replace card.svg"
          max-height="32"
          max-width="32"
        />
        </v-btn>
         <p class="caption text-center">Replace Card</p>
      </v-col>
      <v-col cols="2">
        <v-btn text>
        <v-img
          class="transaction-header"
          src="@/assets/Deactivate card.svg"
          max-height="32"
          max-width="32"
        />
        </v-btn>
         <p class="caption text-center">Cancel Card</p>
      </v-col>
      <v-col cols="2"></v-col>
      <v-col cols="2"></v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <!-- <v-toolbar color="#F5F9FF">
      <v-app-bar-nav-icon>
        <v-avatar size="24">
          <v-img
            class="transaction-header"
            src="@/assets/Group 11889.svg"
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
    </v-toolbar> -->
  </v-card>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "CardButtons",
  computed: {
    activeCard() {
      return this.$store.getters.getActiveCard(this.$store.state.activeCardId);
    },
  },
  methods: {
    toggleCard() {
      this.$store.dispatch("freezeCard", this.$store.state.activeCardId);
    },
  },
};
</script>
