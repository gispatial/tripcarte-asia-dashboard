Vue.component(tuiVueBarcode.name, tuiVueBarcode);

const app = new Vue({
  el:'#app',
  data() {
    return {
      code: 'lorem ipsum',
      height: 100
    }
  },
  computed: {
    options() {
      return {
        height: this.height
      }
    }
  }
})
