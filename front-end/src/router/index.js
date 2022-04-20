import Vue from 'vue'
import Router from 'vue-router'
// 导入路由
// import Home from '@/components/Home'
// import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    // require注册路由
    // {
    //   path: '/login',
    //   name: 'Login',
    //   components: require('@/components/Login')
    // }
    // 官方推荐懒加载路由
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/Home'),
      // 隐藏遍历不显示路由
      hidden: true
    },
    
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/Login'),
      // 隐藏遍历不显示路由
      hidden: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFound'),
      // 隐藏遍历不显示路由
      hidden: true
    },
    {
      path: '/students',
      name: 'Student Management',
      // 重定向
      redirect: '/students/list',
      iconClass:'fas fa-users-cog',
      component: () => import('@/components/Students'),
      children: [
        {
          path: '/students/list',
          name: 'Student List',
          iconClass:'fas fa-house-user',
          component: () => import('@/components/students/StudentList')
        },
        {
          path: '/students/work',
          name: 'Work List',
          iconClass:'fas fa-user-tie',
          component: () => import('@/components/students/WorkList')
        },
        {
          path: '/students/attendance',
          name: 'Attendance Management',
          iconClass:'fas fa-user-edit',
          component: () => import('@/components/students/AttendanceManagement')
        },
        {
          path: '/students/information',
          name: 'Student Information',
          iconClass:'fas fa-user-lock',
          component: () => import('@/components/students/StudentInformation')
        }
      ]
    },
    
  ],
  mode: 'history'
})
