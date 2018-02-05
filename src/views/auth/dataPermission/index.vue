<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8">
          <datagrid :options="datagrid"></datagrid>
        </div>
        <div class="col-4">
          <datagrid :options="datagrid"></datagrid>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-8">
            <iconPanel :title="'表格'">
              <div class="row" slot="body">
                <div class="col-4">
                  <textbox :label="'用户名'" />
                </div>
                <div class="col-4"></div>
                <div class="col-4"></div>
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
        columns: [
          {
            title: 'col1'
          }, {
            title: 'col2'
          }, {
            title: 'col3'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
