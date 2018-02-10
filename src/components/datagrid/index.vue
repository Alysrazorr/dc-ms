<template>
  <iconPanel :title="title">
    <div class="aface datagrid-container" slot="body">
      <div class="toolbar">
        <dropbox
          class="page-box"
          :options="pageSizeDropbox"/>
        <span class="">条/页</span>
        <textbox
          class="search-box"
          :label="'关键字搜索'"
          :onPressEnter="getRemoteData"/>
      </div>
      <table class="datatable">
        <thead>
          <th v-if="hasRanking" class="ranking">#</th>
          <th v-if="hasCheckbox" class="checkbox">
            <checkbox
              ref="checkAll"
              @click.native="checkAll()"
              :defaultChecked="isAllChecked"/>
          </th>
          <th 
            class="column none-select"
            v-for="column of columns" :key="column.key"
            :style="{width: column.width}"
            @click="setSorter(column.key)">
            <span>{{column.title}}</span>
            <i class="material-icons sort">{{getSorter(column.key)}}</i>
          </th>
        </thead>
        <tbody>
          <tr
            v-if="rows" v-for="(row, index) in rows" :key="row[idKey]">
            <td
              class="ranking"
              v-if="hasRanking">{{getRanking(index)}}</td>
            <td
              class="checkbox"
              v-if="hasCheckbox">
              <checkbox
                ref="checkboxes"
                :id="row[idKey]"
                @click.native="checkOne(index)"/>
            </td>
            <td v-for="column of columns" :key="column.key">{{row[column.key]}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td v-if="hasRanking" class="ranking"></td>
            <td v-if="hasCheckbox" class="checkbox"></td>
            <td v-for="column of columns" :key="column.key">{{column.title}}</td>
          </tr>
        </tfoot>
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
    title: {
      type: String,
      default: '数据表格'
    },
    idKey: {
      type: String,
      default: 'p_id'
    },
    url: {
      type: String,
      default: null
    },
    columns: {
      type: Array,
      default: undefined
    },
    hasCheckbox: {
      type: Boolean,
      default: true
    },
    hasRanking: {
      type: Boolean,
      default: true
    },
    pageSizeDropbox: {
      type: Object,
      default: function() {
        return {
          placeholder: '请选择',
          data: [{ text: '10', value: 10 }, { text: '20', value: 20 }, { text: '50', value: 50 }]
        }
      }
    }
  },
  data: function() {
    return {
      isAllChecked: false,
      sorts: [],
      rows: [],
      querys: {},
      pagination: {
        currPage: 1,
        pageSize: 10,
        totalPages: null,
        totalRecords: null
      }
    }
  },
  methods: {
    getRemoteData: function() {
      var _vm = this
      var url = _vm.url
      if (typeof url === 'undefined') {
        return
      }
      console.log(_vm.sorts)
      _vm.$http.post(url, {
        sorts: _vm.sorts,
        pagination: _vm.pagination,
        querys: _vm.querys
      }).then((resp) => {
        _vm.rows = resp.data.data
        console.log(resp)
      })
    },
    setSorter: function(title) {
      if (typeof this.sorts[title] === 'undefined') {
        this.$set(this.sorts, title, 'asc')
        return
      }
      if (this.sorts[title] === 'asc') {
        this.sorts[title] = 'desc'
        return
      }
      if (this.sorts[title] === 'desc') {
        this.sorts[title] = undefined
        return
      }
    },
    getSorter: function(title) {
      return this.sorts[title] ? this.sorts[title] === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down' : null
    },
    getRanking: function(index) {
      return index + 1
    },
    getCheckedRowIds: function() {
      var ids = []
      this.$refs.checkboxes.forEach(checkbox => {
        if (checkbox.isChecked) {
          ids.push(checkbox.id)
        }
      })
      return ids
    },
    getCheckedRows: function() {
      var rows = []
      this.$refs.checkboxed.forEach(checkbox => {
        if (checkbox.isChecked) {
          rows.push(checkbox)
        }
      })
      return rows
    },
    checkAll: function() {
      var _vm = this
      _vm.isAllChecked = !_vm.isAllChecked
      if (!_vm.$refs.checkboxes) {
        return
      }
      _vm.$refs.checkboxes.forEach(checkbox => {
        checkbox.isChecked = _vm.isAllChecked
      })
    },
    checkOne: function(index) {
      var _vm = this
      _vm.$refs.checkboxes.some(checkbox => {
        _vm.isAllChecked = checkbox.isChecked
        return !_vm.isAllChecked
      })
    }
  },
  mounted: function() {
    var _vm = this
    _vm.$nextTick(function() {
      if (_vm.url) {
        _vm.getRemoteData()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
div.datagrid-container {
  &>div {
    &.toolbar {
      position: relative;
      height: 80px;
      &>div.page-box {
        position: absolute;
        top: 20px;
        left: 0;
        width: 80px;
      }
      &>div.search-box {
        position: absolute;
        right: 0;
        width: 200px;
      }
      &>span {
        position: absolute;
        top: 20px;
        left: 90px;
        height: 40px;
        line-height: 40px;
        color: $color-3;
        font: {
          size: 14px;
          weight: 100;
        }
      }
    }
    &.pagination {
      height: 50px;
      &>div.infos {
        position: absolute;
        left: 20px;
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
        color: $color-5;
        &>i {
          cursor: pointer;
          font: {
            weight: 100;
            style: normal;
          }
          margin: {
            top: 20px;
            left: 5px;
          }
          border-radius: 9999px;
          float: left;
          width: 30px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          @include transition(100ms);

          &:hover {
            background-color: $color-e;
          }

          &.active {
            color: $color-f;
            background-color: $color-sky;
            @include higher-shadow($color-sky);
          }
          &.material-icons {
            font-size: 24px;
          }
          &.page {
            font-size: 14px;
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
        padding: 0 5px;
        color: $color-3;
        font: {
          size: 20px;
          weight: 100;
          family: $font-family;
        }
        &.checkbox, &.ranking {
          min-width: 60px;
        }
        &.ranking {
          font-size: 20px;
        }
        &.checkbox {
          font-size: 0;
          text-align: left;
        }
        &.column {
          cursor: pointer;
          &>* {
            color: $color-0;
            float: left;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
    &>tbody {
      &>tr>td {
        padding: 10px 5px;
        color: $color-0;
        border-bottom: solid 1px $color-d;
        word-break:break-all;
        font: {
          size: 14px;
          weight: 100;
          family: $font-family;
        }
        &.checkbox, &.ranking {
          min-width: 50px;
          text-align: center;
        }
        &.checkbox {
          font-size: 0;
          text-align: left;
        }
      }
      &>tr:hover {
        background-color: #f9f9f9;
      }
      &>tr:first-child {
        &>td {
          border-top: solid 1px $color-d;
        }
      }
    }
    &>tfoot {
      &>tr>td {
        padding: 5px;
        color: $color-3;
        font: {
          size: 13px;
          weight: 100;
          family: $font-family;
        }
        &.checkbox, &.ranking {
          min-width: 60px;
        }
        &.ranking {
          font-size: 20px;
          text-align: center;
        }
        &.checkbox {
          font-size: 0;
          text-align: left;
        }
      }
    }
  }
}
</style>
