<template>
<div>
<p>navigation1</p>
<input v-model="message" placeholder="여기를 수정해보세요">
<p>msg = {{message}}</p>
<br>
<button @click="goNext()">next</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    goNext () {
      console.log('next')
      this.$router.push({name: 'nav2', params: {message: this.message}})
    }
  }
}
</script>
