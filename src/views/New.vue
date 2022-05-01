<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    <app-button :class-btn="'primary'" @click-btn="multyplyMethods " :disabled="blockButton">Создать</app-button>
  </form>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'New',
  setup () {
    const store = useStore()
    const router = useRouter()

    const title = ref('')
    const date = ref('')
    const description = ref('')
    const status = ref('active')
    const text = ref('Активен')

    function checkDate () {
      const timeNow = new Date()
      const timeTask = new Date(date)
      if (timeTask < timeNow) {
        status.value = 'done'
        text.value = 'Завершен'
      }
    }

    function addTask () {
      checkDate()
      const objTask = {
        id: Math.random().toString(16).slice(2),
        title: title,
        date: date,
        description: description,
        status: status,
        text: text
      }
      store.commit('SET_TASK', objTask)
    }

    function goToAllTasks () {
      router.push('/')
    }

    const multyplyMethods = function () {
      goToAllTasks()
      addTask()
    }

    const blockButton = computed(() => {
      let bulian = false
      if (!title.value || !date.value || !description.value) {
        bulian = true
      }
      return bulian
    })

    return {
      title: title,
      date: date,
      description: description,
      status: status,
      text: text,
      checkDate,
      addTask,
      multyplyMethods,
      goToAllTasks,
      blockButton
    }
  },
  computed: {
    ...mapState({
      allTasks: (state) => state.AddTask.arrayTasks
    })
  }
}

</script>
