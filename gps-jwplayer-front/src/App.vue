<template>
  <v-app>
    <div>
      <v-app-bar color="primary" dense dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>JW Player Tool</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <div v-if="!loggedIn">
          <router-link to="/register">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <span>Register</span>
            </v-tooltip>
          </router-link>

          <router-link to="/login">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-login</v-icon>
                </v-btn>
              </template>
              <span>Login</span>
            </v-tooltip>
          </router-link>
        </div>

        <div v-if="loggedIn">
          <router-link to="/profile">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </template>
              <span>Profile</span>
            </v-tooltip>
          </router-link>
          <router-link :to="{name: 'logout'}">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-logout</v-icon>
              </v-btn>
            </template>
            <span>Logout</span>
          </v-tooltip>
          </router-link>
        </div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-switch color="secondary" v-on="on" v-model="$vuetify.theme.dark" hide-details inset></v-switch>
          </template>
          <span>Dark</span>
        </v-tooltip>
      </v-app-bar>
    </div>
    <div>
      <v-content>
        <router-view />
      </v-content>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
