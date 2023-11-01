<script setup lang="ts">
import NavbarComponent from '@/components/layouts/NavbarComponent.vue'
import AddBtn from '@/components/AddUniverModule.vue'
// import contentList from '@/components/UniversityList.vue'
import Home from '@/views/HomeView.vue'
import Footer from '@/components/layouts/FooterComponents.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <!-- <AddBtn /> -->
  <Footer />
</template>

<style>
body {
  background-color: rgb(212, 212, 241); /* Replace #your-color with the desired background color code */
}
</style>
