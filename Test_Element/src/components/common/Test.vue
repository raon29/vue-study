<template>
    <div>
    
    <o-card CardHeight="400px" Color="lightblue"></o-card>
    
    <el-carousel indicator-position="outside" style="margin-top:20px" :autoplay="false" :height="krListHeight">
        <el-carousel-item v-for="item in 3" :key="item">
            <kr-card  Color="cornsilk" @sizeChange='heightChange'></kr-card>
        </el-carousel-item>
    </el-carousel>
    
    </div>
</template>
<script>
import OCard from '../OCard'
import KRCard from '../KRCard'
export default {
    components: {
        'o-card': OCard,
        'kr-card': KRCard
    },
    data() {
        return {
            krListHeight: '100px'
        }
    },
    methods: {
        heightChange: function(height){
            this.krListHeight = height
        }
    },
    
}
</script>
<style>
a {
    color:lightblue;
}
</style>