<template>
  <div class="organize">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<script setup lang="ts">
import { type EventItem } from '@/type'
import { PropTypes } from 'vue'

const props = defineProps({
  event: {
    type: Object as PropTypes<EventItem>,
    require: true
  }
})
</script>

<style scoped>
.organize {
  text-align: right;
}
</style>
