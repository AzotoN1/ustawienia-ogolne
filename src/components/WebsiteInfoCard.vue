<template>
  <Card class="mb-4">
    <template #content>
      <div class="flex flex-col lg:flex-row">
        <div class="mb-4 lg:mb-0 lg:mr-4">
          <img src="@/assets/images/website-preview.png" alt="Website Preview" class="w-full lg:w-80 h-51 rounded-md object-cover" />
        </div>
        <div class="flex-1">
          <div class="flex flex-row justify-between items-start gap-2 sm:gap-0 mb-4 sm:mb-0">
            <h2 class="text-xl font-semibold">{{ website.name }}</h2>
            <div class="flex gap-2">
              <Button :icon="{'pi pi-heart': isFavorite, 'pi pi-heart-fill': !isFavorite}" text rounded severity="secondary" @click="toggleFavorite" />
              <Menu ref="menu" :model="menuItems" :popup="true" />
              <Button icon="pi pi-ellipsis-h" text rounded severity="secondary" @click="toggleMenu" />
            </div>
          </div>
          
          <div class="text-sm text-gray-600 mt-2">
            <div class="mb-1">Data utworzenia: {{ formatDate(website.creationDate) }}</div>
            <div>Data ostatniej modyfikacji: {{ formatDate(website.lastModifiedDate) }}</div>
          </div>
          
          <Divider />
          
          <div class="flex flex-col gap-1">
            <div class="flex flex-row sm:items-center gap-2">
              <div class="flex items-center gap-2">
                <i class="pi pi-id-card text-gray-600"></i>
                <span>Plan Pro</span>
              </div>
              <Button label="Zmień Plan" link class="!p-0 !text-blue-500 underline" />
            </div>
            
            <div class="flex flex-row sm:items-center gap-2">
              <div class="flex items-center gap-2">
                <i class="pi pi-globe text-gray-600"></i>
                <span>{{ website.domain }}</span>
              </div>
              <Button label="Zmień adres" link class="!p-0 !text-blue-500 underline" />
            </div>
            
            <div class="flex flex-row sm:items-center gap-2">
              <div class="flex items-center gap-2">
                <i class="pi pi-envelope text-gray-600"></i>
                <span>Ilość skrzynek pocztowych: {{ website.emailBoxes }}</span>
              </div>
              <Button label="Zarządzaj skrzynkami" link class="!p-0 !text-blue-500 underline" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref(null);
const isFavorite = ref(false);

const website = ref({
  name: 'Website Builder WebWave CMS',
  creationDate: new Date('2024-12-12'),
  lastModifiedDate: new Date('2024-12-13'),
  plan: 'Pro',
  domain: 'webwavecms.com',
  emailBoxes: 4
});

const menuItems = ref([
  { label: 'Edytuj', icon: 'pi pi-pencil' },
  { label: 'Duplikuj', icon: 'pi pi-copy' },
  { label: 'Usuń', icon: 'pi pi-trash', severity: 'danger' }
]);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const toggleMenu = (event) => {
  menu.value.toggle(event);
};

const formatDate = (date) => {
  return date.toLocaleDateString('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
</script>