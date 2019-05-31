<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg" justify="center">
      <el-select v-model="topSelectVal" size="small" style="width: 150px;">
        <el-option v-for="(item,index) in topSelect" :key="index" :label="item.value" :value="item.value" />
      </el-select>
      <el-input v-model="topInputVal" placeholder="请输入内容" size="small" style="width: 200px;" class="filter-item" />
      <el-button v-waves class="filter-item" type="primary" size="mini" icon="el-icon-search" @click="search">
        搜索
      </el-button>
    </el-row>
    <el-table class="tableMain" :data="tableData" border style="width: 100%;margin-top:20px;" :header-cell-style="getHeaderClass" :cell-style="{padding:'5px'}">
      <el-table-column fixed label="No." width="50" type="index" align="center" />
      <el-table-column fixed prop="date" label="项目编号" width="150" align="center">
        <template scope="scope">
          <el-input v-model="scope.row.xmbh" size="mini" />
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="项目名称" width="150" align="center">
        <template scope="scope">
          <el-input v-model="scope.row.xmmc" size="mini" />
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="子项编号" width="150" align="center">
        <template scope="scope">
          <el-input v-model="scope.row.zxbh" size="mini" />
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="子项名称" width="150" align="center">
        <template scope="scope">
          <el-input v-model="scope.row.zxmc" size="mini" />
        </template>
      </el-table-column>
      <el-table-column prop="swzj" label="商务总监" width="150" align="center">
        <template scope="scope">
          <el-popover :ref="'popover-' + scope.row.id" placement="input" trigger="click" @show="show_swzj" @hide="hidePopover_swzj">
            <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
              <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
              <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people" />
            </el-row>
            <el-table v-loading="loading" :data="swzjData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseSwzj">
              <el-table-column label="No." type="index" align="center" />
              <el-table-column property="number" label="员工编号" align="center" />
              <el-table-column property="name" label="姓名" align="center" />
              <el-table-column property="corporation" label="公司" align="center" />
              <el-table-column property="department" label="部门" width="120" align="center" />
              <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
            </el-table>
            <pagination v-show="swzjData.total>0" :total="swzjData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getSwzjList" />
            <el-input slot="reference" v-model="scope.row.swzj" size="mini" @focus="handleFocus(scope.row)" />
          </el-popover>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Axios from 'axios'
export default {
  name: 'YuebaoInput',
  directives: { waves },
  components: { Pagination },
  data() {
    return {
      topSelect: [{ value: '项目编号' }, { value: '项目名称' }, { value: '子项编号' }, { value: '子项名称' }, { value: '项目负责人' }],
      topSelectVal: '',
      topInputVal: '',
      tableData: [{ id: 0, xmbh: '', swzj: '' }, { id: 1, xmbh: '', swzj: '' }, { id: 2, xmbh: '', swzj: '' }, { id: 3, xmbh: '', swzj: '' }],
      showDetail: false, // 隐藏细节
      swzjData: {
        total: 0,
        items: []
      },
      actionItem: '',
      listQuery: {
        page: 1,
        limit: 10,
        name: ''
      },
      loading: false

    }
  },
  created() {
    this.getSwzjList()
  },
  methods: {
    show_swzj() {
      console.log('显示')
    },
    // 处理当前的是在处理哪一行
    handleFocus(actionItem) {
      this.actionItem = actionItem
    },
    // 双击选择商务总监
    chooseSwzj(row, column) {
      this.actionItem.swzj = row.name
      this.pClose(this.actionItem.id)
      console.log(this.tableData)
    },
    // 关闭某一行的弹出层
    pClose(id) {
      this.$refs[`popover-` + id].doClose()
    },
    // 表头样式
    getHeaderClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0 && columnIndex !== 0 && columnIndex !== 1 && columnIndex !== 2 && columnIndex !== 3 && columnIndex !== 4) {
        return 'background:#F2F2F2;color:#5792C6;'
      } else {
        return 'background:#F2F2F2;color:green;'
      }
    },
    // 弹出框table表头样式
    getChildHeaderClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background:#F2F2F2;font-size:5px;height:10px;padding:0;'
      } else {
        return 'background:#F2F2F2;color:green;'
      }
    },
    // 弹出框table表样式
    getChildMainClass({ row, column, rowIndex, columnIndex }) {
      return 'font-size:1px;padding:5px;'
    },
    // 重置查询条件
    resetQuery() {
      this.listQuery = { page: 1, limit: 10, name: '' }
    },
    // 隐藏商务总监弹出框
    hidePopover_swzj() {
      console.log('隐藏了')
      this.resetQuery()
      this.getSwzjList()
    },
    // 获取商务总监
    getSwzjList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/swzj_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.swzjData = response.data
        this.loading = false
      })
    },
    search_people() {
      this.listQuery.page = 1
      this.getSwzjList()
    },
    search() {
      console.log(this.tableData[0].xmbh)
    }
  }
}
</script>

<style>
  body{
    background: #f1f1f1;
  }
  .filter-container{
    margin: auto;
  }
  .filter-item{
    margin-left: 10px !important;
  }
  .tableMain .el-input input{
    padding: 10px !important;
  }
  .el-table{
     overflow: inherit !important;
  }
  .el-table__body-wrapper{
    overflow: inherit !important;
  }
  .pagination-container{
      padding: 15px 16px 0 16px !important;
  }

</style>

