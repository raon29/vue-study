<template>
    <div>
    <!-- search component 호출 -->
    <search :Data="Items"
            @searched="filterView" 
            :RealTime="true"></search>

    <el-table
    :data="FilteredItem"
    height="250"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="title"
      width="180">
    </el-table-column>
    <el-table-column
      prop="text"
      label="text"
      width="180">
    </el-table-column>
    </el-table>
    
    </div>
</template>
<script>
import Search from './Search'
export default {
    components: {
        Search
    },
    data() {
        return {
            // InputText: '',
            Items: [
                {title: 'apple', text: 'apple is good yamyam'},
                {title: 'banana', text: 'banana is good yamyam'},
                {title: 'carrot', text: 'carrot is soso yamyam'},
                {title: 'cat', text: 'cat is cute yamyam'},
                {title: 'card', text: 'card is good yamyam'}
            ],
            FilteredItem: []
        }
    },
    methods: {
        // 받은 데이터 처리
        filterView: function(list){
            this.FilteredItem = list
        }
    }
}
</script>