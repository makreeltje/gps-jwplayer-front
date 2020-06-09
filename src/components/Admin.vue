<template>
  <v-container>
    <v-card>
      <v-card-title>
        Users
        <v-spacer></v-spacer>
        <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
              :headers="headers"
              :items="getUsers"
              :search="search"
      >
        <template v-slot:item.actions="{item}">
          <v-btn-toggle>
            <v-btn small @click="selectUser(item), editDialog = true" color="#333">Edit</v-btn>
            <v-btn small @click="selectedUser = item, removeDialog = true" color="#333">Delete</v-btn>
          </v-btn-toggle>
        </template>
      </v-data-table>
      <v-card>
        <v-card-text>
          <div style="position: absolute; top: -42px" class="body-1 font-weight-bold">
            <v-btn color="#333" @click="addDialog = true">Add User</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-card>

    <v-dialog v-model="addDialog" persistent max-width="600px">
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
                <v-text-field v-model="registerUser.firstName" label="First name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field v-model="registerUser.lastName" label="Last name*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="registerUser.email" label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="registerUser.password" label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="registerUser.password_confirmation" label="Verify Password*" type="password"
                              required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="addDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addUser()">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog v-model="editDialog" persistent max-width="600px">
      <v-card>
        <v-card-title color="primary">
          <span class="headline">{{selectedUser.name}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="ID" v-model="selectedUser.id" disabled></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Name*" v-model="selectedUser.name"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Email*" required v-model="selectedUser.email"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                        label="Role*"
                        required
                        v-model="selectedUser.role"
                        hint="0 = No access, 1 = Allow edits, 2 = Full access"
                        persistent-hint></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Created At" v-model="selectedUser.created_at" disabled></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Updated At" v-model="selectedUser.updated_at" disabled></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" text @click="editDialog = false">Close</v-btn>
          <v-btn color="primary" text @click="updateUser(), editDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-dialog v-model="removeDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">This action is not reversible</v-card-title>
        <v-card-text>This will delete the selected user. Are you sure?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteUser(), removeDialog = false">Yes</v-btn>
          <v-btn color="green darken-1" text @click="removeDialog = false">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snack.generalSnack" :color="this.snack.generalSnackColor" :top="false"
                :timeout="this.snack.generalSnackTimeout">
      {{ snack.generalSnackText }}
      <v-btn text @click="snack.generalSnack = false" class="font-weight-bold">Close</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Admin",
        data() {
            return {
                snack: {
                    generalSnack: false,
                    generalSnackColor: "info",
                    generalSnackText: "",
                    generalSnackTimeout: 5000,
                },
                selectedUser: {},
                registerUser: {},
                removeDialog: false,
                editDialog: false,
                addDialog: false,
                search: '',
                headers: [
                    {
                        text: 'ID',
                        align: 'start',
                        value: 'id'
                    },
                    {
                        text: 'Name',
                        align: 'start',
                        sortable: false,
                        value: 'name'
                    },
                    {text: 'Email', value: 'email'},
                    {text: 'Created At', value: 'created_at'},
                    {text: 'Updated At', value: 'updated_at'},
                    {text: 'Role', value: 'role'},
                    {
                        text: '',
                        value: 'actions',
                        align: 'end',
                        sortable: false
                    }

                ]
            }
        },
        methods: {
            ...mapActions(['fetchUsers']),
            showSnack(color, message) {
                this.snack.generalSnackColor = color;
                this.snack.generalSnackText = message;
                this.snack.generalSnack = true;
                this.snack.generalSnackTimeout = 5000;
            },
            selectUser(user) {
                this.selectedUser = user
            },
            updateUser() {
                this.$store.dispatch('updateUser', this.selectedUser)
                    .then(() => {
                        this.showSnack('primary', 'User updated successfully')
                    })
                    .catch(error => {
                        this.showSnack('error', error.data.message)
                    })
            },
            deleteUser() {
                this.$store.dispatch('deleteUser', this.selectedUser)
                    .then(() => {
                        this.showSnack('primary', 'User deleted successfully')
                        this.fetchUsers()
                    })
                    .catch(error => {
                        this.showSnack('error', error.data.message)
                    })
            },
            addUser() {
                if(this.registerUser.password != this.registerUser.password_confirmation)
                {
                    this.showSnack('warning', 'Passwords do not match')
                    return;
                }
                this.$store.dispatch("register", {
                    name: this.registerUser.firstName + " " + this.registerUser.lastName,
                    email: this.registerUser.email,
                    password: this.registerUser.password,
                    password_confirmation: this.registerUser.password_confirmation
                })
                    .then(() => {
                        this.addDialog = false;
                        this.showSnack('success', 'User added successfully');
                        this.fetchUsers();
                    })
                    .catch(error => {
                        this.showSnack('error', (error.response && error.response.data.errors.email[0]) || error.message || error.toString())
                    });
            }
        },
        mounted() {
            this.fetchUsers()
        },
        computed: {
            ...mapGetters(['getUsers'])
        }
    }
</script>

<style scoped>

</style>