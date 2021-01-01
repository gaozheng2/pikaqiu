import string from './css.js'

const player = {
  n: 0,
  time: 1,
  intervalId: undefined,
  isPause: false,
  isEnd: false,
  events: {
    '#btnPause': 'pause',
    '#btnFast': 'fast',
  },
  init: () => {
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      // 如果 key 是 events 的自身属性，避免 propotype 污染
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  play: () => {
    player.reset()
    if (player.isEnd) return
    player.intervalId = setInterval(() => {
      // 为计时器设置一个ID
      demo1.innerHTML = string.substr(0, player.n)
      demo2.innerText += string[player.n]
      demo2.scrollTop = demo2.scrollHeight
      player.n += 1
      if (player.n === string.length) {
        player.reset()
        player.isEnd = true
      }
    }, player.time)
  },
  reset: () => {
    // 停止计时器
    window.clearInterval(player.intervalId)
  },
  pause: () => {
    if (player.isPause) {
      btnPause.innerText = '暂停'
      player.isPause = false
      player.play()
    } else {
      player.reset()
      btnPause.innerText = '播放'
      player.isPause = true
    }
  },
  fast: () => {
    if (btnFast.innerText === '慢速') {
      btnFast.innerText = '快速'
      player.time = 10
    } else {
      btnFast.innerText = '慢速'
      player.time = 1
    }
    if (!player.isPause) {
      player.play()
    }
  },
}

player.init()
