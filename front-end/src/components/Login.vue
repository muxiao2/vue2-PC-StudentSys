<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>Login</span>
            </div>
            <div class="text item">
                <!-- 表单验证 -->
               <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                <el-form-item label="UserName" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="PassWord" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loginHandle('form')">Sign in</el-button>
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
            },
            rules: {
                username: [
                    { required:true, message: 'Please input user name', trigger: 'blur'},
                    { min: 4, max: 9, message: 'The user name contains 4 to 9 characters', trigger: ['blur','change']}
                    ],
                password: [
                    { required: true, message: 'Please input your password', trigger: 'blur'},
                    { min: 6, max: 16, message: 'The passwork contains 6 to 16 characters', trigger: ['blur', 'change']}
                ]
            }
        }
    },
    methods: {
      loginHandle (form) {
        // console.log(this.$refs);
        // 登录验证
        this.$refs[form].validate(valid => {
            if(valid) {
                console.log(this.form);
                // 测试
                this.service.post('login',this.form)
                .then(res => {
                    // console.log(res);
                    localStorage.setItem('username', res.data.username)
                    if(res.data.status === 200) {
                        this.$message({
                            message: res.data.msg,
                            type:'success'
                        })
                        // 跳转
                        this.$router.push('/students')
                    }else {
                        this.$message.error(res.data.msg)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
            }else {
                console.error(this.form);
            }
        })
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