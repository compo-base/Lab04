<template>
  <div class="organizer">
    <h1>Event Organizer Details</h1>
    <div v-for="event in events" :key="event.id">
      <EventOrganizer :event="event"></EventOrganizer>
    </div>
  </div>
</template>

<script setup lang="ts">
import EventOrganizer from '../components/EventOrganizer.vue'
import { events } from '@/event_type'
</script>

<style scoped>
.organizer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
