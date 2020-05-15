<template>
<div>
    <v-row dense>
    <v-col
          v-for="idx in 8"
          :cols="6"
        >
    <v-card
        id="card"
        class="mx-auto"
        max-width="350px"
        @click="cardContent(idx)">
        <v-img
        class="white--text align-end"
        height="100px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0">Number {{idx}}</v-card-subtitle>

        <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>
            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="orange"
                text>
            Share
            </v-btn>

            <v-btn
                color="orange"
                text>
            Explore
            </v-btn>
        </v-card-actions>
    </v-card>
    </v-col>
    </v-row>
</div>
</template>
<script>
export default {
  methods: {
    cardContent (idx) {
      // 화면 이동
      console.log('card click')
      this.$router.push('nav' + idx)
    }
  }
}
</script>
<style>
#card {
    margin: 10px;
}
</style>
