<template>
  <button class="btn" :class="classBtn" @click="$emit('clickBtn')"><slot></slot></button>
</template>

<script>
export default {
  name: 'AppButton',
  emits: ['clickBtn'],
  props: {
    classBtn: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>

</style>
