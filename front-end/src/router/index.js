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
      path: '/',
      redirect:'/login',
      hidden: true
    },
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
        },
        {
          path: '/students/infoList',
          name: 'Information List',
          iconClass:'fas fa-list-alt',
          component: () => import('@/components/students/InformationList')
        }
      ]
    },
    {
      path: '/students',
      name: 'Data Analysis',
      iconClass:'fas fa-database',
      component: () => import('@/components/Students'),
      children: [
        {
          path: '/dataAnalysis/dataOverview',
          name: 'Data Overview',
          iconClass: 'fas fa-chart-line',
          component: () => import('@/components/dataAnalysis/DataOverview'),
        },
        {
          path: '/dataAnalysis/mapData',
          name: 'Map Data',
          iconClass: 'fas fa-map-marker-alt',
          component: () => import('@/components/dataAnalysis/MapData'),
        },
        {
          path: '/dataAnalysis/travelMap',
          name: 'Travel Map',
          iconClass: 'fas fa-map-pin',
          component: () => import('@/components/dataAnalysis/TravelMap'),
        },
        {
          path: '/dataAnalysis/percentage',
          name: 'percentage',
          iconClass: 'fas fa-map-pin',
          component: () => import('@/components/dataAnalysis/percentage'),
        },
        {
          path: '/dataAnalysis/tfourtong',
          name: 'tfourtong',
          iconClass: 'fas fa-map-pin',
          component: () => import('@/components/dataAnalysis/tfourtong'),
        },
        
      ]
    },
  ],
  mode: 'history'
})
