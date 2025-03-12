<template>
  <Card>
    <template #content>
    <div class="flex justify-between items-center mb-4 flex-wrap gap-4">
      <div class="flex items-center gap-2">
        <h2 class="text-lg font-semibold">Współtwórcy strony</h2>
        <i class="pi pi-info-circle text-gray-400"
          v-tooltip.top="'Tutaj znajdziesz listę wszystkich współtwórców'"
        />
      </div>
      <Button 
        icon="pi pi-plus-circle" 
        label="Dodaj współtwórcę" 
        severity="success"
        class="whitespace-nowrap" 
      />
    </div>
    
    <DataTable :value="contributors" stripedRows class="p-datatable-sm" responsiveLayout="stack" breakpoint="960px" :pt="{
        column: {
          headerCell: {
            class: ['text-white !bg-gray-200 !py-3'],
          },
        },
        wrapper: {
          class: ['overflow-x-auto']
        }
      }">
      <Column field="email" header="E-mail">
        <template #body="slotProps">
          <div class="text-blue-500">
            {{ slotProps.data.email }}
            <span v-if="slotProps.data.isOwner" class="ml-2 text-gray-600">(Właściciel)</span>
          </div>
        </template>
      </Column>
      
      <Column field="status" header="Status">
        <template #body="slotProps">
          <Tag 
            :severity="slotProps.data.status === 'active' ? 'success' : 'warn'"
            :value="slotProps.data.status === 'active' ? 'Aktywny' : 'Oczekujący'"
            class="px-4 py-1 rounded-full"
          />
        </template>
      </Column>
      
      <Column header="Akcja" style="width: 4rem">
        <template #body="slotProps">
          <div class="text-right">
            <Menu ref="rowMenu" :model="actionMenuItems" :popup="true" />
            <Button 
              icon="pi pi-ellipsis-h" 
              text 
              rounded 
              severity="secondary" 
              @click="(event) => openRowMenu(event, slotProps.data)" 
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