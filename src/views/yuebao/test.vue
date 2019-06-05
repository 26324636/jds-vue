<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
  >
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150"
    />
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>

    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column><el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column><el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column><el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column><el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300"
    />
    <el-table-column
      prop="zip"
      label="邮编"
      width="120"
    ><template slot-scope="scope">           <el-select v-model="scope.row.bnyjwchtepdbz" size="mini" placeholder="" style="width:100%;">             <el-option v-for="item in bnyjwchtepdbzData" :key="item.id" :label="item.value" :value="item.value" />           </el-select>         </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100"
    >
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {

  data() {
    return {
      bnyjwchtepdbzData: [{ id: 1, value: 'a' }, { id: 2, value: 'b' }, { id: 3, value: 'c' }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    handleClick(row) {
      console.log(row)
    }
  }
}
</script>
