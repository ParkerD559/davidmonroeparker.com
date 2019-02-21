<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
    :default-active="$route.name"
    active-text-color="#000"
  >
    <template v-for='item in $router.options.routes'>
      <el-menu-item
        :index="item.name"
        :route="item"
        :key="item.name"
      >
        {{item.title}}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { Menu, MenuItem } from 'element-ui';

export default {
  components: {
    ElMenu: Menu,
    ElMenuItem: MenuItem,
  },
};
</script>

<style>
.el-menu {
    font-variant: all-small-caps;
}

.el-menu .el-menu-item {
    float: right;
    font-size: 20px;
    font-weight: bold;
}

.el-menu .el-menu-item:first-child {
    float: left;
}
</style>
