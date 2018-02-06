const state = {
  activeMenuTabId: 'menu1',
  activeMenuItemId: 'menu11',
  menus: [
    {
      name: '平台运行监控',
      id: 'menu1',
      icon: 'desktop_windows',
      children: [
        {
          name: '数据监控大屏',
          id: 'menu11',
          icon: 'tv',
          url: '/monitor/report',
          desc: '平台整体运行状况'
        },
        {
          name: '交换节点监控',
          id: 'menu12',
          icon: 'bubble_chart',
          url: '/monitor/exchangeNode',
          desc: ''
        },
        {
          name: '资源入库监控',
          id: 'menu13',
          icon: 'cloud_upload',
          url: '/monitor/subjectStore',
          desc: ''
        },
        {
          name: '资源共享监控',
          id: 'menu14',
          icon: 'cloud_download',
          url: '/monitor/subjectShare',
          desc: ''
        },
        {
          name: '数据任务监控',
          id: 'menu15',
          icon: 'assignment',
          url: '/monitor/dataTask',
          desc: ''
        }
      ]
    },
    {
      name: '交换节点配置',
      id: 'menu2',
      icon: 'settings_input_composite',
      children: [
        {
          name: '接入前置机节点',
          id: 'menu21',
          icon: 'storage',
          url: '/exchangeNode/fepPull',
          desc: ''
        },
        {
          name: '接入接口节点',
          id: 'menu22',
          icon: 'cloud_upload',
          url: '/exchangeNode/apiPull',
          desc: ''
        },
        {
          name: '推送前置机节点',
          id: 'menu23',
          icon: 'storage',
          url: '/exchangeNode/fepPush',
          desc: ''
        },
        {
          name: '推送接口节点',
          id: 'menu24',
          icon: 'cloud_download',
          url: '/exchangeNode/apiPush',
          desc: ''
        }
      ]
    },
    {
      name: '数据处理任务',
      id: 'menu3',
      icon: 'apps',
      children: [
        {
          name: '数据接入任务',
          id: 'menu31',
          icon: 'cloud_upload',
          url: '/dataTask/pull',
          desc: '将数据从前置机读取到交换库'
        },
        {
          name: '数据检查任务',
          id: 'menu32',
          icon: 'star_half',
          url: '/dataTask/check',
          desc: '检查数据质量'
        },
        {
          name: '数据校验任务',
          id: 'menu33',
          icon: 'content_copy',
          url: '/dataTask/verify',
          desc: '校验数据质量'
        },
        {
          name: '数据清洗任务',
          id: 'menu34',
          icon: 'find_replace',
          url: '/dataTask/etl',
          desc: '清洗数据'
        },
        {
          name: '数据转换任务',
          id: 'menu35',
          icon: 'translate',
          url: '/dataTask/transform',
          desc: '对数据进行转换'
        },
        {
          name: '数据推送任务',
          id: 'menu36',
          icon: 'cloud_download',
          url: '/dataTask/push',
          desc: '推送数据'
        },
        {
          name: '任务标签管理',
          id: 'menu37',
          icon: 'local_offer',
          url: '/dataTask/tag',
          desc: '管理任务标签'
        }
      ]
    },
    {
      name: '数据质量管理',
      id: 'menu4',
      icon: 'star_half',
      children: [
        {
          name: '数据质量监测',
          id: 'menu41',
          icon: 'star_half',
          url: '/dataQuality/monitor',
          desc: '监测数据质量情况'
        },
        {
          name: '数据质量报告',
          id: 'menu42',
          icon: 'picture_as_pdf',
          url: '/dataQuality/report',
          desc: '监测数据质量情况导出报告'
        }
      ]
    },
    {
      name: '数据资源管理',
      id: 'menu5',
      icon: 'layers',
      children: [
        {
          name: '交换库目录管理',
          id: 'menu51',
          icon: 'folder',
          url: '/dataDirectory/exchange',
          desc: ''
        },
        {
          name: '共享库目录管理',
          id: 'menu52',
          icon: 'folder_shared',
          url: '/dataDirectory/share',
          desc: ''
        },
        {
          name: '交换库主题管理',
          id: 'menu53',
          icon: 'cloud_circle',
          url: '/dataSubject/exchange',
          desc: ''
        },
        {
          name: '共享库主题管理',
          id: 'menu54',
          icon: 'cloud_circle',
          url: '/dataSubject/share',
          desc: ''
        },
        {
          name: '主题生命周期管理',
          id: 'menu55',
          icon: 'data_usage',
          url: '/dataSubject/lifeCycle',
          desc: ''
        }
      ]
    },
    {
      name: '数据状况统计',
      id: 'menu6',
      icon: 'trending_up',
      children: [
        {
          name: '交换库主题统计',
          id: 'menu61',
          icon: 'show_chart',
          url: '/statistics/dataSubject/exchange',
          desc: ''
        },
        {
          name: '共享库主题统计',
          id: 'menu62',
          icon: 'show_chart',
          url: '/statistics/dataSubject/share',
          desc: ''
        },
        {
          name: '数据入库统计',
          id: 'menu63',
          icon: 'show_chart',
          url: '/statistics/store',
          desc: ''
        },
        {
          name: '数据共享统计',
          id: 'menu64',
          icon: 'show_chart',
          url: '/statistics/share',
          desc: ''
        }
      ]
    },
    {
      name: '平台运行维护',
      id: 'menu7',
      icon: 'settings',
      children: [
        {
          name: '组织机构管理',
          id: 'menu71',
          icon: 'domain',
          url: '/auth/organization',
          desc: ''
        },
        {
          name: '用户管理',
          id: 'menu72',
          icon: 'account_circle',
          url: '/auth/user',
          desc: ''
        },
        {
          name: '角色管理',
          id: 'menu73',
          icon: 'account_box',
          url: '/auth/role',
          desc: ''
        },
        {
          name: '系统权限管理',
          id: 'menu74',
          icon: 'extension',
          url: '/auth/urlPermission',
          desc: ''
        },
        {
          name: '数据权限管理',
          id: 'menu75',
          icon: 'perm_data_setting',
          url: '/auth/dataPermission',
          desc: ''
        },
        {
          name: '运行维护管理',
          id: 'menu76',
          icon: 'slow_motion_video',
          url: '/platform/maintaince',
          desc: ''
        }
      ]
    }
  ]
}

const mutations = {
  activeMenuTab: function(state, id) {
    state.activeMenuTabId = id
  },
  activeMenuItem: function(state, id) {
    state.activeMenuItemId = id
  }
}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
