<template>
  <div class="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
    <div class="w-full sm:w-auto">
      <h1 class="text-xl font-semibold mb-2 text-left">Ustawienia ogólne strony</h1>
      <Breadcrumb :model="items" class="!p-0 !bg-transparent">
        <template #separator>
          /
        </template>
      </Breadcrumb>
    </div>
    <div class="w-full sm:w-auto">
      <Button icon="pi pi-plus-circle" label="Dodaj nową stronę" size="medium" :severity="$isMobile() ? 'danger' : 'success'" class="w-full sm:w-auto" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { 
    label: 'Strony', 
    to: '/',
    home: true
  },
  { label: 'Ustawienia ogólne' }
]);
</script>