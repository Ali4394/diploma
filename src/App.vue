<script setup lang="ts">
import NavbarComponent from '@/components/layouts/NavbarComponent.vue'
import AddBtn from '@/components/AddUniverModule.vue'
import contentList from '@/components/UniversityList.vue'
import Home from '@/views/HomeView.vue'
</script>

<template>
  <NavbarComponent />
  <Home />
  <AddBtn />
  <contentList />
</template>

<style scoped></style>
