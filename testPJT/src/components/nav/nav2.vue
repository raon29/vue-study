<template>
<div>
<p>navigation2</p>
<input v-model="message" placeholder="여기를 수정해보세요">
<p>msg = {{message}}</p>
<br>
<button @click="goNext()">next</button>
<button @click="goBack()">back</button>

</div>
</template>

<script>
export default {
  props: ['message'],
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
