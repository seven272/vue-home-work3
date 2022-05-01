<template>
  <div class="card" style="text-align: center">
    <h3 class="center">Страницы с ID=<strong>{{ urlPage }}</strong> нет</h3>
    <router-link to="/">
      <app-button style="margin: 0, auto" :class-btn="'danger'">Вернуться на главную</app-button>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Page404',
  computed: {
    // получаем адресс страницы через свойство params route, где 404 это названия ключа обьекта
    urlPage () {
      const page = this.$route.params
      return page['404']
    }
  }
}
</script>
