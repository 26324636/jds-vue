<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.number" placeholder="请输入账号" size="small" style="width: 150px;" class="filter-item" />
      <el-input v-model="listQuery.name" placeholder="请输入姓名" size="small" style="width: 150px;" class="filter-item" />
      <el-button v-waves class="filter-item" type="primary" size="small" icon="el-icon-search" @click="search">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" size="small" type="primary" icon="el-icon-edit" @click="add">
        添加
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;">
      <el-table-column label="No." type="index" align="center" width="80" />
      <el-table-column label="账号" prop="number" align="center" />
      <el-table-column label="姓名" prop="name" align="center" />
      <el-table-column label="公司" prop="corporation" align="center" />
      <el-table-column label="部门" prop="department" align="center" />
      <el-table-column label="团队" prop="keyhint" align="center" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="edit(scope.row.id)"> 编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteUser(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="25%">
      <el-form :model="addForm">
        <el-form-item label="员工编号" :label-width="formLabelWidth" style="text-align:right">
          <el-input v-model="addForm.number" />
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" style="text-align:right">
          <el-input v-model="addForm.name" />
        </el-form-item>
        <el-form-item label="公司" :label-width="formLabelWidth" style="text-align:right">
          <el-select v-model="addForm.company" placeholder="请选择公司" style="width:100%">
            <el-option v-for="(item,index) in companyList" :key="index" :label="item.corporation" :value="item.corporation" />
          </el-select>
        </el-form-item>
        <el-form-item label="部门" :label-width="formLabelWidth" style="text-align:right">
          <el-select v-model="addForm.department" placeholder="请选择部门" style="width:100%">
            <el-option v-for="(item,index) in departmentList" :key="index" :label="item.department" :value="item.department" />
          </el-select>
        </el-form-item>
        <el-form-item label="关键字" :label-width="formLabelWidth" style="text-align:right">
          <el-input v-model="addForm.keyword" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?addUser():updateUser()">
          确认
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
// import { getUserList } from '@/api/admin'
import waves from '@/directive/waves' // waves directive
// import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Axios from 'axios'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        number: '',
        name: ''
      },
      dialogFormVisible: false,
      textMap: {
        update: '编辑用户',
        create: '添加用户'
      },
      dialogStatus: '',
      addForm: {
        name: '',
        number: '',
        company: '',
        department: '',
        keyword: ''
      },
      formLabelWidth: '80px',
      companyList: [],
      departmentList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取用户列表
    getList() {
      this.listLoading = true
      var api = this.GLOBAL.Baseurl + '/Admin/user_list'
      // var params = this.listQuery

      const param = new URLSearchParams()
      param.append('page', this.listQuery.page)
      param.append('limit', this.listQuery.limit)
      param.append('number', this.listQuery.number)
      param.append('name', this.listQuery.name)

      Axios.post(api, param).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    // 搜索按钮
    search() {
      this.listQuery.page = 1
      this.getList()
    },
    // 重置添加数据
    resetAddForm() {
      this.addForm = {
        id: '',
        name: '',
        number: '',
        company: '',
        department: '',
        keyword: ''
      }
    },
    // 添加按钮
    add() {
      console.log(111)
      this.resetAddForm()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.getCompany()
      this.getDepartment()
      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
      // })
    },
    // 编辑按钮
    edit(id) {
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.getCompany()
      this.getDepartment()
      this.getUserInfo(id)
    },

    // 获取用户信息
    getUserInfo(id) {
      var api = this.GLOBAL.Baseurl + '/Admin/user_info'
      var params = {
        id_data: id
      }
      Axios.get(api, { params }).then(response => {
        var mes = response.data.mes[0]
        this.addForm = {
          id: mes.id,
          name: mes.name,
          number: mes.number,
          company: mes.corporation,
          department: mes.department,
          keyword: mes.keyhint
        }
      })
    },
    // 获取公司
    getCompany() {
      var api = this.GLOBAL.Baseurl + '/Admin/arr_company'
      Axios.get(api).then(response => {
        this.companyList = response.data.company
      })
    },

    // 获取部门
    getDepartment() {
      var api = this.GLOBAL.Baseurl + '/Admin/arr_department'
      Axios.get(api).then(response => {
        this.departmentList = response.data.department
      })
    },

    // 添加用户
    addUser() {
      var addForm = this.addForm
      console.log(addForm)
      if (addForm.number === '') {
        this.$message({ message: '请输入员工编号', type: 'warning', duration: 1500 })
      } else if (addForm.name === '') {
        this.$message({ message: '请输入姓名', type: 'warning', duration: 1500 })
      } else if (addForm.company === '') {
        this.$message({ message: '请选择公司', type: 'warning', duration: 1500 })
      } else if (addForm.department === '') {
        this.$message({ message: '请选择部门', type: 'warning', duration: 1500 })
      } else if (addForm.keyword === '') {
        this.$message({ message: '请输入关键字', type: 'warning', duration: 1500 })
      } else {
        var api = this.GLOBAL.Baseurl + '/Admin/user_add'
        const param = new URLSearchParams()
        param.append('number_data', addForm.number)
        param.append('name_data', addForm.name)
        param.append('company_data', addForm.company)
        param.append('department_data', addForm.department)
        param.append('keyword_data', addForm.keyword)

        Axios.post(api, param).then(response => {
          console.log(response)
          if (response.data.status === -1) {
            this.$message({ message: '该用户已存在', type: 'warning', duration: 1500 })
          } else {
            this.$message({ message: '添加成功', type: 'success', duration: 1500 })
            this.dialogFormVisible = false
            this.resetAddForm()
            this.getList()
          }
        })
      }
    },
    // 更新用户
    updateUser() {
      var addForm = this.addForm
      console.log(addForm.id)
      if (addForm.number === '') {
        this.$message({ message: '请输入员工编号', type: 'warning', duration: 1500 })
      } else if (addForm.name === '') {
        this.$message({ message: '请输入姓名', type: 'warning', duration: 1500 })
      } else if (addForm.company === '') {
        this.$message({ message: '请选择公司', type: 'warning', duration: 1500 })
      } else if (addForm.department === '') {
        this.$message({ message: '请选择部门', type: 'warning', duration: 1500 })
      } else if (addForm.keyword === '') {
        this.$message({ message: '请输入关键字', type: 'warning', duration: 1500 })
      } else {
        var api = this.GLOBAL.Baseurl + '/Admin/user_update'
        const param = new URLSearchParams()
        param.append('id_data', addForm.id)
        param.append('number_data', addForm.number)
        param.append('name_data', addForm.name)
        param.append('company_data', addForm.company)
        param.append('department_data', addForm.department)
        param.append('keyword_data', addForm.keyword)

        Axios.post(api, param).then(response => {
          if (response.data.status === 1) {
            this.$message({ message: '保存成功', type: 'success', duration: 1500 })
            this.dialogFormVisible = false
            this.resetAddForm()
            this.getList()
          } else {
            this.$message({ message: '保存失败', type: 'error', duration: 1500 })
          }
        })
      }
    },
    // 删除用户
    deleteUser(id) {
      this.$confirm('删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var api = this.GLOBAL.Baseurl + '/Admin/user_del'
        var params = {
          id_data: id
        }
        Axios.get(api, { params }).then(response => {
          if (response.data.status === 1) {
            this.$message({ message: '删除成功', type: 'success', duration: 1500 })
            this.getList()
          } else {
            this.$message({ message: '删除失败', type: 'error', duration: 1500 })
          }
        })
      }).catch(() => {
        this.$message({ message: '已取消删除', type: 'info', duration: 1500 })
      })
    }

  }
}
</script>
<style>
  body{
    background: #f1f1f1;
  }
  .el-form-item {
      margin-bottom: 15px;
  }
</style>

