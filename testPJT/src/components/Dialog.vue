<template>
  <div>
    <p>hi Dialog 입니다</p>
    <p> {{ message }} </p>
    <button v-if="btnOKName != null" @click='handleOk'>{{ btnOKName }}</button>
    <button v-if="btnCanName != null"  @click='handleCancle'>{{ btnCanName }}</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    message: '',
    btnOKName: '',
    btnCanName: ''
  },
  computed: {},
  methods: {
    ...mapActions('modal', ['setResultVal']),
    handleOk () {
      /* return true */
      this.setResultVal(true)
      this.$emit('close')
    },
    handleCancle () {
      /* return false */
      this.setResultVal(false)
      this.$emit('close')
    }
  }
}
</script>

<style></style>
