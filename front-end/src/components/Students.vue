<template>
    <div class="students">
        <!-- 头部封装 -->
        <Header></Header>
        <el-container>
            <!-- Menu菜单栏封装 -->
            <Menu></Menu>
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
                <el-card class="jiange">
                    <router-view></router-view>
                </el-card>
            </main>
            <!-- 尾部声明 -->
            <Footer></Footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import Menu from '@/components/common/Menu.vue'
export default {
    components: {
        Header,
        Footer,
        Menu
    },
    data() {
        return {
            menus: [],
            activePath: '',
        }
    },
}
</script>

<style scoped>
.students {
    width: 100vw;
    height: 100vh;
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
    /* height: calc(100% - 100px); */
    margin-bottom: 20px;
}
.students .el-card.jiange {
    margin-top: 20px;
}
</style>