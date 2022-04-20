<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Login</span>
            </div>
            <div class="text item">
               <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="UserName">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="PassWord">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Sign in</el-button>
                </el-form-item>
                </el-form>
            </div>
        </el-card>

        
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
            username: '',
            password: ''
            }
        }
    },
    methods: {
      onSubmit () {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: lightblue;
}
.login .box-card {
    width: 520px;
    margin: 280px auto;
}
.login .box-card .el-button {
    width: 100%;
    background-color: lightblue;
    border-color: lightblue;
}
</style>