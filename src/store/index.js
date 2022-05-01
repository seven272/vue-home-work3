import { createStore } from 'vuex'
import AddTask from './modules/AddTask'

export default createStore({
  state: () => ({
    one: '1111'
  }),
  mutations: {
  },
  actions: {
  },
  modules: {
    AddTask
  }
})
