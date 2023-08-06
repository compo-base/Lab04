<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const props = defineProps({
  event: Object as PropType<EventItem>,
  require: true
})

const router = useRouter()
const store = useMessageStore()
function register() {
  store.updateMessage("You're successfully register for " + props.event?.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({
    name: 'event-detail',
    params: {
      id: props.event?.id
    }
  })
}
</script>

<template>
  <p>Registration from here</p>
  <button @click="register">Regiter Me</button>
</template>
