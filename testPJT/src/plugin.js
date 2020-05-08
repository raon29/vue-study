/* eslint-disable one-var */
/* eslint-disable new-cap */
let http
let result = {}
let queue = []
let during = {short: 'short', long: 'long'} // toast 시간
let fetchAPI = () => {}
let nativeUI = () => {}

let hone = {
  channel: new fetchAPI()
}
window['hone'] = hone
window['during'] = during

// MARK : Prototype

/**
 * iOS만해당 되는 함수로 Xhr요청 후, 네이티브에서 fetchFromNative함수를 호출하여 데이터 전송
 */
fetchAPI.prototype.fetchFromNative = () => {
  let data = JSON.stringify(queue)
  queue.length = 0
  return data
}

/**
 * 네이티브에서 진행 된 로직을 수행한 후, callFromNative함수를 호출하여 결과 데이터 전송
 */
fetchAPI.prototype.callFromNative = function (resultCode, callbackId, resultData, keepAlive) {
  result[callbackId] = decodeURIComponent(resultData)
}

/**
 * toast 메시지 출력
 * @param {String} message toast 메세지
 * @param {during} during toast 시간 short / long
 */
nativeUI.prototype.toast = (message, during, callback) => {
  let callbackId = uuid()

  execute('ui', 'toast', [message, during], callbackId)
  if (callback != null) {
    fLoop(callbackId, callback)
  } else {
    delete result[callbackId]
  }
}

/**
 * yyyyMMdd hhmm picker 출력
 * @param {String} year 년
 * @param {String} month 월
 * @param {String} day 일
 * @param {String} hour 시
 * @param {String} min 분
 */
nativeUI.prototype.showDateTimePicker = (year, month, day, hour, min, callback) => {
  let callbackId = uuid()
  execute('ui', 'showDatePicker', ['yMdhm', year, month, day, hour, min], callbackId)
  if (callback != null) {
    fLoop(callbackId, callback)
  } else {
    delete result[callbackId]
  }
}

// MARK : Function

/**
 * 요청한 callback에 대한 반환값처리를 위한 ID 생성
 */
function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

/**
 * iOS에서 처리하기 위한 xhr 요청 함수
 * @param {*} cmd 명령어 json 으로 전송
 */
function url (cmd) {
  queue.push(cmd)
  http = new XMLHttpRequest()
  http.open('HEAD', '/!hone_exec?' + (+new Date()), true)
  http.setRequestHeader('vc', /.*\((\d*)\)/.exec(navigator.userAgent)[1])
  http.setRequestHeader('rc', uuid())
  http.setRequestHeader('ct', 'hone.channel')
  http.onreadystatechange = function () {
    hone.fetchFromNative()
    if (this.readyState === this.DONE) {

    }
  }
  http.send()
}

/**
  * 차후, rxjs 또는 Promise, callback으로 처리되어야함 (머리가 굳어서 setInterval로 처리)
  * @param {String} callbackId callbackID로 처리된 result를 callback 으로 넘긴 후, 제거
  * @param {*} callback
  */
function fLoop (callbackId, callback) {
  let loop = setInterval(() => {
    if (result[callbackId] != null) {
      callback(result[callbackId])
      delete result[callbackId]
      clearInterval(loop)
    }
  }, 0)
}

/**
 * plugin 실행 함수
 * @param {String} name 플러그인 종류 (sharedpreference, ui 등)
 * @param {String} method 플러그인 종류에 따른 실행함수(get, set, toast 등)
 * @param {Array} params 플러그인 종류에 따른 파라미터를 배열로 전달
 * @param {String} callbackId callbackID
 */
function execute (name, method, params, callbackId) {
  let sParam = JSON.stringify(params)
  let cmd = [callbackId, name, method, 'N', sParam]
  result[callbackId] = null
  if (/Android/i.test(navigator.userAgent)) {
    window.prompt('hone://' + 'hone.channel' + '/', JSON.stringify(cmd))
  } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    url(JSON.stringify(cmd))
  } else {}
}

let Plugin = {
  get (key, defaultValue, callback) {
    let callbackId = uuid()
    execute('sharedpreference', 'get', [key, defaultValue], callbackId)
    fLoop(callbackId, callback)
  },
  set (key, defaultValue, callback) {
    let callbackId = uuid()
    execute('sharedpreference', 'set', [key, defaultValue], callbackId)
    fLoop(callbackId, callback)
  },
  ui: new nativeUI()
}

export default Plugin
