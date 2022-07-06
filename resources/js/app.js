require('./bootstrap');

import { createApp } from 'vue'

import App from './vue/app'
import AddItemForm from './vue/components/AddItemForm.vue';
import listItem from './vue/components/listItem.vue';
import listView from './vue/components/listView.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash, faPlusSquare);

const app = createApp(App);

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('add-item-form', AddItemForm);
app.component('list-item', listItem);
app.component('list-view', listView);

app.mount('#app');