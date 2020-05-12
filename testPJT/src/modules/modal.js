const state = {

  m_modalInfo: {
    obj: null,
    type: '',
    name: '',
    component: null,
    mWidth: '',
    mHeight: ''
  },

  m_dialogInfo: {
    obj: null,
    message: '',
    type: '',
    name: '',
    component: null,
    mWidth: '',
    mHeight: '',
    btnOKName: '',
    btnCanName: ''
  },

  resultVal: false // dialog btn click 값 리턴

}

const actions = {
  /* 모달 팝업 호출 */
  showModal ({ state, commit }, modal) {
    commit('setModalParams', modal)

    modal.obj.show(
      modal.component,
      {
        modal: modal.obj,
        name: modal.name,
        data: modal.data
      },
      {
        width: modal.mWidth,
        height: modal.mHeight,
        clickToClose: true
      }
    )
  },
  hideModal ({ state, commit }, modal) {
    modal.obj.hide()
  },
  showDialog ({ commit }, dialog) {
    commit('setDialogParams', dialog)
    dialog.obj.show(
      dialog.component,
      {
        modal: dialog.obj,
        name: dialog.name,
        message: dialog.message,
        btnOKName: dialog.btnOKName,
        btnCanName: dialog.btnCanName
      },
      {
        width: dialog.mWidth,
        height: dialog.mHeight
      }
    )
  },
  showToast (context, toast) {
    console.log(toast)
    console.log(toast.message)
    console.log(toast.options)

    toast.obj.show(toast.message, toast.options)
  },

  setResultVal ({ commit }, resultVal) {
    commit('setResultVal', resultVal)
  }
}
const mutations = {
  setModalParams (state, modal) {
    state.m_modalInfo.name = modal.name
    state.m_modalInfo.type = modal.type
    state.m_modalInfo.value = modal.value
    state.m_modalInfo.component = modal.component
    state.m_modalInfo.mWidth = modal.width
    state.m_modalInfo.mHeight = modal.height
  },
  setDialogParams (state, dialog) {
    state.m_dialogInfo.message = dialog.message
    state.m_dialogInfo.type = dialog.type
    state.m_dialogInfo.name = dialog.name
    state.m_dialogInfo.component = dialog.component
  },
  setResultVal (state, resultVal) {
    state.resultVal = resultVal
  }
}

const getters = {}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
