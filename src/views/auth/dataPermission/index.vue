<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <datagrid ref="dg" :options="datagrid"></datagrid>
        </div>
        <div class="col-6">
          <iconPanel :title="'测试表单'" :iconfont="'format_list_numbered'">
            <div slot="body">
              <div class="row">
                <div class="col-2">
                  <dropbox :label="'当前页'"/>
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
                <div class="col-4"></div>
              </div>
            </div>
          </iconPanel>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-8">
            <iconPanel :title="'表格'">
              <div slot="body">
                <div class="row">
                  <div class="col-4">
                    <textbox :label="'账号'" />
                  </div>
                  <div class="col-4">
                    <textbox :label="'密码'" />
                  </div>
                  <div class="col-4">
                    <textbox :label="'昵称'" />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-4">
                    <textbox :label="'账号'" />
                  </div>
                  <div class="col-8">
                    <textbox :label="'密码'" />
                  </div>
                </div>
              </div>
            </iconPanel>
        </div>
        <div class="col-4">
          <datagrid :options="datagrid"></datagrid>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      datagrid: {
        title: '数据表格',
        hasCheckbox: true,
        hasRanking: true,
        url: '/auth/urlPermission/getList',
        columns: [
          { title: 'col1', key: 'col1', width: '30%' },
          { title: 'col2', key: 'col2', width: '20%' },
          { title: 'col3', key: 'col3', width: '50%' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
