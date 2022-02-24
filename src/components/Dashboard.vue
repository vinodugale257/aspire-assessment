<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="3" md="3" class="hidden-sm-and-down">
        <AppDrawer />
      </v-col>
      <v-col cols="12" lg="9" md="9" sm="12" xs="12">
        <v-row class="pt-10 mx-auto">
          <v-col cols="6" sm="6">
            <p class="caption">Available Balance</p>

            <span>
              <v-chip color="#01D167" class="mr-2 mb-2 white--text" label small>
                SS
              </v-chip>
              <span class="headline font-weight-bold">3,000</span></span
            >
          </v-col>
          <!-- <v-col cols="6"></v-col> -->
          <v-col cols="2" sm="2" offset-md="4">
            <v-btn
              small
              color="#325BAF"
              class="ma-2 white--text"
              @click="openDialog()"
            >
              <v-icon fab> mdi-plus </v-icon>
              <span class="text-capitalize">New Card</span></v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-tabs v-model="tabs" show-arrows>
            <v-tab class="text-capitalize">
              <span>My Debit Cards</span>
            </v-tab>
            <v-tab class="text-capitalize">
              <span>All Company Cards</span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                <v-card class="pa-2" max-width="906" max-height="767">
                  <v-row class="mx-auto">
                    <v-col
                      cols="12"
                      xs="12"
                      sm="12"
                      md="12"
                      lg="12"
                      offset-lg="4"
                    >
                      <h5
                        class="green--text lighten-1--text font-weight-medium"
                      >
                        <v-icon small color="#01D167">mdi-eye</v-icon
                        ><span> Show card number</span>
                      </h5>
                    </v-col>
                  </v-row>
                  <v-row class="mx-auto">
                    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                      <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <Card :cardDetails="cards" />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <CardButtons />
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="6" lg="6">
                      <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <CardDetails />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                          <RecentTransactions />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-tab-item>
          </v-tabs-items>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card-title class="text-h5 grey lighten-2"> Add </v-card-title>
          <v-card-text>
            <v-layout wrap>
              <v-flex lg6 md6 sm12 xs12>
                <v-text-field
                  class="ma-3"
                  v-model="card.first_name"
                  :counter="10"
                  :rules="nameRules"
                  label="First Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex lg6 md6 sm12 xs12>
                <v-text-field
                  class="ma-3"
                  v-model="card.last_name"
                  :counter="10"
                  :rules="nameRules"
                  label="Last Name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex lg12 md12 sm12 xs12>
                <v-text-field
                  class="ma-3"
                  v-model="card.card_number"
                  :counter="16"
                  :rules="cardNumberRules"
                  label="Card Number"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex lg9 md9 sm12 xs12>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      class="ma-3"
                      v-model="date"
                      label="Thru"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="card.date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex lg3 md3 sm12 xs12>
                <v-text-field
                  class="ma-3"
                  v-model="card.cvv"
                  :counter="3"
                  :rules="cvvRules"
                  label="CVV"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="close">Close</v-btn>
            <v-btn
              color="primary"
              text
              :loading="loading"
              :disabled="!valid"
              @click="save"
              >Save</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import AppDrawer from "./AppDrawer.vue";
import Card from "./Card.vue";
import CardDetails from "./CardDetails.vue";
import CardButtons from "./CardButtons.vue";
import RecentTransactions from "./RecentTransactions.vue";
import { createCard } from "@/services/CardService";
export default {
  name: "Dashboard",
  components: {
    AppDrawer,
    Card,
    CardDetails,
    CardButtons,
    RecentTransactions,
  },
  async mounted() {
    this.$store.dispatch("getAllCards");
    // this.cards = await getAllCards();
  },
  computed: {
    cards() {
      return this.$store.state.cards;
    },
  },
  data() {
    return {
      tabs: null,
      card: {
        first_name: "",
        last_name: "",
        card_number: "",
        cvv: "",
        date: this.date,
      },
      loading: false,
      dialog: false,
      tab: null,
      tab_items: ["My Debit Cards", "All Company Cards"],
      text: "Lorem ipsum dolor sit amet,",
      onboarding: 0,
      length: 3,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      showOtpDiv: false,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      cardNumberRules: [
        (v) => !!v || "Card Number is required",
        // (v) => Number.isInteger(v) || "No Characters allowed",
        (v) => (v && v.length == 16) || "Number must be exact of 16 numbers",
      ],
      cvvRules: [
        (v) => !!v || "CVV is required",
        (v) => (v && v.length == 3) || "CVV must be exact of 3 numbers",
      ],
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    save() {
      let isValidData = this.$refs.form.validate();
      if (isValidData) {
        let cardDetails = {
          first_name: this.card.first_name,
          last_name: this.card.last_name,
          card_number: this.card.card_number,
          cvv: this.card.cvv,
          thru: this.date,
          isDisable: false,
        };
        createCard(cardDetails).then((response) => {
          this.cards = response;
          this.numberOfCards = this.cards.length;
          this.dialog = false;
        });
        this.$store.dispatch("getAllCards");
      }
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
