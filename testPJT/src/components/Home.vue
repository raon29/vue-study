<template>
<div>
    <header>
        home
    </header>
    <body>
        <!-- switch toggle -->
        <toggle-button @change="changeView($event.value)"
            id="changed-font"
            :width="100"
            :height="40"
            :value="true"
            :color="{checked: '#FF473B', unchecked:'#FF877B' }"
            :labels="{checked: '상세', unchecked: '간단히'}"/>

        <!--  card view  -->
        <keep-alive> <!-- 캐싱 tag -->
            <component id="card" v-bind:is="cardView"></component>
        </keep-alive>

    </body>
</div>
</template>

<script>
export default {
  data () {
    return {
      cardView: 'card-detail'
    }
  },
  methods: {
    changeView (chk) {
      console.log(chk)
      if (chk) {
        this.cardView = 'card-detail'
      } else {
        this.cardView = 'card'
      }
    }
  }

}
</script>
<style>
.vue-js-switch#changed-font {
  font-size: 14px !important;
}
</style>
<style>

</style>
