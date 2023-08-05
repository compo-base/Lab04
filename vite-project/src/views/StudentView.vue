<template>
  <div class="student">
    <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
  </div>
</template>

<script setup lang="ts">
import StudentCard from '../components/StudentCard.vue'
import StudentInfoService from '@/services/StudentService'
import type { studentInfo } from '@/student'
import { ref } from 'vue'
import type { Ref } from 'vue'
const students: Ref<Array<studentInfo>> = ref([])
StudentInfoService.getStudent().then((response) => {
  students.value = response.data
})
</script>
