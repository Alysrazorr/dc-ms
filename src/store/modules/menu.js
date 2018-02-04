const state = {
  menu: null
}

const mutations = {
  init: function(state, menus) {
    Object.keys(menus).forEach(menu => {
      console.log(menu)
    })
  }
}

export default {
  
}
