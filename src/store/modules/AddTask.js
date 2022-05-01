/* eslint-disable no-return-assign */
export default {
  state: () => ({
    idTask: '',
    arrayTasks: JSON.parse(localStorage.getItem('list-tasks')) ?? [],
    statuses: ['active', 'pending', 'cancelled', 'done']
  }),
  getters: {
    findTask (state) {
      const task = state.arrayTasks.find(function (elem) {
        return elem.id === state.idTask
      })
      return task
    },
    activeTasks (state) {
      const actives = state.arrayTasks.filter((elem) => {
        return elem.status === state.statuses[0]
      })
      return actives
    }
  },
  mutations: {
    SET_TASK: (state, task) => {
      state.arrayTasks.push(task)
      localStorage.setItem('list-tasks', JSON.stringify(state.arrayTasks))
    },
    CHECK_TASKS: (state) => {
      if (localStorage.getItem('list-tasks')) {
        state.arrayTasks = JSON.parse(localStorage.getItem('list-tasks'))
      }
    },
    SET_ID: (state, payload) => {
      state.idTask = payload
    },
    DEL_TASK: (state, idTask) => {
      const ind = state.arrayTasks.findIndex((elem) => {
        return elem.id === idTask
      })
      state.arrayTasks.splice(ind, 1)
      localStorage.setItem('list-tasks', JSON.stringify(state.arrayTasks))
    },
    SET_STATUS: (state, payload) => {
      const st = payload.keyStatus
      const id = payload.keyID
      const task = state.arrayTasks.find((elem) => {
        return elem.id === id
      })
      const ind = state.arrayTasks.findIndex((elem) => {
        return elem.id === id
      })
      if (st === state.statuses[3]) {
        task.text = 'Завершен'
        task.status = state.statuses[3]
        state.arrayTasks[ind] = task
      } else if (st === state.statuses[2]) {
        task.text = 'Отменен'
        task.status = state.statuses[2]
        state.arrayTasks[ind] = task
      } else if (st === state.statuses[1]) {
        task.text = 'В работе'
        task.status = state.statuses[1]
        state.arrayTasks[ind] = task
      }
    }
  },
  actions: {
  }
}
