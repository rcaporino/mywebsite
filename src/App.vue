<template>
  <div>
    <!-- <app-header> </app-header> -->
    <app-header v-bind="showSm"></app-header>
    <b-container>
      <b-row>
        <b-col cols="12">
          <b-card class="my-2 shadow-lg" bg-varient="primary">
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
        "/", "/education", "/contactme", "/testroute2"
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
  background-color: #f6f6f6;
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
