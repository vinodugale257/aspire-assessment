<template>
  <v-card elevation="0">
    <v-window v-model="onboardingCard" continuous @change="activeCard">
      <v-window-item v-for="(card, i) in cardDetails" :key="i">
        <v-card
          class="rounded-lg"
          :color="card.isDisable ? '#AAAAAA' : '#01D167'"
        >
          <v-responsive>
            <v-row class="pt-4 pr-4 mx-auto">
              <v-col cols="8"></v-col>
              <v-col cols="4" align="center">
                <v-img
                  contain
                  height="23"
                  max-width="83"
                  class="greeting-card-trophy"
                  src="@/assets/AspireLogo1.svg"
                ></v-img>
              </v-col>
            </v-row>
            <v-card-title class="white--text"
              >{{ card.first_name }} {{ card.last_name }}</v-card-title
            >
            <v-card-subtitle class="white--text mt-2">
              <span v-for="n in 3" :key="n" class="mr-2">
                <span v-for="n in 4" :key="n" class="mr-1">
                  <v-icon x-small color="white"
                    >mdi-checkbox-blank-circle</v-icon
                  ></span
                >
              </span>
              <span class="body-2 mx-auto">{{
                card.card_number | formatCardNuber
              }}</span></v-card-subtitle
            >
            <v-row class="pl-5 white--text font-weight-medium">
              <v-col cols="4">Thru: {{ card.thru | formatDate }}</v-col>
              <v-col cols="4">CVV: {{ card.cvv }}</v-col>
            </v-row>

            <v-row class="mx-auto pb-5">
              <v-col cols="8"></v-col>
              <v-col cols="4" align="center">
                <v-img
                  contain
                  height="22"
                  max-width="66"
                  class="greeting-card-trophy"
                  src="@/assets/VisaLogo.svg"
                ></v-img>
              </v-col>
            </v-row>
          </v-responsive>
        </v-card>
      </v-window-item>
    </v-window>
    <v-card-actions class="justify-space-between">
      <v-btn text> </v-btn>
      <v-item-group
        v-model="onboardingCard"
        class="text-center"
        mandatory
        @change="activeCard"
      >
        <v-item
          v-for="n in cardDetails.length"
          :key="`btn-${n}`"
          v-slot="{ active, toggle }"
        >
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text> </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    cardDetails: {
      type: Array,
    },
    isLock: {
      type: Boolean,
    },
  },
  name: "Card",
  data: () => ({
    onboardingCard: 0,
    length: 3,
  }),
  methods: {
    activeCard() {
      this.$store.dispatch("setActiveCard", this.onboardingCard);
    },
  },
};
</script>
