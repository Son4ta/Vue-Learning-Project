import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect: '/login' 
  },
  { 
    path: '/login', 
    name: 'login', 
    component: ()=> import('../views/login/Login') 
  },
  { 
    path: '/regist', 
    name: 'regist', 
    component: ()=> import('../views/regist/Regist') 
  },
  { 
    path: '/home', 
    name: 'home', 
    component: ()=> import('../views/home/index'),
    children:[
      {
        path: '/echarts', 
        name: 'echarts',
        component: ()=> import('../views/home/childrens/EchartsView'),
        mate: {
          title: '数据展示',
          icon: 'el-icon-s-data'
        },
      },
      {
        path: '/pay', 
        name: 'pay',
        component: ()=> import('../views/home/childrens/PayList'),
        mate: {
          title: '缴费管理',
          icon: 'el-icon-s-claim'
        },
      },
      {
        path: '/user', 
        name: 'user',
        component: ()=> import('../views/home/childrens/UserOne'),
        mate: {
          title: '住户信息',
          icon: 'el-icon-s-custom'
        },
        children:[
          {
            path: '/userlist', 
            name: 'userlist',
            component: ()=> import('../views/home/childrens/UserList'),
            mate: {
              classifyTitle: '住户信息',
              title: '住户信息列表'
            },
          },
          {
            path: '/userupdate', 
            name: 'userupdate',
            component: ()=> import('../views/home/childrens/UserUpdate'),
            mate: {
              classifyTitle: '住户信息',
              title: '住户信息修改'
            },
          },
        ]
      },
    ]
  },
  { 
    path: '*', 
    name: 'notfound', 
    component: ()=> import('../views/404/NotFound')
  },
]

const router = new VueRouter({
  routes
})

export default router
