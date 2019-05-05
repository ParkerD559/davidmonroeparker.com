<template>
  <el-container>
    <el-header>
      <nav-bar />
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import { Container, Header, Main } from 'element-ui';
import NavBar from '@/components/nav-bar.vue';

export default {
  components: {
    ElContainer: Container,
    ElHeader: Header,
    ElMain: Main,
    NavBar,
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
</style>
