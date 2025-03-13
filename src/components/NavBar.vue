<template>
  <nav class="bg-white border-b border-gray-200 fixed w-full z-90 top-0">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button @click="$emit('toggle-sidebar')"
            class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded test-bg">
            <i class="pi pi-bars text-xl"></i>
          </button>
          <div class="text-xl font-semibold flex items-center lg:ml-2.5">
            <span>WebWave CMS</span>
          </div>
        </div>
        <div class="flex items-center">
          <Button text rounded severity="contrast" class="test-bg" size="medium">
            <OverlayBadge value="2" size="small" severity="danger" class="cursor-pointer">
            <i class="pi pi-bell " style="font-size: 1rem" />
          </OverlayBadge>
          </Button>
          <Menu ref="profileMenu" :model="profileMenuItems" :popup="true" />
          <Button icon="pi pi-question-circle" text rounded severity="contrast" class="test-bg" size="medium" />
          <Button icon="pi pi-user" text rounded severity="contrast" @click="(event) => profileMenu.toggle(event)" class="test-bg" size="medium" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const profileMenu = ref(null);
const profileMenuItems = ref([
  { label: 'Profil', icon: 'pi pi-user' },
  { label: 'Ustawienia', icon: 'pi pi-cog' },
  { separator: true },
  { label: 'Wyloguj', icon: 'pi pi-power-off' },
]);

defineEmits(['toggle-sidebar']);
</script> 