<template>
    <div>
    <p>state = {{ state }}</p>
    <el-tabs type="border-card"
            :stretch="true"
            v-model="state">

        <!-- item 만큼 tab 만들기-->
        <el-tab-pane v-for="(tItem, idx) in tabItems" :key="idx" :label="tItem">
            <task :TaskName="tItem.name" :TaskColor="tItem.color"></task>
        </el-tab-pane>

    </el-tabs>
    </div>
</template>
<script>
import Task from './Task'
export default {
    components: {
        Task
    },
    data() {
        return {
            tabItems: [
                {name:'시작전', color='blue'}, 
                {name:'진행중', color='green'}, 
                {name:'지연', color='yellow'}, 
                {name:'완료', color='gray'}],
            state: 0
        }
    },
    methods: {
        // 받은 데이터 처리

    },
    
}
</script>