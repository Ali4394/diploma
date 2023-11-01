<template>
  <div class="home">
    <div class="carousel-container">
      <button @click="previousImage" class="nav-button">Back</button>
      <transition name="fade" mode="out-in">
        <img :key="currentImage" :src="currentImage" class="carousel-image" />
      </transition>
      <button @click="nextImage" class="nav-button">Next</button>
    </div>
    <button @click="previousImage" class="mob-button">Back</button>
    <button @click="nextImage" class="mob-button">Next</button>
    <div class="info-section">
      <h1>TeachMe</h1>
      <p>📚 Курсы корейского языка 📚</p>
    <p>📝  Подготовка к TOPIK 💬</p>
    <p>🎓 Помощь поступающим в ВУЗы Кореи 🏫</p>
   
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const images = ref([
  'https://a.cdn-hotels.com/gdcs/production74/d462/9fe21145-585c-4e7f-9373-24ed559ec010.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  'https://a.cdn-hotels.com/gdcs/production144/d1960/191730c7-8e21-4540-825c-65954ae4d132.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  'https://a.cdn-hotels.com/gdcs/production58/d323/da9d76f0-35fa-4f8d-a9d0-8a6e24e9d03f.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  'https://a.cdn-hotels.com/gdcs/production1/d1836/6bd75900-f22e-4974-a748-5884b92a28b8.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
  'https://manoa.hawaii.edu/mix/wp-content/uploads/2018/04/KBS.png'
])

const currentIndex = ref(0)

const currentImage = computed(() => images.value[currentIndex.value])

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length
}

const previousImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}
</script>

<style scoped>

.home{
  width: 1200px;
  margin: 20px auto;
}
p {
  font-size: 24px;
  text-align: center;
  margin: 20px;
  animation: fadeIn 2s both;
}

p:nth-child(1) {
  animation-delay: 1.5s;
}

p:nth-child(2) {
  animation-delay: 1s;
}

p:nth-child(3) {
  animation-delay: 0.5s;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}


.carousel-container {
  position: relative;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.carousel-image {
  width: 600px;
  height: 300px;
}

.info-section {
  text-align: center;
  margin: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.nav-button {
  background-color: #222e51;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #222e51;
}
.mob-button {
  display: none;
}
@media (max-width: 656px) {
  .nav-button {
    display: none;
  }

  .mob-button {
    display: inline-block;
    background-color: #222e51;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 5px;
    cursor: pointer;
    margin-left: 24%;
  }
}
</style>
