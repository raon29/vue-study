<template>
    <div class="container">
      <P>Font Title  = {{ this.$store.state.fontSize.fontsSize.fontSize2 }}</P>
      <P>Font Content  = {{ this.$store.state.fontSize.fontsSize.fontSize1 }}</P>

  <div :style="[title]">
  황갈색 보아 뱀
  </div>
  <div :style="context">
   책엔 이렇게 쓰여 있더라고, 보아 뱀은 씹지도 않고 산 채로 먹이를 삼킨데. 그런 다음엔 소화를 위해 여섯 달 동안 꿈쩍 도 않고 잠만 잔데.
   난 정말 이 얘기를 듣고 정글의 모험에 관한 많은 생각들이 들더라, 이어 색연필로 내 첫 번째 그림을 그려보게 시작했지. 바로 이게 그거 야.
   </div>
   <div :style="title" >
   솜브레로(챙이 넓은 멕시코 모자)
   </div>
  <div :style="context">
   난 이 걸작을 어른들께 보여드리며 내 그림이 무섭지 않냐고 물어보았지. 그들이 말하데. 뭐가 무섭다는 거니?
   내 그림은 그냥 모자 아니냐는 거야. 아니라고, 코끼리를 소화시키고 있던 보아 뱀이라고. 그래서 보아 뱀 안에도 그렸더니 그제야 어른들은 이해하지 뭐야. 항상 이런 식이야, 어른들은 설명이 필요해. 내 두 번째 그림이 이거야.
   </div>

   <div :style="title">
   보아 뱀
   </div>
  <div :style="context">
   그러자 어른들은 내게 충고하길 엉뚱한 보아 뱀이나 그리지 말고 지리, 역사, 샘(계산)나 문법에 취미를 들여보래. 그리 하여 난 여섯 날에 화가의 꿈을 접어야 했지. 내 첫 그림과 두 번째 그림이 영 쓸모 없자 낙담하고 말았거든. 나의 이런 일 들에 대해 어른들은 전혀 관심도 없었지. 설명을 해대는 아인 피곤하다는 투였으니.
   그래서 다른 직업을 선택하게 된 거야. 그게 하늘을 나는 비행사지. 난 정말 전 세계를 날아다녔어. 그리 되니 지리학도 좀 도움이 되데. 난 중국이나 애리조나(미국의 주 이름)도 한눈에 첫 보면 알았지. 밤에 길을 잃었을 때도 지리학에 대한 앎 이 도움이 되었고 말이야.
   살아오며 다양한 사람들을 만났어, 대갠 심각한 어른들이었지. 난 그들 사이에 살아야 했으니깐. 그럼 난 그들에게 내 그림을 보여주었단다. 내 의견을 개진하지 않고 말이야.
   명석해 보이는 이들을 만날 때면 난 아끼며 보관해오던 내 첫 그림을 그분들께 보여주었지. 그들이 정말로 이해할까 알 고 싶었거든. 하지만 대답은 항상 이랬어. 모자군요. 그럼 난 보아 뱀 얘긴 꺼내지도 않았지 물론 숲 얘기나 별 얘기도 하지 않았어. 난 그들에게 내 자신을 맞추며, 기껏 '브리지'(카드 게임의 일종), 골프, 정치 그리고 술에 관한 얘기만 했을 뿐이 야. 그럼 어른들은 죄다 날 합리적인 사람이라 말하며 기뻐들 했지.
  </div>
  <br>
            <button @click="openDialog">Dialog Test</button>
            <br>
            <button @click="openModal">Modal Test</button>
            <br>
            <button @click="toast">Toast Test</button>
            <br>
            <button @click="fontSizeChange">Text Size Change</button>
            <br>
            <button @click="moveNext"> Next Page </button>
    </div>
</template>

<script>
import Dialog from './Dialog'
import { mapActions } from 'vuex'

export default {
  name: 'tt',
  data () {
    return {
      msg: 'Main page'

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

    ...mapActions('modal', ['showModal']),
    ...mapActions('modal', ['showDialog']),
    ...mapActions('modal', ['showToast']),

    openDialog () {
      const modalInfo = {
        obj: this.$modal,
        name: 'Organization',
        type: 'org',
        component: Dialog,
        mWidth: '80%',
        mHeight: '80%'
      }
      this.showModal(modalInfo)
    },
    openModal () {
      const dialogInfo = {
        obj: this.$modal,
        message: 'This is message',
        component: Dialog,
        mWidth: '50%',
        mHeight: '30%',
        btnOKName: '신청',
        btnCanName: '취소'
      }
      this.showDialog(dialogInfo)
    },
    toast () {
      const toastInfo = {
        obj: this.$toasted,
        message: 'Toast test~',
        options: {
          theme: 'toasted-primary',
          position: 'top-right',
          duration: 2000
        }
      }
      this.showToast(toastInfo)
    },

    // ...mapMutations(fontSizeChange: 'fontSizeChange')

    fontSizeChange () {
      this.$store.commit('setFontSize')
    },
    moveNext: function (event) {
      this.$router.push('/sec')
    }
  }
}
</script>

<style>
button{
  margin: 10px
}
</style>
