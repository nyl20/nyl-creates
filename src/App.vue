<script>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import image from "./assets/profile-pic.png"
    
    export default {
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <div>
      <HelloWorld msg="Nicole Liao" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    
  <!-- </header> -->
  <div class="center">
   <div class="whole">
    <header>
        <img id="title-portrait" :src="image"/>
      
      <div class="navbar">
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <!-- <RouterLink to="/research">Research</RouterLink> -->
        <!-- <RouterLink to="/experience">Experience</RouterLink> -->
        <!-- <RouterLink to="/about-me">About Me</RouterLink> -->
      </nav>
      </div>
      
      </header>
      
  <RouterView />
    </div>
    
   </div>
  
  
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
}
#title-portrait {
  max-width: 40%;
  align-self: center;
}
h1{
  font-size: 60px;
  color: #2F4550;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 4%;
}
.navbar{
  /* background-color: #B8DBD9; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: flex-end;
}
.center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
}
.whole{
  /* margin: 3%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: #F4F4F9; */
  margin-left: 0;
  padding-top: 1%;
  width: 100%;
  /* align-content: center; */
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
} */

@media (max-width: 900px) {
  h1 {
    font-size: 30px;
  }
  .navbar {
    margin-top: 1%;
  }

  header {
    flex-direction: column;
  }
  .nav {
    padding-bottom: 0;
    margin-bottom: 0;
    background-color: #222;
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

/* 2F4550 */
/* 586F7C */
/* B8DBD9 */
/* F4F4F9 */
</style>
