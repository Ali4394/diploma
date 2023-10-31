<template>
  <div class="menu-bar">
    <button @click="toggleMobileMenu" class="mobile-menu-button">&#9776;</button>
    <ul :class="{ 'show-mobile-menu': isMobileMenuOpen }">
      <li @click="handleMenuItemClick('Home')">Home</li>
      <li @click="handleMenuItemClick('About')">About</li>
      <li @click="handleMenuItemClick('Services')">Services</li>
      <li @click="handleMenuItemClick('Contact')">Contact</li>
    </ul>
    <div class="side">
      <p-button
        v-if="!user"
        @click="googleRegister"
        label="Войти"
        icon="pi pi-sign-in"
        severity="secondary"
      />
      <p-button
        v-else
        @click="googleLogout"
        label="Выйти"
        severity="danger"
        icon="pi pi-sign-out"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useUser } from '@/composables/useUser'
import { ref } from 'vue'

const { user, googleRegister, googleLogout } = useUser()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleMenuItemClick = (item: any) => {
  // Implement your functionality for each menu item here
  console.log(`Clicked on ${item}`)
}
</script>

<style scoped>
.menu-bar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.mobile-menu-button {
  display: none;
  font-size: 20px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

li {
  padding: 10px 20px;
  cursor: pointer;
}

li:hover {
  background-color: #555;
}

.side {
  display: flex;
  align-items: center;
}

p-button {
  margin-left: 20px;
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }

  ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 20px;
    background-color: #333;
  }

  .show-mobile-menu {
    display: flex;
  }
}
</style>
