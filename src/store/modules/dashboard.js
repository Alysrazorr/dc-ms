const state = {
  isDrawerActive: false,
  activeMenuId: null,
  activeItemId: null,
  activeItemTitle: '数据中心',
  menus: [
    {
      id: 'menu_0',
      name: '平台运行监控',
      icon: 'desktop_windows',
      children: [
        {
          id: 'menu_0_0',
          name: '数据监控大屏',
          icon: 'tv',
          url: '/monitor/bigScreen'
        },
        {
          id: 'menu_0_1',
          name: '交换节点监控',
          icon: 'bubble_chart',
          url: '/monitor/exchangeNode'
        },
        {
          id: 'menu_0_2',
          name: '资源入库监控',
          icon: 'cloud_upload',
          url: '/monitor/dataStore'
        },
        {
          id: 'menu_0_3',
          name: '资源共享监控',
          icon: 'cloud_download',
          url: '/monitor/dataShare'
        },
        {
          id: 'menu_0_4',
          name: '数据任务监控',
          icon: 'assignment',
          url: '/monitor/dataTask'
        }
      ]
    },
    {
      id: 'menu_1',
      name: '交换节点配置',
      icon: 'settings_input_composite',
      children: [
        {
          id: 'menu_1_0',
          name: '接入前置机节点',
          icon: 'storage',
          url: '/exchangeNode/fepPull'
        },
        {
          id: 'menu_1_1',
          name: '接入接口节点',
          icon: 'cloud_upload',
          url: '/exchangeNode/apiPull'
        },
        {
          id: 'menu_1_2',
          name: '推送前置机节点',
          icon: 'storage',
          url: '/exchangeNode/fepPush'
        },
        {
          id: 'menu_1_3',
          name: '推送接口节点',
          icon: 'cloud_download',
          url: '/exchangeNode/apiPush'
        }
      ]
    },
    {
      id: 'menu_2',
      name: '数据处理任务',
      icon: 'apps',
      children: [
        {
          id: 'menu_2_0',
          name: '数据接入任务',
          icon: 'cloud_upload',
          url: '/dataTask/pull'
        },
        {
          id: 'menu_2_1',
          name: '数据检查任务',
          icon: 'star_half',
          url: '/dataTask/check'
        },
        {
          id: 'menu_2_2',
          name: '数据校验任务',
          icon: 'content_copy',
          url: '/dataTask/verify'
        },
        {
          id: 'menu_2_3',
          name: '数据清洗任务',
          icon: 'find_replace',
          url: '/dataTask/etl'
        },
        {
          id: 'menu_2_4',
          name: '数据转换任务',
          icon: 'translate',
          url: '/dataTask/transform'
        },
        {
          id: 'menu_2_5',
          name: '数据推送任务',
          icon: 'cloud_download',
          url: '/dataTask/push'
        },
        {
          id: 'menu_2_6',
          name: '任务标签管理',
          icon: 'local_offer',
          url: '/dataTask/tag'
        }
      ]
    },
    {
      id: 'menu_3',
      name: '数据质量管理',
      icon: 'star_half',
      children: [
        {
          id: 'menu_3_0',
          name: '数据质量监测',
          icon: 'star_half',
          url: '/dataQuality/monitor'
        },
        {
          id: 'menu_3_1',
          name: '数据质量报告',
          icon: 'picture_as_pdf',
          url: '/dataQuality/report'
        }
      ]
    },
    {
      id: 'menu_4',
      name: '数据资源管理',
      icon: 'layers',
      children: [
        {
          id: 'menu_4_0',
          name: '交换库目录管理',
          icon: 'folder',
          url: '/dataDirectory/exchange'
        },
        {
          id: 'menu_4_1',
          name: '共享库目录管理',
          icon: 'folder_shared',
          url: '/dataDirectory/share'
        },
        {
          id: 'menu_4_2',
          name: '交换库主题管理',
          icon: 'cloud_circle',
          url: '/dataSubject/exchange'
        },
        {
          id: 'menu_4_3',
          name: '共享库主题管理',
          icon: 'cloud_circle',
          url: '/dataSubject/share'
        },
        {
          id: 'menu_4_4',
          name: '主题生命周期管理',
          icon: 'data_usage',
          url: '/dataSubject/lifeCycle'
        }
      ]
    },
    {
      id: 'menu_5',
      name: '数据状况统计',
      icon: 'trending_up',
      children: [
        {
          id: 'menu_5_0',
          name: '交换库主题统计',
          icon: 'show_chart',
          url: '/statistics/dataSubject/exchange'
        },
        {
          id: 'menu_5_1',
          name: '共享库主题统计',
          icon: 'show_chart',
          url: '/statistics/dataSubject/share'
        },
        {
          id: 'menu_5_2',
          name: '数据入库统计',
          icon: 'show_chart',
          url: '/statistics/store'
        },
        {
          id: 'menu_5_3',
          name: '数据共享统计',
          icon: 'show_chart',
          url: '/statistics/share'
        }
      ]
    },
    {
      id: 'menu_6',
      name: '平台运行维护',
      icon: 'settings',
      children: [
        {
          id: 'menu_6_0',
          name: '组织机构管理',
          icon: 'domain',
          url: '/auth/organization'
        },
        {
          id: 'menu_6_1',
          name: '用户管理',
          icon: 'account_circle',
          url: '/auth/user'
        },
        {
          id: 'menu_6_2',
          name: '角色管理',
          icon: 'account_box',
          url: '/auth/role'
        },
        {
          id: 'menu_6_3',
          name: '系统权限管理',
          icon: 'extension',
          url: '/auth/urlPermission'
        },
        {
          id: 'menu_6_4',
          name: '数据权限管理',
          icon: 'perm_data_setting',
          url: '/auth/dataPermission'
        },
        {
          id: 'menu_6_5',
          name: '数据字典管理',
          icon: 'g_translate',
          url: '/platform/dictionary'
        },
        {
          id: 'menu_6_6',
          name: '运行维护管理',
          icon: 'slow_motion_video',
          url: '/platform/maintaince'
        }
      ]
    }
  ]
}

const mutations = {
  toggleDrawer: state => {
    state.isDrawerActive = !state.isDrawerActive
    window.sessionStorage.setItem('isDrawerActive', state.isDrawerActive)
  },
  setIsDrawerActive: (state, is) => {
    state.isDrawerActive = is
  },
  activeMenu: (state, id) => {
    state.activeMenuId = id
    window.sessionStorage.setItem('activeMenuId', state.activeMenuId)
  },
  activeItem: (state, payload) => {
    state.activeItemId = payload.id
    state.activeItemTitle = payload.title
    window.sessionStorage.setItem('activeItemId', state.activeItemId)
    window.sessionStorage.setItem('activeItemTitle', state.activeItemTitle)
  }
}

const actions = {}

const getters = {
  isDrawerActive: state => state.isDrawerActive,
  activeMenuId: state => state.activeMenuId,
  activeItemTitle: state => state.activeItemTitle,
  activeItemId: state => state.activeItemId
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
