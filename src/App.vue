<script setup lang="ts">
import NavbarComponent from '@/components/layouts/NavbarComponent.vue'
import UniverCard from '@/components/UniversityItem.vue'
import AddBtn from '@/components/AddUniverModule.vue'
import contentList from '@/components/UniversityList.vue'
</script>

<template>
  <AddBtn />
  <NavbarComponent />
  <UniverCard :newContent="newContentData" />
  <contentList />
</template>

<style scoped></style>
