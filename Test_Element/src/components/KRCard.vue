<template>
    <div>
    
    <el-card class="box-card" :style="{'height':CardHeight, 'background-color':Color}" >
        <!--
        <div slot="header" class="clearfix">
            <span>kr Title</span>
        </div>
        -->
        <div class="text item" @click="oListView()">
            조그마난 kr card <br>
            kr card 내용 어쩌구 <br>
            어쩌구 저쩌구 .. <br>
        </div>
    </el-card>

    <!-- 연결된 O List -->
    <el-card class="box-card" :style="{'display':oView}" v-for="(item, idx) in connectOList" :key="idx">
        <div class="text item">
            {{ item.label}}
        </div>
    </el-card>

    </div>
</template>

<script>
export default {
    props: ['CardHeight','Color'],
    data() {
        return {
            oView: 'none',
            connectOList:[
                {label: '연결된 O 1' ,value: '1'},
                {label: '연결된 O 2' ,value: '2'},
                {label: '연결된 O 3' ,value: '3'}
            ],
        }
    },
    methods: {
        oListView(){
            var height = 100
            if(this.oView == 'none'){
                this.oView = 'block'
                this.$emit('sizeChange', height +( 50 * this.connectOList.length) + 'px')
            } else{
                this.oView = 'none'
                this.$emit('sizeChange', height+'px')
            }
        }
    }
}
</script>