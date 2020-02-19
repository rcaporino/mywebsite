<template>
  <div>
    <b-row class="p-md-4 mx-4" cols="1" cols-md="2" align-content="center">
      <b-col xs="auto" sm="auto" md="auto" lg="8">
        <h1 class="text-md-left text-center">Contact Details</h1>
        <br>
        <p>Feel free to contact me at: </p>
        <a href="mailto:rcaporino@gmail.com?subject=Business Inquiry"><img src="../assets/mail.svg" v-bind="imageProps" alt="email"></a>
        <a href="mailto:rcaporino@gmail.com?subject=Business Inquiry"> rcaporino@gmail.com</a>
        <br>
        <a href="tel:6313329711"><img src="../assets/phone.svg" v-bind="imageProps" alt="phone"></a>
        <a href="tel:6313329711"> 631-332-9711</a>
        <br>
        <a href="https://www.linkedin.com/in/Rob-A-Caporino/"> <img src="../assets/linkedin.svg" v-bind="imageProps" alt="linkedin"></a>
        <a href="https://www.linkedin.com/in/Rob-A-Caporino/"> Linkedin.com/Rob-A-Caporino</a>
        <br><br>
        <p>The best way to contact me would be through email.</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "Contact-Me",
    data () {
      return {
        imageProps: {
        width:20,
        height:20
      }
      }
    }
}
</script>

<style>

</style>