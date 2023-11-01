<template>
  <div class="menu-bar">
    <div class="flex-auto">
      <img
        src="./logo.png"
        class="flex align-items-center justify-content-center mr-2"
        style="width: 60px; height: auto"
      />
    </div>
    <button @click="toggleMobileMenu" class="mobile-menu-button">&#9776;</button>
    <ul :class="{ 'show-mobile-menu': isMobileMenuOpen }">
      <li @click="handleMenuItemClick('main')">Главная</li>
      <li @click="handleMenuItemClick('univers')">Университеты</li>
      <li @click="handleMenuItemClick('course')">Курсы</li>
      <li @click="handleMenuItemClick('info')">Об Южной Корее</li>
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
import { useRouter, useRoute } from 'vue-router'

const { user, googleRegister, googleLogout } = useUser()

const isMobileMenuOpen = ref(false)
const router = useRouter()
const route = useRoute()

const active = ref(0)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function handleMenuItemClick(item: any) {
  item = ref([
    {
      label: 'main',
      route: '/'
    },
    {
      label: 'univers',
      route: '/cards'
    },
    {
      label: 'Table',
      icon: 'pi pi-fw pi-pencil',
      route: '/table'
    },
    {
      label: 'Contact us',
      icon: 'pi pi-fw pi-file',
      route: '/contact'
    }
  ])
}
</script>

<style scoped>
.menu-bar {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
}

.mobile-menu-button {
  display: none;
  font-size: 25px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin-right: 300px;
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
    top: 70px;
    left: 20px;
    background-color: #333;
    z-index: 5;
  }

  li {
    width: 200px;
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

  .show-mobile-menu {
    display: flex;
  }
}
</style>
