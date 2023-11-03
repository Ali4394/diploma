<template>
  <div class="korean-course-info">
    <transition-group name="fade" tag="div">
      <div
        class="course-card"
        v-for="(course, index) in courses"
        :key="index"
        :style="delayedStyles(index)"
      >
        <div class="sentence">{{ course }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'

const courses = ref([
  'Курсы Корейского языка онлайн, цена за месяц 15000тг.',
  'Курсы Корейского языка офлайн, цена за месяц 25000тг.',
  'Подготовка к ТОПИК, цена 30000тг.',
  'Консультация по поступлению в Южную Корею для наших студентов бесплатно'
])

const delayedStyles = (index) => {
  const delay = index * 100 // Adjust the delay duration as needed
  return {
    animation: `fade-in 0.5s ease ${delay}ms forwards`
  }
}

onMounted(() => {
  const style = document.createElement('style')
  style.innerHTML = `
        @keyframes fade-in {
          0% {
            transform: translateY(20px); // Adjust the initial position
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `
  document.head.appendChild(style)
})
</script>

<style scoped>
.course-card {
  margin: 10px 0;
  padding: 10px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.sentence {
  font-size: 16px;
  color: #333;
  /* Add any other styles you want for each sentence here */

  /* Styles for mobile screens */
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
