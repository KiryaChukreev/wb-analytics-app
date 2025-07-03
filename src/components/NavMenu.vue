<template>
  <nav class="nav-menu">
    <router-link
      v-for="item in menuItems"
      :key="item.route"
      :to="item.route"
      class="nav-link"
      active-class="active"
    >
      <span class="nav-icon" :class="item.icon"></span>
      {{ item.title }}
    </router-link>
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
  {
    title: 'Заказы',
    route: '/orders',
    icon: 'pi pi-shopping-cart',
  },
  {
    title: 'Продажи',
    route: '/sales',
    icon: 'pi pi-chart-line',
  },
  {
    title: 'Склад',
    route: '/stocks',
    icon: 'pi pi-box',
  },
  {
    title: 'Доходы',
    route: '/incomes',
    icon: 'pi pi-money-bill',
  },
]
</script>

<style scoped>
.nav-menu {
  display: flex;
  background: #2c3e50;
  padding: 1rem;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background: #42b983;
  font-weight: bold;
}

.nav-icon {
  font-size: 1.2rem;
}
</style>
