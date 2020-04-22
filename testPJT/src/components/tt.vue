<template>
    <div class="container">
        <div>
            <button @click="oepnDialog">Dialog Test</button>
            <button @click="oepnModal">Modal Test</button>
        </div>
    </div>
</template>

<script>
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
    openDialog () {
      console.log('open dialog')
      // TODO
    },
    openModal () {
      console.log('open dialog')
      // TODO
    }
  }
}
</script>
