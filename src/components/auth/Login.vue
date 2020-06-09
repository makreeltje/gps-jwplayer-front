<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-spacer/>
                <v-toolbar-title>JW Player Login</v-toolbar-title>
                <v-spacer/>
              </v-toolbar>
              <v-card-text>
                <v-form action="#" @submit.prevent="login">
                  <v-text-field
                          label="Email"
                          v-model="email"
                          name="Email"
                          prepend-icon="mdi-email"
                          v-validate="'required'"
                          type="username"
                  ></v-text-field>

                  <v-text-field
                          id="password"
                          v-model="password"
                          label="Password"
                          name="password"
                          prepend-icon="mdi-lock"
                          v-validate="'required'"
                          type="password"
                  ></v-text-field>
                  <v-btn color="primary" text type="submit">Login</v-btn>
                  <v-btn text disabled>or</v-btn>
                  <v-btn color="warning" text @click="registerModal = true">Register</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <div class="testclass">
      <v-dialog v-model="registerModal" persistent max-width="600px">
        <v-card light flat color="grey lighten-2">
          <v-toolbar color="primary" dark flat>
            <v-spacer></v-spacer>
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="firstName" label="First name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field v-model="lastName" label="Last name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="email" label="Email*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password" label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="password_confirmation" label="Verify Password*" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="registerModal = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="register()">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar v-model="generalSnack" :color="this.generalSnackColor" :top="false" :timeout="this.generalSnackTimeout">
        {{ generalSnackText }}
        <v-btn color="accent" text @click="generalSnack = false">Close</v-btn>
      </v-snackbar>
    </div>
  </v-app>
</template>
<script>
    export default {
        name: "Login",
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password_confirmation: '',
                registerModal: false,
                generalSnack: false,
                generalSnackColor: "info",
                generalSnackText: "",
                generalSnackTimeout: 5000
            };
        },
        methods: {
            login() {
                this.$store
                    .dispatch("retrieveToken", {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {
                        this.$router.push({name: "videos"});
                        return response
                    })
                    .catch(error => {
                        this.showSnack('warning', (error.response && error.response.data.message) || error.message || error.toString())
                    });
            },
            register() {

                if(this.password != this.password_confirmation)
                {
                  this.showSnack('warning', 'Passwords do not match')
                    return;
                }
                this.$store.dispatch("register", {
                    name: this.firstName + " " + this.lastName,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    // eslint-disable-next-line no-unused-vars
                .then(response => {
                    this.registerModal = false;
                    this.showSnack('success', 'Logging in');
                    this.login(this.email, this.password);
                })
                .catch(error => {
                    this.showSnack('warning', (error.response && error.response.data.errors.email[0]) || error.message || error.toString())
                });
            },
            showSnack(color, message) {
                this.generalSnackColor = color;
                this.generalSnackText = message;
                this.generalSnack = true;
            }
        }
    };
</script>