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
import router from '../router/index.js'
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
            },
            menuData: {}
        }
    },
    created() {
        // this.getMenuData()
    },
    methods: {
        // 请求数据的方法
        // getMenuData() {
        //   this.service.get('menu/menu')  
        //   .then(res => {
        //       if(res.data.status === 200)  {
        //         //   console.log(res.data.data)
        //           res.data.data.forEach(item => {
        //               item.component = () => import(item.component)
        //             //   console.log(item)
        //             item.children.forEach(child => {
        //                 child.component = () => import(child.component)
        //                 console.log(child)
        //             })
        //           })
        //           this.menuData = res.data.data[0]
        //       }
        //   })
        //   .catch(err => {
        //       throw err
        //   })
        // },
      loginHandle (form) {
        console.log(this.$refs);
        console.log(form);
        // 登录验证
        this.$refs[form].validate(valid => {
            if(valid) {
                console.log(valid);
                console.log(this.form);
                // 测试
                this.service.post('login',this.form)
                .then(res => {
                    console.log(res);
                    localStorage.setItem('username', res.data.username)
                    if(res.data.status === 200) {
                        // this.$message({
                        //     message: res.data.msg,
                        //     type:'success'
                        // })
                        this.$router.push('/students')
                        // 菜单栏权限
                        // 1.请求菜单权限数据
                        // let routerArr = 
                        //     {
                        //     path: '/students',
                        //     name: 'Data Analysis',
                        //     iconClass:'fas fa-database',
                        //     component: () => import('@/components/Students'),
                        //     children: [
                        //         {
                        //         path: '/dataAnalysis/dataOverview',
                        //         name: 'Data Overview',
                        //         iconClass: 'fas fa-chart-line',
                        //         component: () => import('@/components/dataAnalysis/DataOverview'),
                        //         },
                        //         {
                        //         path: '/dataAnalysis/mapData',
                        //         name: 'Map Data',
                        //         iconClass: 'fas fa-map-marker-alt',
                        //         component: () => import('@/components/dataAnalysis/MapData'),
                        //         },
                        //         {
                        //         path: '/dataAnalysis/travelMap',
                        //         name: 'Travel Map',
                        //         iconClass: 'fas fa-map-pin',
                        //         component: () => import('@/components/dataAnalysis/TravelMap'),
                        //         },
                        //     ]
                        //     }
                        // 2.数据添加到路由
                        // this.$router.addRoutes([routerArr])
                        // this.$router.options.routes.push(routerArr)
                        // console.log(this.$router.options.routes)

                        //登陆后拿到数据 
                        // console.log(this.menuData)
                        // this.$router.addRoutes([this.menuData])
                        // this.$router.options.routes.push(this.menuData)
                        // console.log(this.$router.options.routes)

                        // 跳转
                        // this.$router.push('/students')
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
    background: url("http://student.muxiao.xyz/images/bg1.jpg") no-repeat 0px 0px /100% 100%;
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