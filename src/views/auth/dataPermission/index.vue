<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <datagrid ref="dg"
            :title="datagrid.title"
            :columns="datagrid.columns"
            :url="datagrid.url" />
        </div>
        <div class="col-4">
          <iconPanel :title="'测试表单'" :iconfont="'format_list_numbered'">
            <div slot="body">
              <div class="row">
                <div class="col-2">
                  <dropbox :label="'当前页'"/>
                </div>
                <div class="col-10">
                  <button class="aface sea" @click="errorBox = true">error</button>
                  <button class="aface sky" @click="infoBox = true">info</button>
                  <button class="aface grass" @click="successBox = true">success</button>
                  <button class="aface" @click="questionBox = true">question</button>
                  <button class="aface fire" @click="warningBox = true">warning</button>
                </div>
              </div>
            </div>
          </iconPanel>
        </div>
      </div>
    </div>
    <errorBox
      v-if="errorBox"
      @close="errorBox = false"/>
    <infoBox
      v-if="infoBox"
      @close="infoBox = false"/>
    <successBox
      v-if="successBox"
      @close="successBox = false"/>
    <questionBox
      v-if="questionBox"
      :message="'我日期六年级为群殴你为UN全文噢年轻哦问你？'"
      @ok="typeof okFunc === 'function' ? okFunc() : null" @close="questionBox = false"/>
    <warningBox
      v-if="warningBox"
      @close="warningBox = false"/>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      errorBox: false,
      infoBox: false,
      successBox: false,
      questionBox: false,
      warningBox: false,
      datagrid: {
        title: '数据表格2',
        hasCheckbox: true,
        hasRanking: true,
        url: '/auth/urlPermission/getList',
        columns: [
          { title: 'ID', key: 'p_id', width: '30%' },
          { title: '名称', key: 'p_name', width: '20%' },
          { title: 'col3', key: 'col3', width: '50%' }
        ]
      }
    }
  },
  methods: {
    okFunc: function() {
      this.questionBox = false
      this.infoBox = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
