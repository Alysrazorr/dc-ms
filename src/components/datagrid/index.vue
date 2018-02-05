<template>
  <iconPanel :title="options.title">
    <div class="aface datagrid-container" slot="body">
      <div class="toolbar">
        每页<input type="text" name="pageSize" class="pageSize">条
      </div>
      <table class="datatable">
        <thead>
          <th v-for="column of getColumns" :key="column.title">{{column.title}}</th>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row[options.idKey ? options.idKey : defaults.idKey]">
            <td v-for="column of getColumns" :key="column.title">{{row[column.title]}}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <div class="infos">当前第&nbsp;1&nbsp;至&nbsp;100&nbsp;条，共&nbsp;1500&nbsp;条</div>
        <div class="pages">
          <i class="material-icons none-select">first_page</i>
          <i class="material-icons none-select">chevron_left</i>
          <i class="page none-select active">1</i>
          <i class="page none-select">2</i>
          <i class="page none-select">3</i>
          <i class="page none-select">4</i>
          <i class="material-icons none-select">chevron_right</i>
          <i class="material-icons none-select">last_page</i>
        </div>
      </div>
    </div>
  </iconPanel>
</template>

<script>
export default {
  name: 'datagrid',
  props: {
    options: Object
  },
  data: function() {
    return {
      defaults: {
        idKey: 'p_id',
        url: null,
        columns: []
      },
      rows: [
        {
          p_id: '1', col1: 'qwe', col2: 'asd', col3: 'zxc'
        }, {
          p_id: '2', col1: 'qwe', col2: 'asd', col3: 'zxc'
        }, {
          p_id: '3', col1: 'qwe', col2: 'asd', col3: 'zxc'
        }
      ]
    }
  },
  computed: {
    getColumns: function() {
      return this.options.columns
    }
  }
}
</script>

<style lang="scss" scoped>
$shadow-sky: 0 4px 20px 0px rgba(0,0,0, 0.14), 0 7px 10px -5px rgba($color-sky, 0.4);
div.datagrid-container {
  &>div {
    &.toolbar {
      margin-top:40px;
      height: 50px;
    }
    &.pagination {
      height: 55px;
      &>div.infos {
        position: absolute;
        left: 15px;
        height: 50px;
        line-height: 70px;
        color: $color-5;
        font: {
          weight: 100;
          family: $font-family;
          size: 15px;
        }
      }
      &>div.pages {
        position: absolute;
        right: 15px;
        height: 50px;
        line-height: 65px;
        color: $color-5;
        cursor: pointer;
        &>i {
          font: {
            size: 16px;
            weight: 100;
            style: normal;
          }
          margin: {
            top: 20px;
            left: 5px;
          }
          &.material-icons {
            font-size: 24px;
          }
          border-radius: 9999px;
          float: left;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          @include transition(100ms);

          &.active, &:hover {
            color: $color-f;
            background-color: $color-sky;
            box-shadow: $shadow-sky;
          }
        }
      }
    }
  }
  &>table.datatable {
    border-spacing: 0;
    width: 100%;
    &>thead {
      &>th {
        padding: 15px;
        text-align: left;
        font: {
          weight: 100;
          family: $font-family;
          size: 20px;
        }
      }
    }
    &>tbody {
      &>tr>td {
        font: {
          size: 14px;
          weight: 100;
          family: $font-family;
        }
        padding: 15px;
        border-bottom: solid 1px $color-d;
      }
      &>tr:hover {
        background-color: #f9f9f9;
      }
    }
  }
}
</style>
