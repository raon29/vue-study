<template>
  <div class = 'leftmenu'>
    <ul v-for="item in menuItems" :key='item'>
      <li>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data: function () {
    return {
      menuItems: ['home', 'others', 'blalblahlbalhblajl']
    }
  },
  methods: {

  },
  created () {

  }
}
</script>
<style>

.leftmenu{
  position: relative;
  width: 60%;
  background-color:powderblue;
}

</style>
