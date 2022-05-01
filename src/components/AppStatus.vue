<template>
  <!-- <span :class="['badge']">Название статуса</span> -->
  <span class="badge" :class="changeClass">{{ text }}</span>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Название статуса'
    },
    type: {
      type: String,
      default: 'done',
      validator (value) {
        return ['', 'active', 'pending', 'cancelled', 'done'].includes(value)
      }
    }
  },
  computed: {
    changeClass () {
      let classStatus = ''
      if (this.type === 'active') {
        classStatus = 'primary'
      } else if (this.type === 'cancelled') {
        classStatus = 'danger'
      } else if (this.type === 'pending') {
        classStatus = ''
      } else if (this.type === 'done') {
        classStatus = 'warning'
      }

      return classStatus
    }
  }
}
</script>
