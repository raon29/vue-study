<template>
<div>
<p>navigation3</p>
<button @click="goBack()">back</button>

<p> this is tab </p>

<div>
  <!-- tab 선택 부분  선택된 tab animation customize 필요 -->
  <span class='a' v-for="item in items" @click="changeComp(item)">  {{ item.name }} </span>
  <!-- 선택한 tab에 해당하는 Component 호출 -->
    <keep-alive> <!-- 캐싱 tag -->
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
</div>

</div>

</template>

<script>
import scroll from '../Scroll'
import scroll2 from '../Scroll2'

export default {
  data () {
    return {
      items: [
        {name: 'first', comp: 'scroll'},
        {name: 'second', comp: 'test'},
        {name: 'third', comp: 'scroll2'}
      ],
      currentTabComponent: 'test'
    }
  },
  components: {
    scroll, scroll2
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    changeComp (item) {
      this.currentTabComponent = item.comp
    }
  }
}
</script>
<style>
.a{
  background-color: aqua;
  margin: 10px;
  padding: 10px;
}
</style>
