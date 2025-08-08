
<script>
    import image from "../assets/headshot.jpg"

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

    // import Button from 'primevue/button';
    
    export default {
      methods: {
    routerpush(resource_name) {
      let name = "/" + resource_name;
      this.$router.push(name);
    }
  },
        data: function () {
            return {
                image: image
            }
        }
    }
</script>




<template>
<div class="container projects-box">

        <Accordion class="accordion-style" :value="['0']" multiple>
            <AccordionPanel value="0">
                <AccordionHeader>Works in Progress</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Freehanding:
                    </p>
                    <ul>
                        <li>Stitch (Lilo and Stitch)</li>
                        <li>Hangyodon (Sanrio)</li>
                    </ul>
                    <p class="m-0">
                        Following a Pattern:
                    </p>
                    <ul>
                        <li>Soccer Ball</li>
                        <li>Capybara</li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="1">
                <AccordionHeader>Completed</AccordionHeader>
                <AccordionContent>
                    <p>Projects I have completed making from scratch (my own pattern/freehanding):</p>
                    <ul>
                        <li>Appa head (Avatar the Last Airbender)</li>
                        <li>Ebifurai-no-shippo (Sumikko Gurashi)</li>
                        <li>Turtle Coasters</li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader>Recommended Patterns</AccordionHeader>
                <AccordionContent>
                    <p class="m-0">
                        Free patterns I like:
                    </p>
                    <ul>
                        <li>Laying Bear: <a href="https://amigurum.com/2019/10/lying-bear-crochet-pattern.html">https://amigurum.com/2019/10/lying-bear-crochet-pattern.html</a></li>
                        <li>Elephant: <a hef="https://hellostitchesxo.com.au/amigurumi-elephant-crochet-free-pattern/">https://hellostitchesxo.com.au/amigurumi-elephant-crochet-free-pattern/</a></li>
                        <li>Monster: <a href="https://www.instagram.com/p/CyWTlwKtRea/?igsh=MTY2aWdkbHNqZHdoNQ==">https://www.instagram.com/p/CyWTlwKtRea/?igsh=MTY2aWdkbHNqZHdoNQ==</a></li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>



</div>
</template>

<style>
.projects-box {
    margin-top: 5%;
}

.accordion-style {
    width: 100%;
}
</style>