import Vue from 'vue'
import App from './app.vue'
import './styles/index.styl'

var root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render (h) {
    return h(App)
  }
}
).$mount(root)
