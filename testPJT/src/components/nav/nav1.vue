<template>
<div class="text-center">

<p>navigation1</p>
<br>
<v-btn rounded color="primary" dark @click="goNext()">next</v-btn>

 <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      :fixed-tabs="true"
    >
      <v-tab
        v-for="item in items"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" >
      <v-tab-item
        v-for="item in items"
      >
      <keep-alive> <!-- 캐싱 tag -->
        <component v-bind:is="item.comp"></component>
      </keep-alive>
<!--
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
-->

      </v-tab-item>
    </v-tabs-items>
</div>
</template>

<script>
import scroll from '../Scroll'
import scroll2 from '../Scroll2'
import test from '../Test'
export default {
  data () {
    return {
      message: '',
      tab: null,
      items: [
        {name: 'first', comp: 'scroll'},
        {name: 'second', comp: 'test'},
        {name: 'third', comp: 'scroll2'}
      ]
    }
  },
  components: {
    test, scroll, scroll2
  },
  methods: {
    goNext () {
      console.log('next')
      this.$router.push('nav2')
    }
  }
}
</script>
<style>
.v-tabs-items{
  height: 300px;
  overflow-y: auto;
}
.v-bottom-navigation {
  background-color: black;
}
</style>
