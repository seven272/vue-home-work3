<template>
  <the-navbar></the-navbar>
    <div class="container with-nav">
     <router-view> </router-view>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    TheNavbar
  },
  computed: {
    ...mapMutations(['CHECK_TASKS']),
    ...mapState({
      allTasks: (state) => state.AddTask.arrayTasks
    })
  },
  mounted () {
    // if (localStorage.getItem('list-tasks')) {
    //   this.allTasks = JSON.parse(localStorage.getItem('list-tasks'))
    // }
  }
}
</script>

<style>

</style>
