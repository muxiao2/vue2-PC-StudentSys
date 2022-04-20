<template>
    <div class="students">
        <el-container>
            <el-header>
                <router-link to="/home">
                <i class="fas fa-closed-captioning"></i>
                </router-link>
                <div>muxiao</div>
            </el-header>
            <el-container>
                <el-aside width="250px">
                    <el-menu
                    router
                    :default-active="activePath"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#10401c"
                    text-color="#d3d6d9"
                    active-text-color="#ffcc66">
                    <template v-for="(item, index) in menus">
                        <el-submenu :index="index + '' " :key="index" v-if="!item.hidden">
                            <template slot="title">
                                <!-- 图标 -->
                                <i :class="item.iconClass"></i>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item-group v-for="(child,index) in item.children" :key="index">
                                <el-menu-item :index="child.path">
                                    <i :class="child.iconClass"></i>
                                    {{ child.name }}
                                    </el-menu-item>
                            </el-menu-item-group>    
                        </el-submenu>
                    </template>
                    </el-menu>
                </el-aside>
                <el-container class="content">
                    <!-- 自带路由出口 -->
                    <!-- <el-main>Main</el-main> -->
                <main>
                    <!-- 面包屑 -->
                    <el-card shadow="always">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item class="fontWeight" to="/home">Student</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{ item.name }}</el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-card>
                    <!-- 路由展示出口 -->
                    <router-view></router-view>
                </main>
                <!-- 尾部声明 -->
                <footer>Footer</footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>

export default {
    data() {
        return {
            menus: [],
            activePath: '',
        }
    },
    created() {
        // 存储拿到的路由
        // console.log(this.$router.options.routes);
        // console.log(this.$route.matched); 
        this.menus = [...this.$router.options.routes]
        this.activePath = this.$router.currentRoute.path
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.students {
    width: 100vw;
    height: 100vh;
}
.students .el-header {
    background-color: #10401c;
    color: #ffcc66;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}
.students .el-header a {
    color: #ffcc66;
    font-size: 24px;
    text-decoration: none;
}
.students .el-aside {
    position: absolute;
    /* 铺满屏幕计算属性 */
    height: calc(100vh - 60px);
}
.students .el-aside .el-menu {
    height: 100%;
    text-align: left;
}
.students .el-aside .el-submenu i {
    color: #d3d6d9;
    margin-right: 5px;
} 
.students .el-aside .el-menu-item.is-active i {
    color: #ffcc66;
}
.students .content {
    position: absolute;
    left: 240px;
    width: calc(100vw - 240px);
    padding: 20px;
    display: flex;
    flex-direction: column;
}
.students .content main {
    width: 100%;
    height: calc(100% - 100px);
    margin-bottom: 20px;
}
.students .content footer {
    width: 100%;
    line-height: 60px;
    color: #10401c;
}
</style>