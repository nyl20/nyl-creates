<script>
    import scores from "../assets/sleep_scores.png"
    import banner from "../assets/ys-banner.png"
    import form from "../assets/ys-form.png"
import posts from "../assets/ys-pics.png"
    import Carousel from 'primevue/carousel';
    
    export default {
        data: function () {
            return {
                images: [
                  {title: 'Banner and Example Posts', image: posts, alt: 'Banner and Example Posts'},
                  {title: 'New Post Form', image: form, alt: 'New Post Form'},
                  // {title: 'Posts from crafters or shops', image: posts, alt: 'Posts from crafters or shops'}
                  // {title: 'Record Decisive Points', image: play, alt: 'Record Decisive Points'},
                  // {title: 'Player Skills Screen', image: player1, alt: 'Player Skills Screen 1'},
                  // {title: 'Player Skills Screen', image: player2, alt: 'Player Skills Screen 2'},
                  // {title: 'Search Any Match-up', image: search, alt: 'Search Any Match-up'},
                ]
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
         <h1>Yarn Social</h1>
         <p>Yarn Social is a website for fiber artists to share patterns and find yarn stores. Users can sign up as an individual or as a shop and create posts relating to their business. Shops and individuals can post about items that are for sale or patterns they want to share with the yarn community. Users can also browse on the posts page and sort by popularity (most viewed). Details of posts are not shown to users that are not signed in.</p>
         <p>The website was created using Next.js, React, drizzle and postgres. The design of the interface was styled using Tailwind CSS.</p>     
        <div class="contact-area">
          <p class="twenty">Information</p>
          <p>Website: https://yarn-social.vercel.app/</p>
          <p>Github: https://github.com/nyl20/yarn-social</p>
        </div>
        <router-link to="/projects"><button class="back-button">Back</button></router-link>
        
      </div>
      <div id="carousel-ys">
         <Carousel :value="images" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="5000">
            <template #item="slotProps">
              <div class="mb-4 font-medium image-title">{{ slotProps.data.title }}</div>
              <div class="image-card">
                <img :src="slotProps.data.image" :alt="slotProps.data.alt" class="ys-image" />
              </div>
            </template>
          </Carousel>


      </div>
    </div>
    
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



#ss-img{
  height: 300px;
}
 .carousel-container {
  max-width: 900px;
  margin: auto;
  padding: 2rem 1rem;
}

.image-card {
  padding: 0.5rem;
  display: flex;
  justify-content: center;
}

.ys-image {
  max-width: 95%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.image-title {
  text-align: center;
}

 .container {
    min-height: 100vh;
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
  }

  .back-button:hover{
    background-color: #F4F4F9;
  }

  .back-button {
    border-radius: 12px;
    background-color:#B8DBD9 ;
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

  #description{
    /* align-self: center; */
    font-size: 15px;
  }

  #carousel-ys{
    display: flex;
    justify-content: center;
    padding-left: 5%;
    max-width: 55%;
  }

  #portrait {
    border-radius: 8%;
    height: 300px;
  }

  .contact-area {
    background-color: #586F7C;
    padding: 5%;
    margin-top: 7%;
    color: #F4F4F9;
  }

  @media (max-width: 1000px) {
  .intro {
    flex-direction: column;
    justify-content: space-between;
  }

  .description {
    flex-direction: column;
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