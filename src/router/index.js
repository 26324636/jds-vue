import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'gad集团项目信息系统', affix: true }
      }
    ]
  },
  {
    path: '/message',
    component: Layout,
    redirect: '/message/table',
    name: 'Message',
    meta: { title: '消息公告', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '最新消息', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '消息管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/matter',
    component: Layout,
    redirect: '/matter/table',
    name: 'Matter',
    meta: { title: '我的事项', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '产值切分表', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '产值切分表汇总', icon: 'tree' }
      },
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '我的产值表', icon: 'tree' }
      }
    ]
  },

  {
    path: '/report',
    component: Layout,
    redirect: '/report/table',
    name: 'Report',
    meta: { title: '月报周报', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/yuebao/yuebao_input'),
        meta: { title: '月报输入' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '已输入月报表' }
      },
      {
        path: 'yuebao',
        name: 'Yuebao',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '月报查看（辅运营）' }
      },
      {
        path: 'ryyjcx',
        name: 'Ryyjcx',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '人员业绩查询' }
      },
      {
        path: 'zbsr',
        name: 'Zbsr',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '周报输入' }
      },
      {
        path: 'ysrzbb',
        name: 'Ysrzbb',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '已输入周报表' }
      },
      {
        path: 'wbzfsr',
        name: 'Wbzfsr',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '外包支付输入' }
      },
      {
        path: 'ysrwbzf',
        name: 'Ysrwbzf',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '已输入外包支付' }
      },
      {
        path: 'jtjyzb',
        name: 'Jtjyzb',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '集团经营指标' }
      },
      {
        path: 'ybck',
        name: 'Ybck',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '月报查看（技术中心）' }
      }
    ]
  },

  {
    path: '/sysmng',
    component: Layout,
    redirect: '/sysmng/table',
    name: 'Sysmng',
    meta: { title: '系统管理', icon: 'example' },
    alwaysShow: true,
    children: [
      {
        path: 'changepwd',
        name: 'Changepwd',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '修改密码', icon: 'table' }
      }
    ]
  },

  {
    path: '/adminopera',
    component: Layout,
    redirect: '/adminopera/table',
    name: 'Adminopera',
    meta: { title: '管理员操作', icon: 'example' },
    children: [
      {
        path: 'zhgl',
        name: 'Zhgl',
        component: () => import('@/views/user/user'),
        meta: { title: '账号管理', icon: 'table' }
      },
      {
        path: 'qxhz',
        name: 'Qxhz',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '权限操作汇总', icon: 'table' }
      }
    ]
  },

  {
    path: '/reportmng',
    component: Layout,
    redirect: '/reportmng/table',
    name: 'Reportmng',
    meta: { title: '集团周报月报管理', icon: 'example' },
    children: [
      {
        path: 'zhoubaomng',
        name: 'Zhoubaomng',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '集团周报管理', icon: 'table' }
      },
      {
        path: 'yuebaomng',
        name: 'Yuebaomng',
        component: () => import('@/views/table/drag-table'),
        meta: { title: '集团月报管理', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
