<template>
    <div>
    <div style="margin-top: 15px;">

    <el-input placeholder="Search" v-model="InputText" @input="filtered(RealTime)">
        <el-button slot="append" icon="el-icon-search" @click="filtered(true)"></el-button>
    </el-input>

    </div>
    </div>
</template>

<script>
export default {
    props: ['Data','RealTime'],
    data() {
        return {
            InputText: ''
        }
    },
    created(){
        //모든 Data show
        this.filtered(true)
    },

    methods: {
        filter(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const results = this.Data.filter((element, index, array) => {
                        return element.title.toLowerCase().includes(this.InputText.toLowerCase())
                    })
                    resolve(results)
                }, 100)
            })
        },

        filtered(run) {
            // filter able 체크
            if( !run ){return}
            this.filter().then(response => {
                // 부모 컴포넌트로 데이터 전송
                this.$emit('searched', response)
            })

            //axios를 이용하여 구현시 (?)
            // axios.get(this.Data).then(res =>  { \
            //    const result = res.data.filter(element => element.title.toLowerCase().includes(this.InputText.toLowerCase())
            //  this.$emit('searched', result)
            // } })

        }
    }
}
</script>