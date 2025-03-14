// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';

// PrimeVue Components
import Button from 'primevue/button'
import Card from 'primevue/card'
import Menu from 'primevue/menu'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Breadcrumb from 'primevue/breadcrumb'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
import Tooltip from 'primevue/tooltip';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import './assets/styles/main.css'
import VueMobileDetection from "vue-mobile-detection";
// Create Vue application
const app = createApp(App)

// Use plugins
app.use(router)
app.use(PrimeVue, {
    ripple: true,
    theme: { preset: Aura },
    pt: {
        button: {
            root: ({ props }) => ({
                class: [
                    // Success button styles
                    {
                        '!bg-green-700 !border-green-700 hover:!bg-green-800 hover:!border-green-800': props.severity === 'success'
                    },
                    // Size styles
                    {
                        '!h-[40px]': props.size === 'medium'
                    }
                ]
            }),
            label: ({ props }) => ({
                class: [
                    // Success button styles
                    {
                        '!font-medium text-sm': props.severity === 'success'
                    }
                ]
            })
        },
        tag: {
            label: {
                class: ['text-xs text-neutral-900 font-medium']
            }
        },
         breadcrumb: {
            separator: {
                class: ['font-medium !text-neutral-700 !text-sm']
            },
            itemLabel: ({ props }) => {
                return {
                    class: ['font-medium !text-sm', 
                        {
                            '!text-blue-600': props.item.home,
                            'text-neutral-700': !props.item.home
                        }
                    ]
                }
            }
         }
    }
});
app.use(VueMobileDetection);
// Register PrimeVue components globally
app.component('Button', Button)
app.component('Card', Card)
app.component('Menu', Menu)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Breadcrumb', Breadcrumb)
app.component('Divider', Divider)
app.component('Tag', Tag)
app.directive('tooltip', Tooltip);
app.component('Badge', Badge);
app.component('OverlayBadge', OverlayBadge);
// Mount the app
app.mount('#app')