<template>
<div>
<p>navigation2</p>
<br>
<input v-model="message" placeholder="여기를 수정해보세요">
<p>msg = {{message}}</p>
<button @click="goNext()">next</button>
<button @click="goBack()">back</button>

<div>
    <tabs>
      <tab name="About Us" :selected="true">
        <p>Here is the content for the about us tab.</p>
      </tab>
      <tab name="About Our Culture">
        <p>Here is the content for the about our culture tab.</p>
      </tab>
      <tab name="test">
      <scroll></scroll>
      </tab>
    </tabs>
</div>
</div>
</template>

<script>
import tab from '../forms/Tab'
import tabs from '../forms/Tabs'
import scroll from '../Scroll'

export default {
  components: {
    tab, tabs, scroll
  },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    goNext () {
      this.$router.push('nav3')
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.tabs{
  height: 100px;
}
</style>
