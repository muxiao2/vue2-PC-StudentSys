<template>
    <div class="home">
        <el-container class="item">
            <el-card class="box-card" v-for="(item, index) in 10" :key="index">
                {{ 'Card0' + (index + 1) }}
            </el-card>
        </el-container>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.home {
    width: 100vw;
    height: 100vh;
}
.home .item {
    justify-content: center;
    padding: 50px 100px;
    flex-wrap: wrap;
}
.home .item .el-card {
    width: 200%;
    min-width: 260px;
    max-width: 200px;
    height: 320px;
    line-height: 200px;
    font-size: 24px;
    color: #10401c;
    margin: 20px 40px;
    cursor: pointer;
    transition: transform .7s;
}
.home .item .el-card:hover {
    transform: scale(1.05);
}
</style>