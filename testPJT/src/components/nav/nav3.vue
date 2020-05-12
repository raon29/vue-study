<template>
<div>
<p>navigation3</p>
<button @click="goBack()">back</button>
</div>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
