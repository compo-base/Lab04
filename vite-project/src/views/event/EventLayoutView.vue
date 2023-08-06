<script setup lang="ts">
import { ref } from 'vue'
import { type EventItem } from '@/type'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
const router = useRouter()
</script>

<template>
  <div v-if="event">
    <div id="nav">
      <router-link :to="{ name: 'event-detail', params: { id } }">Detail </router-link>
      <router-link :to="{ name: 'event-register', params: { id } }">Register </router-link>
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit </router-link>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>
