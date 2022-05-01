<template>
  <div class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <app-status :type="task.status" :text="task.text"></app-status></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <app-button :class-btn="''" @click-btn="sendStatusTask(task.id, 'pending')">Взять в работу</app-button>
      <app-button :class-btn="'primary'" @click-btn="sendStatusTask(task.id, 'done')">Завершить</app-button>
      <app-button :class-btn="'danger'" @click-btn="sendStatusTask(task.id, 'cancelled')">Отменить</app-button>
      <app-button :class-btn="'warning'" @click-btn="goToAllTasks">Назад к списку</app-button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { mapGetters, mapState, useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Task',
  setup () {
    const store = useStore()
    const router = useRouter()

    function goToAllTasks () {
      router.push('/')
    }

    function sendStatusTask (id, status) {
      const payload = {
        keyID: id,
        keyStatus: status
      }
      store.commit('SET_STATUS', payload)
    }

    return {
      goToAllTasks,
      sendStatusTask
    }
  },
  components: {
    'app-status': AppStatus
  },
  computed: {
    ...mapGetters({
      task: 'findTask'
    }),
    ...mapState({
      allTasks: (state) => state.AddTask.arrayTasks
    })
  }
}
</script>

<style scoped>

</style>
