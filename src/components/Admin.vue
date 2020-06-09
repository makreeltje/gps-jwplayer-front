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
            :items="desserts"
            :search="search"
    ></v-data-table>
  </v-card>
  </v-container>
</template>

<script>
    export default {
        name: "Admin",
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
            { text: 'Email', value: 'email'},
            { text: 'Created At', value: 'created_at'},
            { text: 'Updated At', value: 'updated_at'}

        ]
    }
</script>

<style scoped>

</style>