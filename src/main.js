import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DialogView from '@/components/dialog/DialogView.vue';
import { showDialog, closeDialog } from 'components/dialog';

// 页面标题跟随 config.js 的 siteName
document.title = window.config.siteName || 'Subconverter Web';

const app = createApp(App);
app.component('DialogView', DialogView);
app.use(router).use(store);

app.config.globalProperties.$showDialog = showDialog;
app.config.globalProperties.$closeDialog = closeDialog;
app.mount('#app');
