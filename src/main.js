import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import Timeline from 'primevue/timeline';
import Fieldset from 'primevue/fieldset';
import Chip from 'primevue/chip';
import { Card } from 'primevue';
import Carousel from 'primevue/carousel';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';


import Galleria from 'primevue/galleria';


import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import AnimateOnScroll from 'primevue/animateonscroll';
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.component('Button', Button);
app.component('Galleria', Galleria);
app.component('Timeline', Timeline);
app.component('Card', Card);
app.component('Fieldset', Fieldset);
app.component('Chip', Chip);
app.component('Carousel', Carousel);
app.component('Tabs', Tabs);
app.component('TabList', TabList);
app.component('Tab', Tab);
app.component('TabPanels', TabPanels);
app.component('TabPanel', TabPanel);
app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('AccordionHeader', AccordionHeader);
app.component('AccordionContent', AccordionContent);
app.directive('animateonscroll', AnimateOnScroll);

app.use(router)

app.mount('#app')
