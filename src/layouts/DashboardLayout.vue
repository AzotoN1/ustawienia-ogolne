<template>
  <div class="min-h-screen bg-gray-50">
    <NavBar @toggle-sidebar="toggleSidebar" />
    <SideBar :is-open="isSidebarOpen" @close="closeSidebar" />
    
    <main 
      :class="[
        'transition-all duration-300 ease-in-out',
        'p-4 pt-20',
        isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
      ]"
    >
      <div 
        :class="[
          'mx-auto',
          'transition-all duration-300 ease-in-out',
          isSidebarOpen ? 'max-w-[1200px]' : 'max-w-full'
        ]"
      >
        <slot></slot>
      </div>
    </main>

    <!-- Overlay dla mobilnej wersji sidebara -->
    <div 
      v-if="isSidebarOpen" 
      class="fixed inset-0 bg-gray-900/50 lg:hidden z-20"
      @click="closeSidebar"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';

const isSidebarOpen = ref(window.innerWidth >= 1024);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
  }
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isSidebarOpen.value = true;
  } else {
    isSidebarOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 