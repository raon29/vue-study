
const state = {
  fontsSize: {
    'fontSize1': 10,
    'fontSize2': 20,
    'fontSize3': 30
  },
  fontIncrese: true
}

const mutations = {
  setFontSize (state) {
    var increase = 0

    if (state.fontIncrese) {
      increase = 5
    } else { increase = -5 }

    for (var font in state.fontsSize) {
      state.fontsSize[font] += increase
    }
    state.fontIncrese = !state.fontIncrese
  }
}

export default {
  state,
  mutations
}
