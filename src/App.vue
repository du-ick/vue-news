<template>
  <div id="app">
    <Header />
    <transition name="page">
      <router-view></router-view>
    </transition>
    <Spinner :loading="loadingStatus" />
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue';
import Spinner from './components/SpinnerComp.vue';
import bus from './utils/eventBus.js';

export default {
  name: 'App',
  components: {
    Header,
    Spinner,

  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },  
  created () {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start: spinner', this.startSpinner)
    bus.$off('end: spinner', this.endSpinner)
  },
}
</script>

<style>
  body {background-color: #444; color: #fff;}
  a {text-decoration: none; color: #fff;}

  .page-enter-active, .page-leave-active { transition: opacity .3s;}
  .page-enter, .page-leave-to {opacity: 0;}

</style>
