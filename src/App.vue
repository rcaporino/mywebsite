<template>
  <div>
    <!-- <app-header> </app-header> -->
    <app-header v-bind="showSm"></app-header>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card class="my-2 neumorphism" bg-varient="primary">
            <!-- <template v-slot:header>
              <app-header v-bind="showMedPlus"></app-header>
            </template> -->
            <app-header v-bind="showMedPlus"></app-header>
            <transition :name="transitionName" mode="out-in">
              <router-view></router-view>
            </transition>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
  data() {
    return {
      showSm: {
        class: "d-md-none"
      },
      showMedPlus: {
        class: "d-none d-md-block"
      },
      arrayOfPages: [
        "/", "/educationandskills", "/projects", "/contactme", "/vuejs"
      ],
      transitionName: "slide"
    }
  },
  components: {
    appHeader: Header
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      const toIndex = this.arrayOfPages.indexOf(to.path);
      const fromIndex = this.arrayOfPages.indexOf(from.path);
      this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left';
      next();
    });
  },
}
</script>

<style>
body {
  background-color: #efefef;
  font-family: 'Roboto Slab', serif;
  color: #333333;
}

.neumorphism {
  background-color: #f1f1f1 !important;
  box-shadow: 
    -5px -5px 10px 5px rgba(255,255,255,1),
    5px 5px 10px 1px rgba(0,0,0,0.3) !important;
}

.myBtn {
  color: #333333 !important;
  border: none !important;
}
.myBtn:hover {
  background: #efefef !important;
  box-shadow: 
    -20px -20px 30px 0px rgba(255,255,255,1),
    20px 20px 30px 1px rgba(0,0,0,0.3) !important;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
