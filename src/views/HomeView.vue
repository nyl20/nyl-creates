
<script>
    import image from "../assets/ebifurai.jpg"
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
  <div class="container">
    <!-- <div> -->
    <div class="box">

      
    <div>
      <div id="intro-text">
        <p>Hi, I'm Nicole and welcome to my creative page! Here you'll find crochet patterns I've written. Beware I haven't tested them, so if you find a mistake, please let me know on instagram.</p>
      </div>
    </div>
    <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template class="title" #title>Ebifurai No Shippo</template>
        <template #content>
          <img id="ebi-img" :src="image"/>
            <p class="m-0">
              A pattern for the little shrimp tempura from Sumikko Gurashi
            </p>
            <button class="more-button"  @click="routerpush('ebifurai-no-shippo')">Read more</button>
        </template>
    </Card>
    </div>

  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
  .container {
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    /* background-color: aquamarine; */
  }

  #ebi-img {
    max-width: 160px;
  }

  .p-card-body {
    /* background-color: aquamarine; */
    /* box-shadow: 10px 5px 5px red; */
    box-shadow: 0 -0.6em 1em 0.1em #f4f4f9;
  }

  .more-button:hover{
    background-color: #f4f4f9;
    /* color: #FFFFFF; */
  }

  .more-button {
    border-width: 0;
    border-radius: 10px;
    background-color: #97dab6;
    margin: 2% auto;
    padding: 2%;
    color: #000;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 7%;
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
  
    visibility: hidden;
    /* background-color: aquamarine; */
  }

  #intro-text{
    /* align-self: center; */
    /* font-size: 20px; */
    margin-bottom: 8%;
  }


  @keyframes fadeIn {
    0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}

@media (max-width: 1000px) {
  .buttons {
    flex-direction: column;
    justify-content: space-between;
  }

  .custom-button {
    margin-bottom: 4%;
    color: #222;
  }
}

</style>