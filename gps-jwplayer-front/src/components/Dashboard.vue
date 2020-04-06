<template>
  <v-row>
    <v-col sm="12">
      <v-row no-gutters>
        <v-col cols="6" sm="6">
          <v-card class="pa-2">
            <v-overflow-btn
              class="my-2"
              :items="dropdown_font"
              label="Overflow Btn"
              target="#dropdown-example"
            ></v-overflow-btn>
            <v-textarea filled auto-grow label="Captions" rows="15" row-height="30" shaped></v-textarea>
            <v-layout row>
              <v-flex xs1>
                <v-subheader>Label here</v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-text-field></v-text-field>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>
        <v-col cols="6" sm="6">
          <v-card class="pa-2">
            <v-skeleton-loader loading="loading" class="mx-auto" max-width="500" type="card"></v-skeleton-loader>
          </v-card>
        </v-col>
      </v-row>
      <v-card class="pa-2" outlined tile>Level 1: .col-sm-12</v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  
};
</script>