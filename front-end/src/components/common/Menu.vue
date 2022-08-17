<template>
  <div class="menu">
    <el-aside width="250px">
      <el-menu
        router
        :default-active="activePath"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#10401c"
        text-color="#d3d6d9"
        active-text-color="#ffcc66"
      >
        <template v-for="(item, index) in menus">
          <el-submenu :index="index + ''" :key="index" v-if="!item.hidden">
            <template slot="title">
              <!-- 图标 -->
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [],
      activePath: "",
    };
  },
  created() {
    this.menus = [...this.$router.options.routes];
    this.activePath = this.$router.currentRoute.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.menu .el-aside {
  position: absolute;
  /* 铺满屏幕计算属性 */
  height: calc(100vh - 60px);
}
.menu .el-aside .el-menu {
  height: 100%;
  text-align: left;
}
.menu .el-aside .el-submenu i {
  color: #d3d6d9;
  margin-right: 5px;
}
.menu .el-aside .el-menu-item.is-active i {
  color: #ffcc66;
}
</style>