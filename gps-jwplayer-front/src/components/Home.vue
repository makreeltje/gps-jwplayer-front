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
        <v-col v-for="n in 12" :key="n" cols="12" md="3">
          <v-skeleton-loader loading="loading" class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
  </v-layout>
</template>

<script>
export default {
    data: () => ({
      loading: false,
      transition: 'scale-transition',
      transitions: [
        {
          text: 'None',
          value: undefined,
        },
        {
          text: 'Fade Transition',
          value: 'fade-transition',
        },
        {
          text: 'Scale Transition',
          value: 'scale-transition',
        },
      ],
    })
}
</script>