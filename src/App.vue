<template>
  <v-app>
    <div>
      <v-app-bar color="primary" dense dark>
        <v-app-bar-nav-icon @click="drawer = true" name="menu"></v-app-bar-nav-icon>

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
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list>
          <router-link to="/profile">
            <v-list-item v-if="loggedIn">
              <v-list-item-content>
                <v-list-item-title>Welcome {{user}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>

        <v-list-item v-if="!loggedIn">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logged out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list>
          <router-link to="/">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/admin">
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-person-supervisor</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Admin panel</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list>


      </v-navigation-drawer>
    </div>
    <div>
      <v-content>
        <router-view/>
      </v-content>
    </div>
  </v-app>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                drawer: null,
                user: localStorage.getItem('name')
            };
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            }
        },
        created() {
            axios.interceptors.response.use(
                response => response,
                error => {
                    const status = error.response.status;
                    if (status === 401) {
                        this.$router.push("/logout");
                    }
                    if (status === 403) {
                        alert('You do not have permissions for this action')
                    }
                    return Promise.reject(error);
                }
            );
        }
    };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  .v-application a {
    text-decoration: none;
  }
</style>
