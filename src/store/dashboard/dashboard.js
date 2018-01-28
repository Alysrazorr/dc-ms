import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  toggled: false,
  activeMenuTabId: 'menu1',
  menus: [
    {
      name: '平台运行监控',
      id: 'menu1',
      children: [
        {
          name: '数据监控大屏',
          id: 'menu11',
          icon: 'fas fa-chart-line',
          url: '/monitor/report',
          desc: '平台整体运行状况'
        },
        {
          name: '交换节点监控',
          id: 'menu12',
          icon: 'fab fa-codepen',
          url: '/monitor/exchangeNode',
          desc: ''
        },
        {
          name: '资源入库监控',
          id: 'menu13',
          icon: 'fas fa-upload',
          url: '/monitor/subjectStore'
        },
        {
          name: '资源共享监控',
          id: 'menu14',
          icon: 'fas fa-share-alt',
          url: '/monitor/subjectShare'
        },
        {
          name: '数据任务监控',
          id: 'menu15',
          icon: 'fas fa-chart-area',
          url: '/monitor/dataTask'
        }
      ]
    },
    {
      name: '交换节点配置',
      id: 'menu2',
      children: [
        {
          name: '接入前置机节点',
          id: 'menu21',
          url: '/monitor/report'
        },
        {
          name: '接入接口节点',
          id: 'menu22',
          url: '/monitor/exchangeNode'
        },
        {
          name: '推送前置机节点',
          id: 'menu23',
          url: '/monitor/subjectStore'
        },
        {
          name: '推送接口节点',
          id: 'menu24',
          url: '/monitor/subjectShare'
        }
      ]
    },
    {
      name: '数据处理任务',
      id: 'menu3',
      children: [
        {
          name: '数据接入任务',
          id: 'menu31',
          url: '/dataPullTask',
          desc: '将数据从前置机读取到交换库'
        },
        {
          name: '数据检查任务',
          id: 'menu32',
          url: '/dataCheckTask',
          desc: '检查数据质量'
        },
        {
          name: '数据校验任务',
          id: 'menu33',
          url: '/dataVerificationTask',
          desc: '校验数据质量'
        },
        {
          name: '数据清洗任务',
          id: 'menu34',
          url: '/dataETLTask',
          desc: '清洗数据'
        },
        {
          name: '数据转换任务',
          id: 'menu35',
          url: '/dataTransformTask',
          desc: '对数据进行转换'
        },
        {
          name: '数据推送任务',
          id: 'menu36',
          url: '/dataPushTask',
          desc: '推送数据'
        },
        {
          name: '任务标签管理',
          id: 'menu37',
          url: '/tag',
          desc: '管理任务标签'
        }
      ]
    },
    {
      name: '数据质量管理',
      id: 'menu4',
      children: [
        {
          name: '数据质量监测',
          id: 'menu41',
          url: '/dataQualityMonitor',
          desc: '监测数据质量情况'
        },
        {
          name: '数据质量报告',
          id: 'menu42',
          url: '/dataQualityReport',
          desc: '监测数据质量情况导出报告'
        }
      ]
    },
    {
      name: '数据资源管理',
      id: 'menu5',
      children: [
        {
          name: '交换库目录管理',
          id: 'menu51',
          url: '/dataDirectory/exchange',
          desc: ''
        },
        {
          name: '共享库目录管理',
          id: 'menu52',
          url: '/dataDirectory/share',
          desc: ''
        },
        {
          name: '交换库主题管理',
          id: 'menu53',
          url: '/dataSubject/exchange',
          desc: ''
        },
        {
          name: '共享库主题管理',
          id: 'menu54',
          url: '/dataSubject/share',
          desc: ''
        },
        {
          name: '主题生命周期管理',
          id: 'menu55',
          url: '/dataSubject/lifeCycle',
          desc: ''
        }
      ]
    },
    {
      name: '数据状况统计',
      id: 'menu6',
      children: [
        {
          name: '交换库主题统计',
          id: 'menu61',
          url: '/statistics/dataSubject/exchange',
          desc: ''
        },
        {
          name: '共享库主题统计',
          id: 'menu62',
          url: '/statistics/dataSubject/share',
          desc: ''
        },
        {
          name: '数据入库统计',
          id: 'menu63',
          url: '/statistics/store',
          desc: ''
        },
        {
          name: '数据共享统计',
          id: 'menu64',
          url: '/statistics/share',
          desc: ''
        }
      ]
    },
    {
      name: '平台运行维护',
      id: 'menu7',
      children: [
        {
          name: '组织结构管理',
          id: 'menu71',
          url: '/auth/organization',
          desc: ''
        },
        {
          name: '用户管理',
          id: 'menu72',
          url: '/auth/user',
          desc: ''
        },
        {
          name: '角色管理',
          id: 'menu73',
          url: '/auth/role',
          desc: ''
        },
        {
          name: '系统权限管理',
          id: 'menu74',
          url: '/auth/urlPermission',
          desc: ''
        },
        {
          name: '数据权限管理',
          id: 'menu75',
          url: '/auth/dataPermission',
          desc: ''
        },
        {
          name: '运维任务管理',
          id: 'menu76',
          url: '/auth/maintainceTask',
          desc: ''
        }
      ]
    }
  ]
}

const mutations = {
  toggleMenu: function(state) {
    state.toggled = !state.toggled
  },
  activeMenuTab: function(state, id) {
    state.activeMenuTabId = id
  }
}

export default new Vuex.Store({
  state, mutations
})
