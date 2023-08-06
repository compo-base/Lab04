<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import EventOrganizer from '../components/EventOrganizer.vue'
import { events } from '@/event_type'
import type { EventItem } from './type'
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import EventService from '@/services/EventService'
import type { Axios, AxiosResponse } from 'axios'
import NProgress from 'nprogress'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()
const events: Ref<Array<EventItem>> = ref([])
const totalEvent = ref<number>(0)
//const eventsPerPage = ref(3) //initial value of events
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
EventService.getEvent(3, props.page).then((response: AxiosResponse<EventItem[]>) => {
  events.value = response.data
})
EventService.getEvent(3, props.page)
  .then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
  .catch(() => {
    router.push({ name: 'NetworkError' })
  })
onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)
  EventService.getEvent(3, toPage)
    .then((response: AxiosResponse<EventItem[]>) => {
      events.value = response.data
      totalEvent.value = response.headers['x-total-count']
      next()
    })
    .catch(() => {
      next({ name: 'NetworkError' })
    })
})

const hasNextPages = computed(() => {
  //first calculate total page
  const totalPages = Math.ceil(totalEvent.value / 3)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="events">
    <div class="events-input">
      <label for="events-per-page">Events per page:</label>
      <input type="number" id="events-per-page" v-model.number="eventsPerPage" />
    </div>
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <div class="pagination">
      <RouterLink
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
      >
        Prev page
      </RouterLink>
      <RouterLink
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPages"
        id="page-next"
      >
        Next page
      </RouterLink>
    </div>
    <EventOrganizer v-for="event in events" :key="event.id" :event="event"></EventOrganizer>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: blue;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
