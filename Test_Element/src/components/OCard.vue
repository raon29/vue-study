<template>
    <div>
    <el-card class="box-card" :style="{'height':CardHeight, 'background-color':Color }">
        <div slot="header" class="clearfix">
            <span>O Title</span>
        </div>
        <div class="text item">
            o card 내용 어쩌구 <br>
            어쩌구 저쩌구 .. <br>
            ㅇㅇ <br>
        </div>
    </el-card>
    </div>
</template>

<script>
export default {
    props: ['CardHeight','Color']
}
</script>