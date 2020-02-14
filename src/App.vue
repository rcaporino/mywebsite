<template>
  <div>
    <app-header></app-header>
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col cols="5">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
    <div style="height 200px; width: 200px;"></div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
body {
  background: #5d4964 !important;
}
</style>
