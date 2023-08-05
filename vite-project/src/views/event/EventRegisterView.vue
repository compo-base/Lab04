<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
  event: Object as PropType<EventItem>,
  require: true
})
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-detail', params: { id } }">Detail</router-link>
      <router-link :to="{ name: 'event-register', params: { id } }">Register</router-link>
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit</router-link>
    </div>
    <p>Registration from here</p>
  </div>
</template>
