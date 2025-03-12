// src/App.vue
<template>
  <DashboardLayout>
    <router-view></router-view>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from './layouts/DashboardLayout.vue';

const pageTitle = 'Ustawienia ogólne';
document.title = pageTitle;
</script>