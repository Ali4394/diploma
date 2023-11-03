<template>
  <div class="cont">
    <div class="menu-bar">
      <div class="flex-auto logo">
        <img
          src="./logo.png"
          class="flex align-items-center justify-content-center mr-2"
          style="width: 80px; height: auto"
        />
      </div>
      <button @click="toggleMobileMenu" class="mobile-menu-button">&#9776;</button>
      <ul :class="{ 'show-mobile-menu': isMobileMenuOpen }">
        <li @click="handleMenuItemClick('/')"><strong>Главная</strong></li>
        <li v-on:click="handleMenuItemClick('/univers')"><strong>Университеты</strong></li>
        <li @click="handleMenuItemClick('/course')"><strong>Курсы</strong></li>
        <li @click="handleMenuItemClick('/info')"><strong>Об Южной Корее</strong></li>
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
  </div>
</template>

<script setup lang="ts">
import PButton from 'primevue/button'
import { useUser } from '@/composables/useUser'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { user, googleRegister, googleLogout } = useUser()

const isMobileMenuOpen = ref(false)
const router = useRouter()

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function handleMenuItemClick(route: string) {
  router.push(route)
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.cont {
  background-color: #222e51;
  height: auto;
  width: 100%;
  margin: 0 auto;
}
.menu-bar {
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto;
}

.mobile-menu-button {
  display: none;
  font-size: 25px;
  cursor: pointer;
}

.logo {
  position: relative;
  left: 15%;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin: 0 auto;
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
  position: relative;
  right: 0;
}

@media (max-width: 938px) {
  .logo {
    position: relative;
    left: 7%
    ;
  }
}

@media (max-width: 768px) {
  ul {
    display: none; /* Покажите список в мобильной версии */
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0; /* Измените положение списка на мобильных устройствах */
    background-color: #222e51;
    width: 100%;
    z-index: 5;
  }

  li {
    width: 100%; /* Измените ширину элементов списка */
    animation: fadeIn 0.5s ease-in-out;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .mobile-menu-button {
    display: block;
  }
  .show-mobile-menu {
    display: flex;
  }

}
</style>
