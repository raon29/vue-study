<template>
<div>
  <header>
    선택
  </header>
    <table>
        <div v-for="(item, $index) in this.data.childList" :key="$index">
            <tr @click="selectItem(item)"> <td> {{ item.label }} </td> </tr>
        </div>
    </table>
</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectItem (item) {
      // Data 전달
      this.$emit('selected', item)
      // modal 창 close
      this.$emit('close')
    }
  }
}
</script>
<style>
header{
  padding: 10px;
  text-align: center;
  background-color: antiquewhite;
}
</style>
