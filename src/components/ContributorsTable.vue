<template>
  <Card class="test-border">
    <template #content>
    <div class="flex justify-between items-center mb-4 flex-wrap gap-4">
      <div class="flex items-center gap-2">
        <h2 class="text-base font-semibold">Współtwórcy strony</h2>
        <i class="pi pi-info-circle text-gray-400 test-border"
          v-tooltip.top="'Tutaj znajdziesz listę wszystkich współtwórców'"
        />
      </div>
      <Button 
        icon="pi pi-plus-circle" 
        label="Dodaj współtwórcę" 
        severity="success"
        size="medium"
        class="whitespace-nowrap test-bg" 
      />
    </div>
    
    <DataTable :value="contributors" stripedRows class="p-datatable-sm test-border" responsiveLayout="stack" breakpoint="960px" :pt="{
        column: {
          headerCell: {
            class: ['text-white !bg-gray-100 !py-3 text-xs !border-solid !border-gray-200 !border-x-0'],
          },
        },
      }">
      <Column field="email" header="E-mail">
        <template #body="slotProps">
          <div class="text-blue-500 text-sm">
            {{ slotProps.data.email }}
            <span v-if="slotProps.data.isOwner" class="ml-2 text-sm text-gray-600">(Właściciel)</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag 
            :severity="slotProps.data.status === 'active' ? 'success' : 'warn'"
            :value="slotProps.data.status === 'active' ? 'Aktywny' : 'Oczekujący'"
          />
        </template>
      </Column>
      
      <Column header="Akcja" class="w-6 !text-right">
        <template #body="slotProps">
          <div class="text-right">
            <Menu class="test-bg" ref="rowMenu" :model="actionMenuItems" :popup="true" />
            <Button 
              icon="pi pi-ellipsis-h" 
              text 
              size="medium"
              rounded 
              severity="secondary" 
              @click="(event) => openRowMenu(event, slotProps.data)" 
              class="test-bg"
            />
          </div>
        </template>
      </Column>
    </DataTable>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const rowMenu = ref(null);
const selectedUser = ref(null);

const contributors = ref([
  { id: 1, email: 'jkowalki@webwavecms.com', status: 'active', isOwner: true },
  { id: 2, email: 'apietrzak@webwavecms.com', status: 'pending', isOwner: false },
  { id: 3, email: 'mkotkowska@gmail.com', status: 'pending', isOwner: false },
  { id: 4, email: 'pniezierska@gmail.com', status: 'active', isOwner: false },
  { id: 5, email: 'tomadams@gmail.com', status: 'active', isOwner: false },
  { id: 6, email: 'support@webwavecms.com', status: 'pending', isOwner: false },
]);

const actionMenuItems = ref([
  { label: 'Edytuj uprawnienia', icon: 'pi pi-user-edit' },
  { label: 'Wyślij ponowne zaproszenie', icon: 'pi pi-envelope' },
  { separator: true },
  { label: 'Usuń użytkownika', icon: 'pi pi-trash', severity: 'danger' },
]);

const openRowMenu = (event, data) => {
  selectedUser.value = data;
  rowMenu.value.toggle(event);
};
</script>