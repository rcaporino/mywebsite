<template>
    <div>
      <b-row align-h="center" class="m-md-4 p-md-4" cols="1" cols-md="2" align-content="center">
        <b-col xs="auto" sm="auto" md="auto" lg="3" xl="3" class="">
        <b-img src='../assets/headshot.png' alt="Image of Rob Caporino" v-bind="imageProps" rounded="circle" class="mx-auto d-block"></b-img>
        </b-col>
        <b-col xs="auto" sm="auto" md="auto" lg="8">
        <h1 class="text-md-left text-center">Rob Caporino</h1>
        <br>
        <p>Hello! My name is Rob Caporino, I am a recent graduate from Saint Joseph's College with a bachelors in Math and Computer Science. I built this website as
          a place to share my projects on.</p>
        <p> I am currently looking for a job in the field of computer science. I have a deep passion for programming and love learning new languages,
          tools, and frameworks. The languages I am most comfortable with are java, javascript, and python. I have always been very interested in mobile development,
          and learning Vuejs to build this website has sparked a new found love in web development.</p>
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      imageProps: {
        width:200,
        height:200
      }
    }
  }
};
</script>

<style>

</style>