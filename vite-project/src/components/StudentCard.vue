<template>
  <div class="students">
    <span>Name: {{ student.name }}</span>
    <span>Surname: {{ student.surname }}</span>
  </div>
</template>

<script setup lang="ts">
import type { studentInfo } from '@/student'
import { PropTypes } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropTypes<studentInfo>,
    required: true
  }
})
</script>

<style scoped>
.students {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
</style>
