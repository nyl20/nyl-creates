<script>
    import image from "../assets/headshot.jpg";
    import match from "../assets/ebifurai/1.png"
    import game from "../assets/ebifurai/2.png"
    import play from "../assets/ebifurai/3.png"
    import player1 from "../assets/ebifurai/4.png"
    import logo from "../assets/SS_login.png"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  {title: 'Match Analysis Screen', image: match, alt: 'Match Analysis Screen'},
                  {title: 'Game Analysis Screen', image: game,  alt: 'Game Analysis Screen'},
                  {title: 'Record Decisive Points', image: play, alt: 'Record Decisive Points'},
                  {title: 'Player Skills Screen', image: player1, alt: 'Player Skills Screen 1'},
                  // {title: 'Player Skills Screen', image: player2, alt: 'Player Skills Screen 2'},
                  // {title: 'Search Any Match-up', image: search, alt: 'Search Any Match-up'},
                ],
            }
        }
    }
</script>

<template>
  <div class="container">
    <!-- <div> -->
      <div class="box">
    
    <div class="description">
      <div id="decription-text">
         <h1>Ebifurai No Shippo</h1>
          <div class="card">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="3" :circular="true" containerStyle="max-width: 640px" :showItemNavigators="false" :showThumbnails="true">
            <template #item="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <!-- <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template> -->
        </Galleria>
    </div>



        <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Please do not sell this pattern as your own. For questions reach out to:</p>
          <p>Instagram: @nyl_creates</p>
        </div>
        <router-link to="/"><button class="back-button">Back</button></router-link>
        
      </div>
    </div>
    
  </div>
    

  </div>

</template>

<style>

 .container {
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  .back-button:hover{
    background-color: #97dab6;
  }

  .back-button {
    border-radius: 12px;
    background-color:#F4F4F9 ;
    width: 15%;
    border-width: 0;
    padding: 2%;
    align-items: center;
    margin-bottom: 15%;
    margin-top: 4%;
    text-align: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 7%;
    margin-right: 7%;
    margin-top: 5%;
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
  
    visibility: hidden;
  }

  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* flex: 2; */
   
  }

  #description-text{
    /* align-self: center; */
    font-size: 15px;
  }


  .contact-area {
    background-color: #e4dbdb;
    padding: 5%;
    margin-top: 7%;
    color: #000;
  }

  @media (max-width: 1000px) {
  .intro {
    flex-direction: column;
    justify-content: space-between;
  }

  #headshot-area {
  padding-top: 5%;
  padding-left: 0;
  }

  #portrait {
    width: 100%;
    height: auto;
  }
}
</style>