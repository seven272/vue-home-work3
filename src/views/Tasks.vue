<template>
  <h1 class="text-white center" v-if="allTasks.length === 0">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks.length }}</h3>
    <label class="text-white" for="tasks">Показать задачи: </label>
    <select id="tasks" style="font-size: 15px; margin-bottom: 10px;" v-model="selectTasks">
      <option value="all">Все</option>
      <option value="activ">Активные</option>
      <option value="inwork">В работе</option>
      <option value="finish">Завершенные</option>
      <option value="cancel">Отмененные</option>
    </select>
    <div class="card"
    v-for="(elem, ind) in sortTasks"
    :key="ind"
    >
      <h2 class="card-title">
        {{ elem.title }}
        <app-status :type="elem.status" :text="elem.text"></app-status>
      </h2>
      <p>
        <strong>
          <small>
            {{ elem.date }}
          </small>
        </strong>
      </p>
      <router-link to="/task">
        <app-button :class-btn="'primary'" @click-btn="sendIdTask(elem.id)">Посмотреть</app-button>
      </router-link>
      <app-button :class-btn="'danger'" @click-btn="deleteTask(elem.id)">Удалить</app-button>
    </div>
  </template>
</template>

<script>
import AppStatus from '@/components/AppStatus'
import { mapState, mapGetters, useStore } from 'vuex'
import { ref, computed } from 'vue'

export default {
  name: 'Tasks',
  components: { 'app-status': AppStatus },
  setup () {
    const store = useStore()
    const allTasks = store.state.AddTask.arrayTasks

    const selectTasks = ref('all')

    function sendIdTask (id) {
      store.commit('SET_ID', id)
    }
    function deleteTask (id) {
      store.commit('DEL_TASK', id)
    }

    const sortTasks = computed(() => {
      let tasks = allTasks
      if (selectTasks.value === 'all') {
        tasks = allTasks
      } else if (selectTasks.value === 'activ') {
        tasks = allTasks.filter((elem) => {
          return elem.status === 'active'
        })
      } else if (selectTasks.value === 'inwork') {
        tasks = allTasks.filter((elem) => {
          return elem.status === 'pending'
        })
      } else if (selectTasks.value === 'finish') {
        tasks = allTasks.filter((elem) => {
          return elem.status === 'done'
        })
      } else if (selectTasks.value === 'cancel') {
        tasks = allTasks.filter((elem) => {
          return elem.status === 'cancelled'
        })
      }
      return tasks
    })

    return {
      selectTasks,
      sendIdTask,
      deleteTask,
      sortTasks
    }
  },

  computed: {
    ...mapState({
      allTasks: (state) => state.AddTask.arrayTasks
    }),
    ...mapGetters({
      findTask: 'findTask',
      activeTasks: 'activeTasks'
    })
  }
}
</script>
