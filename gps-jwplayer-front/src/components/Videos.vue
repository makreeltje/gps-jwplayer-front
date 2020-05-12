<template>
  <v-layout align-center justify-center>
    <div class="flex xs12 sm4 md8 pa-md-4 mx-lg-auto">
      <v-text-field label="Search video..." filled></v-text-field>
      <v-row v-if="loading">
        <v-col v-for="n in 12" :key="n" cols="12" md="3">
          <v-skeleton-loader loading="loading" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-if="!loading">
        <v-col v-for="(video, index) in allVideos" :key="index" cols="12" md="3">
          <router-link :to="'edit/' + video.mediaid">
            <v-img :src="video.image" max-height="224.328"></v-img>
            <strong>{{ video.title }}</strong>
          </router-link>
        </v-col>
      </v-row>
    </div>
    <v-snackbar v-model="generalSnack" :color="this.generalSnackColor" :top="false" :timeout="this.generalSnackTimeout">
      {{ generalSnackText }}
      <v-btn color="accent" text @click="generalSnack = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>

    export default {
        data: () => ({
            loading: false,
            transition: "scale-transition",

            transitions: [
                {
                    text: "None",
                    value: undefined
                },
                {
                    text: "Fade Transition",
                    value: "fade-transition"
                },
                {
                    text: "Scale Transition",
                    value: "scale-transition"
                },

            ],
            generalSnack: false,
            generalSnackColor: "info",
            generalSnackText: "",
            generalSnackTimeout: 5000,
        }),

        methods: {
            showSnack(color, message) {
                this.generalSnackColor = color;
                this.generalSnackText = message;
                this.generalSnack = true;
            },
            greetUser() {
                if (localStorage.greetUser == '0')
                {
                    this.showSnack("info", "Welcome " + localStorage.name);
                    localStorage.greetUser = '1';
                }
            },

        },
        computed: {
            allVideos() {
                return this.$store.getters.getAllVideos
            }

        },
        mounted() {
            this.$store.dispatch('fetchVideos')
        },
    };
</script>