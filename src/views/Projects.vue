<template>
    <div>
    <b-row class="p-md-4 mx-md-4" cols="1" cols-md="2" align-content="center">
      <b-col xs="auto" sm="auto" md="12" lg="12">
        <h1 class="text-md-left text-center">Projects</h1>
        <hr>
        <p>Here are some projects i have completed. I will update this page as I complete new ones so stay tuned! I am currently working on two 
          different mobile apps using Flutter.
        </p>
      </b-col>
    </b-row>

    <b-row class="px-md-4 pm-md-4 mx-md-4 mb-4 " cols="1" cols-md="2" align-content="center">
      <b-col md="12">
        <b-card-group deck>
          <b-card v-for="(project, index) in allProjects" :key="index"
            :title="project.title"
            :img-src="project.image"
            :img-alt="project.alt"
            img-top
            tag="article"
            class="p-2 shadow neumorphism">
            <a :href="project.link" target="_blank" class="stretched-link"></a>
            <b-card-text>
              {{project.description}}
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
      return {
        allProjects: [
          {title: "RobCaporino.com", description: "View the source code for this single page website built with Vuejs here.", 
            image: require("../assets/R.Caporino_logo_thumbnail.png"), alt:"Rob Caporino Logo",
            link: "https://github.com/rcaporino/mywebsite"}
        ]
      }
    }
}
</script>

<style>
.card-img-top {
    width: 100%;
    height: 10vw;
    object-fit: cover;
}

article:hover {
  background: #efefef !important;
  box-shadow: 
    -20px -20px 40px 0px rgba(255,255,255,1),
    20px 20px 40px 1px rgba(0,0,0,0.3) !important; 
}

@media (max-width: 767px) {
  .card-img-top {
    width: 100%;
    height: 30vw;
    object-fit: cover;
}
}
</style>