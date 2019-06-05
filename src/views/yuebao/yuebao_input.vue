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
        <template slot-scope="scope">
          <el-input v-model="scope.row.xmbh" size="mini" />
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="项目名称" width="150" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.xmmc" size="mini" />
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="子项编号" width="150" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zxbh" size="mini" />
        </template>
      </el-table-column>
      <el-table-column fixed prop="date" label="子项名称" width="150" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.zxmc" size="mini" />
        </template>
      </el-table-column>
      <el-table-column prop="swzj" label="商务总监" width="120" align="center">
        <template slot-scope="scope">
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
        <template slot-scope="scope">
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
      <div v-if="can">
        <el-table-column prop="xmfzr" label="项目负责人" width="140" align="center">
          <template slot-scope="scope">
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
          <template slot-scope="scope">
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
          <template slot-scope="scope">
            <el-select v-model="scope.row.xmly" size="mini" placeholder="" style="width:100%">
              <el-option v-for="(item,index) in xmlyData" :key="index" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="省份" width="170" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.province" size="mini" placeholder="" style="width:100%;" @change="choseProvince" @focus="handleFocus(scope.row)">
              <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="城市" width="170" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.city" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in shi" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="项目等级" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.xmdj" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in xmdjData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="合同签订状态" width="150" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.htqdzt" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in htqdztData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="合同签订时间" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.htqdsj" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="合同建筑面积数" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.htjzmjs" type="number" step="0.1" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="合同建筑面积单位" width="130" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.htjzmjdw" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="产值前置面积类型" width="200" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.czqzmjlx" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in czqzmjlxData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="产值前置面积(万方)" width="120" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.czqzmj" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="子项原始合同额(万)" width="120" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zxyshte" type="number" step="0.000001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="子项合同结算额(万)" width="120" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zxhtzse" type="number" step="0.000001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="子项外包合同额(万)" width="120" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.zxwbhte" type="number" step="0.000001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="结构超限" width="140" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.jgcx" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in jgcxData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="收款切分项目类型" width="140" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.skqfxmlx" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in skqfxmlxData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="设计阶段组成" width="140" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.sjjdzc" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in sjjdzcData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="合同签订公司" width="150" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.htqdgs" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in htqdgsData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="拓展公司" width="150" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.tzgs" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in tzgsData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="是单专业/全专业扩初项目" width="180" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.kcxmlx" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in kcxmlxData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="方案扩初二合一报批" width="140" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.fakcehybp" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in fakcehybpData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="项目进度" width="180" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.xmjd" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in xmjdData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="项目进度-新" width="180" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.xmjdnew" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in xmjdnewData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="起始日期-方案" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.qsrq_fa" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="终止日期-方案" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.zzrq_fa" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="参与专业-方案" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.cyzy_fa" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in cyzy_faData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="起始日期-扩初" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.qsrq_kc" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="终止日期-扩初" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.zzrq_kc" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="参与专业-扩初" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.cyzy_kc" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in cyzy_kcData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="起始日期-施工图" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.qsrq_sgt" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="终止日期-施工图" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.zzrq_sgt" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="参与专业-施工图" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.cyzy_sgt" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in cyzy_sgtData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="起始日期-后期" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.qsrq_hq" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="终止日期-后期" width="150" align="center">
          <template slot-scope="scope">
            <el-date-picker v-model="scope.row.zzrq_hq" style="width:100%;" size="mini" value-format="yyyy-MM-dd" type="date" placeholder="" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="参与专业-后期" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.cyzy_hq" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in cyzy_hqData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="规划景观BIM标记" width="150" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.ghjgbim" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in ghjgbimData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="截止上年年末已完成工作量比例--方案" width="140" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.jzsbnmywcgzlbl_fa" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="截止上年年末已完成工作量比例--扩初" width="140" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.jzsbnmywcgzlbl_kc" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="截止上年年末已完成工作量比例--施工图" width="140" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.jzsbnmywcgzlbl_sgt" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="截止上年年末已完成工作量比例--后期服务" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.jzsbnmywcgzlbl_hqfw" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="累计至提报日期已完成工作量比例--方案" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.ljztbrqywcgzlbl_fa" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="累计至提报日期已完成工作量比例--扩初" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.ljztbrqywcgzlbl_kc" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="累计至提报日期已完成工作量比例--施工图" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.ljztbrqywcgzlbl_sgt" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="累计至提报日期已完成工作量比例--后期服务" width="160" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.ljztbrqywcgzlbl_hqfw" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="本年预计完成合同额判断标准" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="预计至本年年末可完成工作量比例--方案" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.yjzbnmkwcgzlbl_fa" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="预计至本年年末可完成工作量比例--扩初" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.yjzbnmkwcgzlbl_kc" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="预计至本年年末可完成工作量比例--施工图" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.yjzbnmkwcgzlbl_sgt" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="预计至本年年末可完成工作量比例--后期服务" width="160" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.yjzbnmkwcgzlbl_hqfw" type="number" step="0.0001" min="0" size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="是否长期暂停" width="120" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.sfcqzt" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in sfcqztData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="青岛项目是否做供暖" width="140" align="center">
          <template slot-scope="scope">
            <el-select v-model="scope.row.qdxmsfzgn" size="mini" placeholder="" style="width:100%;">
              <el-option v-for="item in qdxmsfzgnData" :key="item.id" :label="item.value" :value="item.value" />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="zyfzr_jz_kc" label="专业负责人-建筑-扩初及以后阶段" width="140" align="center">
          <template slot-scope="scope">
            <el-popover :ref="'popover-zyfzr_jz_kc-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_zyfzr_jz_kc">
              <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
                <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
                <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_zyfzr_jz_kc" />
              </el-row>
              <el-table v-loading="loading" :data="zyfzr_jz_kcData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseZyfzr_jz_kc">
                <el-table-column label="No." type="index" align="center" />
                <el-table-column property="number" label="员工编号" width="100" align="center" />
                <el-table-column property="name" label="姓名" width="100" align="center" />
                <el-table-column property="corporation" label="公司" align="center" />
                <el-table-column property="department" label="部门" width="120" align="center" />
                <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
              </el-table>
              <pagination v-show="zyfzr_jz_kcData.total>0" :total="zyfzr_jz_kcData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getZyfzr_jz_kcList" />
              <el-input slot="reference" v-model="scope.row.zyfzr_jz_kc" size="mini" @focus="handleFocus(scope.row)" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="zyfzr_jg" label="专业负责人-结构" width="140" align="center">
          <template slot-scope="scope">
            <el-popover :ref="'popover-zyfzr_jg-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_zyfzr_jg">
              <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
                <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
                <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_zyfzr_jg" />
              </el-row>
              <el-table v-loading="loading" :data="zyfzr_jgData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseZyfzr_jg">
                <el-table-column label="No." type="index" align="center" />
                <el-table-column property="number" label="员工编号" width="100" align="center" />
                <el-table-column property="name" label="姓名" width="100" align="center" />
                <el-table-column property="corporation" label="公司" align="center" />
                <el-table-column property="department" label="部门" width="120" align="center" />
                <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
              </el-table>
              <pagination v-show="zyfzr_jgData.total>0" :total="zyfzr_jgData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getZyfzr_jgList" />
              <el-input slot="reference" v-model="scope.row.zyfzr_jg" size="mini" @focus="handleFocus(scope.row)" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="zyfzr_gps" label="专业负责人-给排水" width="140" align="center">
          <template slot-scope="scope">
            <el-popover :ref="'popover-zyfzr_gps-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_zyfzr_gps">
              <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
                <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
                <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_zyfzr_gps" />
              </el-row>
              <el-table v-loading="loading" :data="zyfzr_gpsData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseZyfzr_gps">
                <el-table-column label="No." type="index" align="center" />
                <el-table-column property="number" label="员工编号" width="100" align="center" />
                <el-table-column property="name" label="姓名" width="100" align="center" />
                <el-table-column property="corporation" label="公司" align="center" />
                <el-table-column property="department" label="部门" width="120" align="center" />
                <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
              </el-table>
              <pagination v-show="zyfzr_gpsData.total>0" :total="zyfzr_gpsData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getZyfzr_gpsList" />
              <el-input slot="reference" v-model="scope.row.zyfzr_gps" size="mini" @focus="handleFocus(scope.row)" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="zyfzr_dq" label="专业负责人-电气" width="140" align="center">
          <template slot-scope="scope">
            <el-popover :ref="'popover-zyfzr_dq-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_zyfzr_dq">
              <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
                <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
                <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_zyfzr_dq" />
              </el-row>
              <el-table v-loading="loading" :data="zyfzr_dqData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseZyfzr_dq">
                <el-table-column label="No." type="index" align="center" />
                <el-table-column property="number" label="员工编号" width="100" align="center" />
                <el-table-column property="name" label="姓名" width="100" align="center" />
                <el-table-column property="corporation" label="公司" align="center" />
                <el-table-column property="department" label="部门" width="120" align="center" />
                <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
              </el-table>
              <pagination v-show="zyfzr_dqData.total>0" :total="zyfzr_dqData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getZyfzr_dqList" />
              <el-input slot="reference" v-model="scope.row.zyfzr_dq" size="mini" @focus="handleFocus(scope.row)" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="zyfzr_nt" label="专业负责人-暖通" width="140" align="center">
          <template slot-scope="scope">
            <el-popover :ref="'popover-zyfzr_nt-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_zyfzr_nt">
              <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
                <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
                <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_zyfzr_nt" />
              </el-row>
              <el-table v-loading="loading" :data="zyfzr_ntData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseZyfzr_nt">
                <el-table-column label="No." type="index" align="center" />
                <el-table-column property="number" label="员工编号" width="100" align="center" />
                <el-table-column property="name" label="姓名" width="100" align="center" />
                <el-table-column property="corporation" label="公司" align="center" />
                <el-table-column property="department" label="部门" width="120" align="center" />
                <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
              </el-table>
              <pagination v-show="zyfzr_ntData.total>0" :total="zyfzr_ntData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getZyfzr_ntList" />
              <el-input slot="reference" v-model="scope.row.zyfzr_nt" size="mini" @focus="handleFocus(scope.row)" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="zbwhr" label="周报维护人" width="140" align="center">
          <template slot-scope="scope">
            <el-popover :ref="'popover-zbwhr-' + scope.row.id" placement="bottom" trigger="click" @hide="hidePopover_zbwhr">
              <el-row type="flex" class="row-bg" style="margin-bottom:5px;">
                <el-input v-model="listQuery.name" size="mini" placeholder="请输入姓名" style="width:100px" />
                <el-button v-waves class="filter-item" type="primary" style="height:28px;" size="mini" icon="el-icon-search" @click="search_people_zbwhr" />
              </el-row>
              <el-table v-loading="loading" :data="zbwhrData.items" border :header-cell-style="getChildHeaderClass" :cell-style="getChildMainClass" @row-dblclick="chooseZbwhr">
                <el-table-column label="No." type="index" align="center" />
                <el-table-column property="number" label="员工编号" width="100" align="center" />
                <el-table-column property="name" label="姓名" width="100" align="center" />
                <el-table-column property="corporation" label="公司" align="center" />
                <el-table-column property="department" label="部门" width="120" align="center" />
                <el-table-column property="keyhint" label="关键信息" width="120" align="center" />
              </el-table>
              <pagination v-show="zbwhrData.total>0" :total="zbwhrData.total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" style="margin-top:0px;" @pagination="getZbwhrList" />
              <el-input slot="reference" v-model="scope.row.zbwhr" size="mini" @focus="handleFocus(scope.row)" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="待收款已开票" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.dskykp" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="待收款待开票" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.dskdkp" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="未到收款节点" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.wdskjd" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="往年已收款" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.wnysk" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="当年已收款" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.dnysk" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="收款总额" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.skze" disabled size="mini" />
          </template>
        </el-table-column>
        <el-table-column prop="date" label="辅运营" width="150" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.fyy" disabled size="mini" />
          </template>
        </el-table-column>
      </div>
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
      can: false,
      topSelect: [{ value: '项目编号' }, { value: '项目名称' }, { value: '子项编号' }, { value: '子项名称' }, { value: '项目负责人' }],
      topSelectVal: '',
      topInputVal: '',
      tableData: [{ id: 0, xmbh: '', swzj: '', xmly: '', province: '', city: '', htjzmjdw: '平方米', jzsbnmywcgzlbl_fa: '0', jzsbnmywcgzlbl_kc: '0', jzsbnmywcgzlbl_sgt: '0', jzsbnmywcgzlbl_hqfw: '0' }, {}, {}, {}, {}, {}],
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
      xmdjData: [],
      htqdztData: [],
      czqzmjlxData: [],
      jgcxData: [],
      skqfxmlxData: [],
      sjjdzcData: [],
      htqdgsData: [],
      tzgsData: [],
      kcxmlxData: [],
      fakcehybpData: [{ id: 1, value: '' }, { id: 2, value: '是' }],
      xmjdData: [],
      xmjdnewData: [],
      cyzy_faData: [],
      cyzy_kcData: [],
      cyzy_sgtData: [],
      cyzy_hqData: [],
      ghjgbimData: [],
      bnyjwchtepdbzData: [{ id: 1, value: 'A' }, { id: 2, value: 'B' }, { id: 3, value: 'C' }],
      sfcqztData: [{ id: 1, value: '' }, { id: 2, value: '是' }],
      qdxmsfzgnData: [{ id: 1, value: '' }, { id: 2, value: '是' }],
      zyfzr_jz_kcData: { total: 0, items: [] },
      zyfzr_jgData: { total: 0, items: [] },
      zyfzr_gpsData: { total: 0, items: [] },
      zyfzr_dqData: { total: 0, items: [] },
      zyfzr_ntData: { total: 0, items: [] },
      zbwhrData: { total: 0, items: [] },
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
    this.can = true
    this.getSwzjList() // 获取商务总监
    this.getSjzjList() // 获取设计总监
    this.getXmfzrList() // 获取项目负责人
    this.getYbwhrList() // 获取月报维护人
    this.getXmly() // 获取项目来源
    this.getCityData() // 获取省市
    this.getXmdj() // 获取项目等级
    this.getHtqdzt() // 获取合同签订状态
    this.getCzqzmjlx() // 获取产值前置面积类型
    this.getJgcx() // 获取结构超限
    this.getSkqfxmlx() // 获取收款切分项目类型
    this.getSjjdzc() // 获取设计阶段组成
    this.getHtqdgs() // 获取合同签订公司
    this.getTzgs() // 获取拓展公司
    this.getKcxmlx() // 获取是单专业/全专业扩初项目
    this.getXmjd() // 获取项目进度
    this.getXmjdnew() // 获取项目进度-新
    this.getCyzy_fa() // 获取参与专业-方案
    this.getCyzy_kc() // 获取参与专业-扩初
    this.getCyzy_sgt() // 获取参与专业-施工图
    this.getCyzy_hq() // 获取参与专业-后期
    this.getGhjgbim() // 获取规划景观BIM标记
    this.getZyfzr_jz_kcList() // 获取专业负责人-建筑-扩初及以后阶段
    this.getZyfzr_jgList() // 获取专业负责人-结构
    this.getZyfzr_gpsList() // 获取专业负责人-给排水
    this.getZyfzr_dqList() // 获取专业负责人-电气
    this.getZyfzr_ntList() // 获取专业负责人-电气
    this.getZbwhrList() // 获取周报维护人
  },
  methods: {
    // 处理当前的是在处理哪一行
    handleFocus(actionItem) {
      this.actionItem = actionItem
      // console.log(this.actionItem)
    },

    // 获取周报维护人
    getZbwhrList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/zbwhr_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.zbwhrData = response.data
        this.loading = false
      })
    },
    // 搜索周报维护人
    search_people_zbwhr() {
      this.listQuery.page = 1
      this.getZbwhrList()
    },
    // 双击周报维护人
    chooseZbwhr(row, column) {
      var id = this.actionItem.id
      this.actionItem.zbwhr = row.name
      this.$refs[`popover-zbwhr-` + id].doClose()
    },
    // 隐藏周报维护人
    hidePopover_zbwhr() {
      this.resetQuery()
      this.getZbwhrList()
    },

    // 获取专业负责人-暖通
    getZyfzr_ntList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/zyfzr_nt_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.zyfzr_ntData = response.data
        this.loading = false
      })
    },
    // 搜索专业负责人-暖通
    search_people_zyfzr_nt() {
      this.listQuery.page = 1
      this.getZyfzr_ntList()
    },
    // 双击专业负责人-暖通
    chooseZyfzr_nt(row, column) {
      var id = this.actionItem.id
      this.actionItem.zyfzr_nt = row.name
      this.$refs[`popover-zyfzr_nt-` + id].doClose()
    },
    // 隐藏专业负责人-暖通
    hidePopover_zyfzr_nt() {
      this.resetQuery()
      this.getZyfzr_ntList()
    },

    // 获取专业负责人-电气
    getZyfzr_dqList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/zyfzr_dq_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.zyfzr_dqData = response.data
        this.loading = false
      })
    },
    // 搜索专业负责人-电气
    search_people_zyfzr_dq() {
      this.listQuery.page = 1
      this.getZyfzr_dqList()
    },
    // 双击专业负责人-电气
    chooseZyfzr_dq(row, column) {
      var id = this.actionItem.id
      this.actionItem.zyfzr_dq = row.name
      this.$refs[`popover-zyfzr_dq-` + id].doClose()
    },
    // 隐藏专业负责人-电气
    hidePopover_zyfzr_dq() {
      this.resetQuery()
      this.getZyfzr_dqList()
    },

    // 获取专业负责人-给排水
    getZyfzr_gpsList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/zyfzr_gps_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.zyfzr_gpsData = response.data
        this.loading = false
      })
    },
    // 搜索专业负责人-给排水
    search_people_zyfzr_gps() {
      this.listQuery.page = 1
      this.getZyfzr_gpsList()
    },
    // 双击专业负责人-给排水
    chooseZyfzr_gps(row, column) {
      var id = this.actionItem.id
      this.actionItem.zyfzr_gps = row.name
      this.$refs[`popover-zyfzr_gps-` + id].doClose()
    },
    // 隐藏专业负责人-给排水
    hidePopover_zyfzr_gps() {
      this.resetQuery()
      this.getZyfzr_gpsList()
    },
    // 获取专业负责人-结构
    getZyfzr_jgList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/zyfzr_jg_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.zyfzr_jgData = response.data
        this.loading = false
      })
    },
    // 搜索专业负责人-结构
    search_people_zyfzr_jg() {
      this.listQuery.page = 1
      this.getZyfzr_jgList()
    },
    // 双击专业负责人-结构
    chooseZyfzr_jg(row, column) {
      var id = this.actionItem.id
      this.actionItem.zyfzr_jg = row.name
      this.$refs[`popover-zyfzr_jg-` + id].doClose()
    },
    // 隐藏专业负责人-结构
    hidePopover_zyfzr_jg() {
      this.resetQuery()
      this.getZyfzr_jgList()
    },
    // 获取专业负责人-建筑-扩初及以后阶段
    getZyfzr_jz_kcList() {
      this.loading = true
      var api = this.GLOBAL.Baseurl + '/Yuebao/zyfzr_jz_kc_list'
      var params = {
        page: this.listQuery.page,
        limit: this.listQuery.limit,
        name: this.listQuery.name
      }
      Axios.get(api, { params }).then(response => {
        this.zyfzr_jz_kcData = response.data
        this.loading = false
      })
    },
    // 搜索专业负责人-建筑-扩初及以后阶段
    search_people_zyfzr_jz_kc() {
      this.listQuery.page = 1
      this.getZyfzr_jz_kcList()
    },
    // 双击专业负责人-建筑-扩初及以后阶段
    chooseZyfzr_jz_kc(row, column) {
      var id = this.actionItem.id
      this.actionItem.zyfzr_jz_kc = row.name
      this.$refs[`popover-zyfzr_jz_kc-` + id].doClose()
    },
    // 隐藏专业负责人-建筑-扩初及以后阶段
    hidePopover_zyfzr_jz_kc() {
      this.resetQuery()
      this.getZyfzr_jz_kcList()
    },
    // 获取规划景观BIM标记
    getGhjgbim() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/ghjgbim_list'
      Axios.get(api).then(response => {
        this.ghjgbimData = response.data.data
      })
    },
    // 获取参与专业-后期
    getCyzy_hq() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/cyzy_hq_list'
      Axios.get(api).then(response => {
        this.cyzy_hqData = response.data.data
      })
    },
    // 获取参与专业-施工图
    getCyzy_sgt() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/cyzy_sgt_list'
      Axios.get(api).then(response => {
        this.cyzy_sgtData = response.data.data
      })
    },
    // 获取参与专业-扩初
    getCyzy_kc() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/cyzy_kc_list'
      Axios.get(api).then(response => {
        this.cyzy_kcData = response.data.data
      })
    },
    // 获取参与专业-方案
    getCyzy_fa() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/cyzy_fa_list'
      Axios.get(api).then(response => {
        this.cyzy_faData = response.data.data
      })
    },
    // 获取项目进度最新
    getXmjdnew() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/xmjdnew_list'
      Axios.get(api).then(response => {
        this.xmjdnewData = response.data.data
      })
    },
    // 获取项目进度
    getXmjd() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/xmjd_list'
      Axios.get(api).then(response => {
        this.xmjdData = response.data.data
      })
    },
    // 获取是单专业/全专业扩初项目
    getKcxmlx() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/kcxmlx_list'
      Axios.get(api).then(response => {
        this.kcxmlxData = response.data.data
      })
    },
    // 获取拓展公司
    getTzgs() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/htqdgs_list'
      Axios.get(api).then(response => {
        this.tzgsData = response.data.data
      })
    },
    // 获取合同签订公司
    getHtqdgs() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/htqdgs_list'
      Axios.get(api).then(response => {
        this.htqdgsData = response.data.data
      })
    },
    // 获取设计阶段组成
    getSjjdzc() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/sjjdzc_list'
      Axios.get(api).then(response => {
        this.sjjdzcData = response.data.data
      })
    },
    // 获取收款切分项目类型
    getSkqfxmlx() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/skqfxmlx_list'
      Axios.get(api).then(response => {
        this.skqfxmlxData = response.data.data
      })
    },
    // 获取结构超限
    getJgcx() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/jgcx_list'
      Axios.get(api).then(response => {
        this.jgcxData = response.data.data
      })
    },
    // 获取产值前置面积类型
    getCzqzmjlx() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/czqzmjlx_list'
      Axios.get(api).then(response => {
        this.czqzmjlxData = response.data.data
      })
    },
    // 获取合同签订状态
    getHtqdzt() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/htqdzt_list'
      Axios.get(api).then(response => {
        this.htqdztData = response.data.data
      })
    },
    // 获取项目等级
    getXmdj() {
      var api = this.GLOBAL.Baseurl + '/Yuebao/xmdj_list'
      Axios.get(api).then(response => {
        this.xmdjData = response.data.data
      })
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
      // console.log(e)
      for (var index2 in this.province) {
        if (e === this.province[index2].value) {
          this.shi = this.province[index2].children
          this.actionItem.city = ''
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
  .el-table .cell{
    padding:  0 5px !important;
  }
  .el-input__inner{
    border:1px solid #A9A9A9;
    border-radius: 4px;
  }
  .el-input.is-disabled .el-input__inner{
    background-color: #fff;
    color: #585858;
    border-color: #A9A9A9;
  }
  .pagination-container{
      padding: 15px 16px 0 16px !important;
  }

</style>

