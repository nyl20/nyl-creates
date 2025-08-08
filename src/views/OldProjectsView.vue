<script>
    import image from "../assets/SS_login.png";
    
    export default {
       methods: {
    routerpush(resource_name) {
      let name = "/" + resource_name;
      this.$router.push(name);
    }},
        data: function () {
            return {
                image: image
            }
        }
    }
</script>

<template>
  <div class="projects-container">
    <!-- <div> -->
    <!-- <h1>This is an projects page: db, aml, ai hc, pp</h1>
    <p>Vegetable Varieties</p>
    <p>Search Media</p>
    <p>Graphics final</p> -->
    <div >
            <h2>Projects</h2>
         </div>



         <div   class="pair">    
    <!-- <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template class="title" #title>SquashScore</template>
        <template #content>
            <p class="m-0">
              An app for squash players and coaches to analyze their matches and improve their skills based 
              on real time input. Squash coaches can use this app to document how points are
               won and visualize areas of strength and weakness. Designed in Figma 
               and developed in React Native with deployment using Apple Developer.
            </p>
            <button class="more-button"  @click="routerpush('squashscore')">Read more</button>
        </template>
    </Card> -->
    <Card  v-animateonscroll="{ enterClass: 'fadeinLeft' }" class="project">
        <template #title>
          BCBM Suptype Prediction
          
        </template>
        <template #content>
            <p class="m-0">
              Machine learning model for classifying the molecular subtype of breast cancer, specifically in cases of brain metastasis. A custom ensemble classifier was trained using radiomics data and 3D scans of the brain (MRIs). All data processing and model development was done in python.

            </p>
            <button class="more-button" @click="routerpush('bcbm-prediction')">Read more</button>
        </template>
    </Card>
  </div>

   <div   class="pair">    
    <Card  v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template class="title" #title>Music on Sleep: a N-of-1 Trial</template>
        <template #content>
            <p class="m-0">
              A study to determine the impact of classical music on sleep quality by listening to a relaxing playlist before sleeping and after waking. The trial was conducted over four weeks in an ABAB format. Fitbit was used to track sleep data and surveys were used for percieved sleep and morning mood data collection. Sentiment analysis and statistical analysis were performed on the data to determine if there was a significant effect of music on sleep and morning mood.
            </p>
            <button class="more-button" @click="routerpush('nof1')">Read more</button>
        </template>
    </Card>
    <Card v-animateonscroll="{ enterClass: 'fadeinLeft' }"  class="project">
        <template #title>
         BlueTape
          
        </template>
        <template #content>
            <p class="m-0">
              The winning idea at the MindState Ideation Hackathon. User interviews and research were performed to ideate a product in the AgTech field which would help farmers combat or monitor the problem of pesticide drift. BlueTape was created in collaboration with designers from Mexico and Israel and a mentor from BlueWhite.

            </p>
            <button class="more-button" @click="routerpush('bluetape')">Read more</button>
        </template>
    </Card>
  </div>


    <div class="pair">    
      <Card v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template #title>
          Yarn Social
          
        </template>
        <template #content>
            <p class="m-0">
              A website for yarn lovers and fiber artists to share patterns and yarn shops. Users can post patterns and shops can post about their store or items they are selling. The website was created with Next.js, React, drizzle, and a postgres database.

            </p>
            <button class="more-button"  @click="routerpush('yarnsocial')">Read more</button>
            
        </template>
    </Card>
    <Card v-animateonscroll="{ enterClass: 'fadeinLeft' }"  class="project">
        <template class="title" #title>Relational Database Management System</template>
        <template #content>
            <p class="m-0">
              An original relational database management system developed as the final deliverable for Databases Practicum (CS).
              The database takes in binary datatables, SQL queires, and efficiently returns the 
              output to the queries. The system supports scanning, projections, aliases, filtering, sorting, and joining.
              Multiple joins were also implemented, including block nested loop join and sort merge join. Retrieval of results was
              optimized using indexing and a join dynamic programming algorithm. All components were coded in Java.
            </p>
        </template>
    </Card>
  </div>


  <div  class="pair">
    <Card  v-animateonscroll="{ enterClass: 'fadeinRight' }" class="project">
        <template #title>Cornell Biomedical Device (CUBMD)</template>
        <template #content>
            <p class="m-0">
                CUBMD is a project team in the College of Engineering at Cornell. During my 
                three years on the team, I worked with fellow engineering students on the 
                product development subteam and also worked as the Webmaster. We worked on 
                ideating novel devices and developing devices we believed feasible. As a team, 
                we started multiple projects and submitted to competitions.
            </p>
        </template>
        <template #footer>
        <div class="flex gap-4 mt-1">
          <Fieldset legend="Specific Projects" :toggleable="true">
            <p>Website design: <a href="https://www.cubmd.org/">CUBMD website</a></p>
           <p class="m-0">
            MelanOxi: Pulse oximeter that calibrates to skin tone
           </p>
           <p class="m-0">
            MyeMonitor: Wearable muscle sensor to track MS symptoms
           </p>
           <p class="m-0">
            InFlux: Infusion pump to make drug addiction recovery accessible
           </p>
          </Fieldset>
        </div>
    </template>
    </Card>
    <Card  v-animateonscroll="{ enterClass: 'fadeinLeft' }" class="project">
        <template #title>FreshCheck</template>
        <template #content>
            <p class="m-0">
                An Android app to track the time a user spends outdoors. This project focused
                on user research and design, as well as creating a prototype in Android Studio.
                We researched existing apps and the importance of spending time outdoors in order to
                create an effective design and wrote a comprehensive report of our findings.
            </p>
            <!-- <p><a href="assets/report.pdf">CUBMD website</a></p> -->
        </template>
    </Card>
  </div>
  </div>
</template>

<style>
  .projects-container {
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    padding-right: 7%;
    padding-left: 7%;
    margin-top: 3%;
    margin-bottom: 5%;
    /* background-color: aquamarine; */
  }

  .title {
    background-color: #B8DBD9;
  }

  .pair {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4%;
  }

  .project {
    width: 48%;
    /* -webkit-box-shadow: 0 4px 6px -6px #B8DBD9; */
    /* -moz-box-shadow: 0 4px 6px -6px #B8DBD9; */
    /* box-shadow: 0 4px 6px -6px #B8DBD9' */
    /* box-shadow: 10px 5px 5px red; */
  }

  .card-top {
    height: 50px;
  }

  .p-card-title {
    /* -webkit-box-shadow: 0 4px 6px -6px #222;
    -moz-box-shadow: 0 4px 6px -6px #222;
    box-shadow: 0 4px 6px -6px #222; */
    color: #586F7C;
  }

  .p-card-body {
    /* background-color: aquamarine; */
    /* box-shadow: 10px 5px 5px red; */
    box-shadow: 0 -0.6em 1em 0.1em #F4F4F9;
  }

  .more-button:hover{
    background-color: #586F7C;
    color: #FFFFFF;
  }

  .more-button {
    border-width: 0;
    border-radius: 10px;
    background-color: #f4f4f9;
    margin: 2% auto;
    padding: 2%;
  }

  @keyframes fadeInSlideLeft {
  0% {
    opacity: 0;
    transform: translateX(-10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* End at original position */
  }
}

@keyframes fadeInSlideRight {
  0% {
    opacity: 0;
    transform: translateX(10%);
  }
  100% {
    opacity: 1;
    transform: translateX(0); /* End at original position */
  }
}

  @keyframes fadeInSlideUp {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Start 20px below its final position */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* End at its natural position */
  }
}

  @keyframes fadein {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fadeinRight {
  animation: fadeInSlideRight 1s ease-out forwards;
}

.fadeinLeft {
  animation: fadeInSlideLeft 1s ease-out forwards;
}

  @media (max-width: 1000px) {
  .pair {
    display: flex;
    flex-direction: column;
    /* background-color: #586F7C; */
  }

  .project {
    width: 100%;
    margin-bottom: 5%;
  }
}

</style>