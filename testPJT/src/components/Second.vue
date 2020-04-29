<template>
    <div class="container">
      <P>Font Title  = {{ this.$store.state.fontSize.fontsSize.fontSize2 }}</P>
      <P>Font Content  = {{ this.$store.state.fontSize.fontsSize.fontSize1 }}</P>

  <div :style="[title]">
  어린 왕자의 별, 소행성 B 612
  </div>
  <div :style="context">
   이 소행성은 1909년도에 터키의 어느 천문학자가 만원경으로 딱 한 번 본 적이 있데요.
   </div>
   <div :style="title" >
   만원경
   </div>
  <div :style="context">
   그는 자신의 발견에 대해 국제 천문학회에서 어마어마한 시연을 해보였죠. 하지만 그의 옷차림 때문에 아무도 그 말을 믿지 않았데요. 어른들은 늘 그런 식이죠.
   </div>

   <div :style="title">
   터키 옷을 착용한, 터키 천문학자
   </div>
  <div :style="context">
   운이 좋게도, 소행성 B 612가 알려지게 된 결정적 계기는, 터키의 독재자가 자신의 국민들에게 모두 유럽식으로 옷을 입으라고 명령했기 때문이에요, 안 그럼 사형에 처하겠다고 엄포를 놓았거든요. 그래서 아주 기품 있는 복장을 하고서 1920년에 아까 그 천문학자가 다시 자신의 발견에 대해 시연을 해 보였죠. 그러자 모두가 그의 말을 믿게 되었답니다.
   </div>
  <br>
            <button @click="fontSizeChange">Text Size Change</button>
            <br>
            <button @click="moveHome"> Home </button>
    </div>
</template>

<script>

export default {

  data () {
    return {
      msg: 'test page'

    }
  },
  computed: {
    title: function () {
      return {
        fontSize: this.$store.state.fontSize.fontsSize.fontSize2 + 'px',
        fontWeight: 'bold',
        margin: '10px'
      }
    },
    context: function () {
      return {
        fontSize: this.$store.state.fontSize.fontsSize.fontSize1 + 'px',
        margin: '5px'
      }
    }
  },
  methods: {
    fontSizeChange () {
      this.$store.commit('setFontSize')
    },
    moveHome: function (event) {
      this.$router.push('/')
    }
  }
}
</script>

<style>
button{
  margin: 10px
}
</style>
