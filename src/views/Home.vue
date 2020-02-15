<template>
    <div>
      <b-row align-h="center" class="mt-3 m-4" cols="1" cols-md="2" align-content="center">
        <b-col xs="auto" sm="auto" md="auto" lg="3" xl="3">
        <b-img src='../assets/headshot.png' alt="Image of Rob Caporino" v-bind="imageProps" rounded="circle" class="mx-auto d-block"></b-img>
        </b-col>
        <b-col xs="auto" sm="auto" md="auto" lg="8">
        <h1 class="text-center text-lg-left">Rob Caporino</h1>
        <br>
        <p>Hello! My name is Rob Caporino, I am a recent graduate from Saint Joseph's College with a bachelors in Math and Computer Science.</p>
        </b-col>
      </b-row>
    </div>
</template>

<script>
export default {
  name: "Home",
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
.card {
  background-color: #f9f9fb !important;
}

.card-text{
  color: #555555 !important;
}
</style>