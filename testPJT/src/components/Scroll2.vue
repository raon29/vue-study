<template>
<div>
<div id='header'>
    <span v-for="(item, $index) in header" :key="$index" @click="selectItem(item)">
        {{ item.label }}  <font-awesome-icon class='icon' icon="angle-right"/>
    </span>
</div>
<div id='body'>
<table>
        <div v-for="item in childList">
            <tr @click="ShowChild(item)"> <td> {{ item.label }} </td> <font-awesome-icon class='icon' icon="angle-right" /> </tr>
        </div>
        <div v-for="(item, $index) in itemList" :key="$index">
            <tr> <td> {{ item.name }}</td> </tr>
        </div>
</table>
        <infinite-loading spinner="waveDots" @infinite="infiniteHandler" ></infinite-loading>
</div>
<modals-container @selected="ShowChild"></modals-container>
</div>
</template>

<script>
import org from '../assets/org.json'
import axios from 'axios'
import Listmodal from './forms/Listmodal'
import { mapActions } from 'vuex'

const api = '//hn.algolia.com/api/v1/search_by_date?tags=story'

export default {
  data () {
    return {
      page: 1,
      childList: org[0].child,
      itemList: [],
      header: org
    }
  },
  methods: {
    ...mapActions('modal', ['showModal']),

    infiniteHandler ($state) {
      axios.get(api, {
        params: {
          page: this.page
        }
      }).then(({ data }) => {
        if (data.hits.length) {
          this.page += 1
          this.itemList.push(...data.hits)
          $state.loaded()
        } else {
          $state.complete()
        }
      })
    },

    ShowChild (item) {
      // new item
      if (this.header.includes(item)) {
        while (this.header.length !== 0) {
          if (item === this.header.pop()) {
            this.header.push(item)
            break
          }
        }
      } else {
        this.header.push(item)
      }
      this.childList = item.child
    },

    selectItem (item) {
      // let allItem = org
      // let sibItem = org

      // 형제 찾기
      let sibItem = item.parent

      const modalInfo = {
        obj: this.$modal,
        name: 'List',
        type: 'list',
        component: Listmodal,
        data: {
          childList: sibItem
        },
        mWidth: '80%',
        mHeight: '50%'
      }
      this.showModal(modalInfo)
    }
  }
}
</script>

<style>
#header{
    float: left;
    margin: 0px;
    height: 50px;
    width: 100%;
    white-space: nowrap;
    background-color: blueviolet;
    overflow-x:auto;
    overflow-y:hidden;
    padding-top: 30px;
    position: fixed;
}
#body{
    height: 100%;
    width: 100%;
    background-color: whitesmoke;
    padding-top: 100px;
}

table {
    width: 300px;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
tr, td{
    padding: 10px;
    width: 300px;
    border: 1px solid #444444;
}
span {
    color: white;
    padding: 20px;
}
</style>
