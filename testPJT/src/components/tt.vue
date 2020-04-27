<template>
    <div class="container">
        <div>
            <button @click="openDialog">Dialog Test</button>
            <br>
            <button @click="openModal">Modal Test</button>
            <br>
            <button @click="toast">Toast Test</button>
        </div>
    </div>
</template>

<script>
import Dialog from './Dialog'
import { mapActions } from 'vuex'

export default {
  name: 'tt',
  data () {
    return {
      msg: 'Main page'
    }
  },
  computed: {

  },
  methods: {
    ...mapActions('modal', ['showModal']),
    ...mapActions('modal', ['showDialog']),
    ...mapActions('modal', ['showToast']),

    openDialog () {
      const modalInfo = {
        obj: this.$modal,
        name: 'Organization',
        type: 'org',
        component: Dialog,
        mWidth: '80%',
        mHeight: '80%'
      }
      this.showModal(modalInfo)
    },
    openModal () {
      const dialogInfo = {
        obj: this.$modal,
        message: 'This is message',
        component: Dialog,
        mWidth: '50%',
        mHeight: '30%',
        btnOKName: '신청',
        btnCanName: '취소'
      }
      this.showDialog(dialogInfo)
    },
    toast () {
      const toastInfo = {
        obj: this.$toasted,
        message: 'Toast test~',
        options: {
          theme: 'toasted-primary',
          position: 'top-right',
          duration: 2000
        }
      }
      this.showToast(toastInfo)
    }
  }
}
</script>
