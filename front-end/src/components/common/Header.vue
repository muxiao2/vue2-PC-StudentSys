<template>
    <div class="header">
        <el-header>
            <router-link to="/home">
            <i class="fas fa-closed-captioning"></i>MX
            </router-link>
            <div>{{ username }}</div>
        </el-header>
    </div>
</template>

<script>

export default {
    data() {
        return {
            username: ''
        }
    },
    created() {
        this.username = localStorage.getItem('username')
    },
}
</script>

<style scoped>
.header .el-header {
    background-color: #10401c;
    color: #ffcc66;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
}
.header .el-header a {
    color: #ffcc66;
    font-size: 24px;
    text-decoration: none;
}
</style>