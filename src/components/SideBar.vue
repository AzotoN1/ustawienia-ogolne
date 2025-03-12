<template>
  <aside 
    :class="[
      'fixed top-0 left-0 z-30 h-full pt-16',
      'flex flex-col w-64',
      'transition-transform duration-300 ease-in-out',
      'bg-white border-r border-gray-200',
      !isOpen ? '-translate-x-full' : 'translate-x-0',
      'lg:translate-x-0' // zawsze widoczny na dużych ekranach
    ]"
  >
    <div class="relative flex-1 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex-1 px-3 space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
            :class="{ 'bg-gray-100': isActive(item.path) }"
            @click="$emit('close')"
          >
            <i :class="['mr-3 text-gray-500', item.icon]"></i>
            <span>{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
});

defineEmits(['close']);

const menuItems = ref([
  { label: 'Dashboard', path: '/', icon: 'pi pi-home' },
  { label: 'Współtwórcy', path: '/contributors', icon: 'pi pi-users' },
  { label: 'Ustawienia', path: '/settings', icon: 'pi pi-cog' },
  { label: 'Analityka', path: '/analytics', icon: 'pi pi-chart-line' },
  { label: 'Powiadomienia', path: '/notifications', icon: 'pi pi-bell' },
]);

const isActive = (path) => {
  return route?.path === path;
};
</script>

<style scoped>
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style> 