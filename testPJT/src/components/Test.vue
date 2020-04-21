<template>
  <div>
    <div class="wrapper">
      <div class="layout-container">
        <div class="flex-layout">
          <!-- <Header /> -->
          <!---->
          <LeftMenu />
          <!---->
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Main page'
    }
  }
}
</script>

<style lang="css" scoped></style>
