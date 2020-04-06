<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-spacer />
                <v-toolbar-title>JW Player Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    v-model="UserUsername"
                    name="Username"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="UserPassword"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-row justify="center">
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text>Login</v-btn>
                    <v-btn text disabled>or</v-btn>
                    <v-btn color="warning" text @click="registerModal = true">Register</v-btn>
                  </v-card-actions>
                </v-row>
              </v-card-actions>
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
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal first name*" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal middle name"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Legal last name*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="UserUsername" label="Username*" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="UserPassword" label="Password*" type="password" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Verify Password*" type="password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="registerModal = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="registerModal = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      testvar: true,
      registerModal: false,
      UserUsername: "",
      UserPassword: ""
    };
  }
};
</script>