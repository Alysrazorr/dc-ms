<template>
  <iconPanel :title="options.title">
    <div class="aface datagrid-container" slot="body">
      <div class="toolbar">
        <textbox :label="'关键字'" :callbacks="searchboxCallbacks" class="search-box"/>
      </div>
      <table class="datatable">
        <thead>
          <th v-if="hasRanking" class="ranking">#</th>
          <th v-if="hasCheckbox" class="checkbox">
            <checkbox ref="checkAll" @click.native="checkAll()" :isChecked="allChecked"/>
          </th>
          <th v-for="column of getColumns" :key="column.key" class="column none-select"
            @click="setSorter(column.key)"
            v-bind:style="{width: column.width}">
            <span>{{column.title}}</span>
            <i class="material-icons sort">{{getSorter(column.key)}}</i>
          </th>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="row[options.idKey ? options.idKey : defaults.idKey]">
            <td v-if="hasRanking" class="ranking">{{getRanking(index)}}</td>
            <td v-if="hasCheckbox" class="checkbox">
              <checkbox ref="checkboxes" @click.native="checkOne(index)"/>
            </td>
            <td v-for="column of getColumns" :key="column.key">{{row[column.key]}}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td v-if="hasRanking" class="ranking"></td>
            <td v-if="hasCheckbox" class="checkbox"></td>
            <td v-for="column of getColumns" :key="column.key">{{column.title}}</td>
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
    options: Object
  },
  data: function() {
    return {
      defaults: {
        idKey: 'p_id',
        url: null,
        columns: [],
        sorters: {},
        hasCheckbox: false,
        hasRanking: false
      },
      sorters: {},
      allChecked: false,
      searchboxCallbacks: {
        pressEnter: this.getRemoteData
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
    },
    hasCheckbox: function() {
      return typeof this.options.hasCheckbox === 'undefined' ? this.defaults.hasChecbox : this.options.hasCheckbox
    },
    hasRanking: function() {
      return typeof this.options.hasRanking === 'undefined' ? this.defaults.hasRanking : this.options.hasRanking
    }
  },
  methods: {
    getRemoteData: function() {
      var _vm = this
      var url = _vm.options.url
      if (typeof url === 'undefined') {
        return
      }
      _vm.$http.post(url, _vm.getCheckedRowIds()).then((resp) => {
        console.log(resp)
      })
    },
    setSorter: function(title) {
      if (typeof this.sorters[title] === 'undefined') {
        this.$set(this.sorters, title, 'asc')
        return
      }
      if (this.sorters[title] === 'asc') {
        this.sorters[title] = 'desc'
        return
      }
      if (this.sorters[title] === 'desc') {
        this.sorters[title] = undefined
        return
      }
    },
    getSorter: function(title) {
      return this.sorters[title] ? this.sorters[title] === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down' : null
    },
    getRanking: function(index) {
      return index + 1
    },
    getCheckedRowIds: function() {
      var ids = []
      this.$refs.checkboxes.forEach(checkbox => {
        if (checkbox.getIsChecked()) {
          ids.push(checkbox.get)
        }
      })
      return ids
    },
    getCheckedRows: function() {
      var rows = []
      this.$refs.checkboxed.forEach(checkbox => {
        if (checkbox.getIsChecked()) {
          rows.push(checkbox)
        }
      })
      return rows
    },
    checkAll: function() {
      var _vm = this
      _vm.allChecked = !_vm.allChecked
      _vm.$refs.checkboxes.forEach(checkbox => {
        checkbox.setIsChecked(_vm.allChecked)
      })
    },
    checkOne: function(index) {
      var _vm = this
      _vm.$refs.checkboxes.some(checkbox => {
        _vm.allChecked = checkbox.getIsChecked()
        return !_vm.allChecked
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$shadow-sky: 0 4px 20px 0px rgba(136, 69, 69, 0.14), 0 7px 10px -5px rgba($color-sky, 0.4);
div.datagrid-container {
  &>div {
    &.toolbar {
      position: relative;
      height: 80px;
      &>div.search-box {
        position: absolute;
        right: 0;
        width: 200px;
      }
    }
    &.pagination {
      height: 50px;
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
        color: $color-5;
        cursor: pointer;
        &>i {
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
            box-shadow: $shadow-sky;
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
          weight: 600;
          family: $font-family;
        }
        &.checkbox, &.ranking {
          min-width: 50px;
          text-align: center;
          font: {
            size: 20px;
            weight: 100;
            family: $font-family;
          }
        }
      }
    }
  }
}
</style>
