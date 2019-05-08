<template>
  <el-container>
    <el-header>
      <nav-bar />
    </el-header>
    <el-main>
      <transition appear mode="out-in" :name="transitionName">
        <router-view/>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import { Container, Header, Main } from 'element-ui';
import NavBar from '@/components/nav-bar.vue';

export default {
  created() {
    this.transitionName = 'slide-right';
  },
  components: {
    ElContainer: Container,
    ElHeader: Header,
    ElMain: Main,
    NavBar,
  },
  watch: {
    $route(to, from) {
      const toIndex = this.routeIndex(to.name);
      const fromIndex = this.routeIndex(from.name);
      this.transitionName = toIndex < fromIndex ? 'slide-right' : 'slide-left';
    },
  },
  methods: {
    routeIndex(name) {
      return this.$router.options.routes.findIndex(route => route.name === name);
    },
  },
};
</script>

<style>
body {
  color: #602020;
}

.el-container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 24px;
}

.el-main {
  overflow-x: hidden;
}

.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  position: relative;
  transition: all .3s ease-out;
}

.slide-right-enter,
.slide-left-leave-to {
  transform: translateX(-70vw);
}

.slide-left-enter,
.slide-right-leave-to {
  transform: translateX(70vw);
}
</style>
