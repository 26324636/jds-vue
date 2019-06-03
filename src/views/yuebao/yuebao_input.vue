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
      <el-table-column prop="swzj" label="商务总监" width="120" align="center">
        <template scope="scope">
          <el-popover :ref="'popover-swzj-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_swzj">
            <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
              <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
              <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_swzj" />
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
      <el-table-column prop="sjzj" label="设计总监" width="120" align="center">
        <template scope="scope">
          <el-popover :ref="'popover-sjzj-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_sjzj">
            <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
              <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
              <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_sjzj" />
            </el-row>
            <el-table v-loading="loading" :data="sjzjData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseSjzj">
              <el-table-column label="No." type="index" align="center" />
              <el-table-column property="number" label="员工编号" width="100" align="center" />
              <el-table-column property="name" label="姓名" width="100" align="center" />
              <el-table-column property="corporation" label="公司" align="center" />
              <el-table-column property="department" label="部门" width="120" align="center" />
              <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
            </el-table>
            <pagination v-show="sjzjData.total>0" :total="sjzjData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getSjzjList" />
            <el-input slot="reference" v-model="scope.row.sjzj" size="mini" @focus="handleFocus(scope.row)" />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="xmfzr" label="项目负责人" width="140" align="center">
        <template scope="scope">
          <el-popover :ref="'popover-xmfzr-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_xmfzr">
            <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
              <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
              <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_xmfzr" />
            </el-row>
            <el-table v-loading="loading" :data="xmfzrData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseXmfzr">
              <el-table-column label="No." type="index" align="center" />
              <el-table-column property="number" label="员工编号" align="center" />
              <el-table-column property="name" label="姓名" align="center" />
              <el-table-column property="corporation" label="公司" align="center" />
              <el-table-column property="department" label="部门" align="center" />
              <el-table-column property="keyhint" label="关键信息" align="center" />
            </el-table>
            <pagination v-show="xmfzrData.total>0" :total="xmfzrData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getXmfzrList" />
            <el-input slot="reference" v-model="scope.row.xmfzr" size="mini" @focus="handleFocus(scope.row)" />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="ybwhr" label="月报维护人" width="140" align="center">
        <template scope="scope">
          <el-popover :ref="'popover-ybwhr-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_ybwhr">
            <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
              <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
              <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_ybwhr" />
            </el-row>
            <el-table v-loading="loading" :data="ybwhrData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseYbwhr">
              <el-table-column label="No." type="index" align="center" />
              <el-table-column property="number" label="员工编号" width="100" align="center" />
              <el-table-column property="name" label="姓名" width="100" align="center" />
              <el-table-column property="corporation" label="公司" align="center" />
              <el-table-column property="department" label="部门" width="120" align="center" />
              <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
            </el-table>
            <pagination v-show="ybwhrData.total>0" :total="ybwhrData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getYbwhrList" />
            <el-input slot="reference" v-model="scope.row.ybwhr" size="mini" @focus="handleFocus(scope.row)" />
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="项目来源" width="250" align="center">
        <template scope="scope">
          <el-select v-model="scope.row.xmly" size="mini" placeholder="" style="width:100%">
            <el-option v-for="(item,index) in xmlyData" :key="index" :label="item.value" :value="item.value" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="省份" width="250" align="center">
        <template scope="scope">
          <el-select v-model="scope.row.province" placeholder="省级地区" @change="choseProvince">
            <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.value" />
          </el-select>
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="市区" width="250" align="center">
        <template scope="scope">
          <el-select v-model="scope.row.city" placeholder="省级地区">
            <el-option v-for="item in shi" :key="item.id" :label="item.value" :value="item.value" />
          </el-select>
        </template>
      </el-table-column>
    </el-table>
    <hr>
    <el-button v-waves class="filter-item" type="primary" size="mini" icon="el-icon-search" @click="getData">
      获取数据
    </el-button>
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
      tableData: [{ id: 0, xmbh: '', swzj: '', xmly: '', province: '' }, { id: 1, xmbh: '', swzj: '', xmly: '' }, { id: 2, xmbh: '', swzj: '', xmly: '' }, { id: 3, xmbh: '', swzj: '', xmly: '' }],
      showDetail: false, // 隐藏细节
      swzjData: { total: 0, items: [] },
      sjzjData: { total: 0, items: [] },
      xmfzrData: { total: 0, items: [] },
      ybwhrData: { total: 0, items: [] },
      xmlyData: [],
      mapJson: '../../../json/map.json',
      province: '',
      city: '',
      shi: [],
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
    this.getSjzjList()
    this.getXmfzrList()
    this.getYbwhrList()
    this.getXmly()
    this.getCityData()
  },
  methods: {
    // 处理当前的是在处理哪一行
    handleFocus(actionItem) {
      this.actionItem = actionItem
    },
    // 加载china地点数据，三级
    getCityData: function() {
      var that = this
      var api = this.GLOBAL.Baseurl + '/China/list'
      Axios.get(api).then(function(response) {
        if (response.status === 200) {
          var data = response.data
          that.province = []
          that.city = []
          // 省市区数据分类
          for (var item in data) {
            if (item.match(/0000$/)) { // 省
              that.province.push({ id: item, value: data[item], children: [] })
            } else if (item.match(/00$/)) { // 市
              that.city.push({ id: item, value: data[item], children: [] })
            }
          }
          // 分类市级
          for (var index in that.province) {
            for (var index1 in that.city) {
              if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                that.province[index].children.push(that.city[index1])
              }
            }
          }
        } else {
          console.log(response.status)
        }
      }).catch(function(error) { console.log(typeof +error) })
    },
    // 选省
    choseProvince: function(e) {
      console.log(e)
      for (var index2 in this.province) {
        if (e === this.province[index2].value) {
          this.shi = this.province[index2].children
          // console.log(this.province[index2].children)
          // this.shi = this.province[index2].children[0].value
          // this.E = this.qu1[0].id
        }
      }
    },
    // // 选市
    // choseCity:function(e) {
    //   for (var index3 in this.city) {
    //     if (e === this.city[index3].id) {
    //       this.qu1 = this.city[index3].children
    //       this.qu = this.city[index3].children[0].value
    //       this.E = this.qu1[0].id
    //       // console.log(this.E)
    //     }
    //   }
    // },
    // // 选区
    // choseBlock:function(e) {
    //   this.E=e;
    //   // console.log(this.E)
    // },
    // 获取项目来源
    getXmly() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/xmly_list'
      Axios.get(api).then(response => {
        // console.log(response.data)
        this.xmlyData = response.data.data
      })
    },
    // 获取月报维护人
    getYbwhrList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/ybwhr_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.ybwhrData = response.data
        this.loading = false
      })
    },
    // 搜索月报维护人
    search_people_ybwhr() {
      this.listQuery.page = 1
      this.getYbwhrList()
    },
    // 双击选择月报维护人
    chooseYbwhr(row, column) {
      var id = this.actionItem.id
      this.actionItem.ybwhr = row.name
      this.$refs[`popover-ybwhr-` + id].doClose()
      console.log(this.tableData)
    },
    // 隐藏月报维护人弹出框
    hidePopover_ybwhr() {
      this.resetQuery()
      this.getYbwhrList()
    },
    // 获取项目负责人
    getXmfzrList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/xmfzr_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.xmfzrData = response.data
        this.loading = false
      })
    },
    // 搜索项目负责人
    search_people_xmfzr() {
      this.listQuery.page = 1
      this.getXmfzrList()
    },
    // 双击选择项目负责人
    chooseXmfzr(row, column) {
      var id = this.actionItem.id
      this.actionItem.xmfzr = row.name
      this.$refs[`popover-xmfzr-` + id].doClose()
      console.log(this.tableData)
    },
    // 隐藏项目负责人弹出框
    hidePopover_xmfzr() {
      this.resetQuery()
      this.getXmfzrList()
    },
    // 获取设计总监
    getSjzjList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/sjzj_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.sjzjData = response.data
        this.loading = false
      })
    },
    // 搜索设计总监
    search_people_sjzj() {
      this.listQuery.page = 1
      this.getSjzjList()
    },
    // 双击选择设计总监
    chooseSjzj(row, column) {
      var id = this.actionItem.id
      this.actionItem.sjzj = row.name
      this.$refs[`popover-sjzj-` + id].doClose()
      console.log(this.tableData)
    },
    // 隐藏设计总监弹出框
    hidePopover_sjzj() {
      this.resetQuery()
      this.getSjzjList()
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
    // 搜索商务总监
    search_people_swzj() {
      this.listQuery.page = 1
      this.getSwzjList()
    },
    // 双击选择商务总监
    chooseSwzj(row, column) {
      var id = this.actionItem.id
      this.actionItem.swzj = row.name
      this.$refs[`popover-swzj-` + id].doClose()
    },
    // 隐藏商务总监弹出框
    hidePopover_swzj() {
      this.resetQuery()
      this.getSwzjList()
    },
    // 关闭某一行的弹出层
    // pClose(id) {
    //   this.$refs[`popover-` + id].doClose()
    // },
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
    getData() {
      console.log(this.tableData)
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
    text-align: center;
  }
  .app-main{
      /* overflow: visible  !important; */
     /* overflow-x:scroll !important; */
     /* overflow-y:visible !important; */
  }
  .el-table{
     /* overflow: visible  !important; */
     /* overflow-x:scroll !important; */
     /* overflow-y:visible !important; */
  }
  .el-table__body-wrapper{
    /* overflow: visible  !important; */
     /* overflow-x:scroll !important; */
     /* overflow-y:visible !important; */
  }
  .pagination-container{
      padding: 15px 16px 0 16px !important;
  }

</style>

