<template>
  <div id="userlist">
    <!-- 表格 -->
    <el-table
      v-loading="loading"
      :data="tableData.slice((currentPage-1)*pageSize, currentPage*pageSize)"
      stripe
      style="width: 100%;">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="户主姓名"></el-table-column>
      <el-table-column prop="num" label="门牌号"></el-table-column>
      <el-table-column prop="title" label="辖区"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
    layout="prev, pager, next, total, jumper"
    :page-size.sync="pageSize"
    :total="tableData.length"
    :hide-on-single-page="true"
    :current-page.sync="currentPage">
    </el-pagination>
  </div>
</template>

<script>
import Link from '../../../api/Link'
import Url from '../../../api/url'

export default {
  name: 'userlist',
  data() {
        return {
          loading:true,
          currentPage: 1,
          pageSize: 10,
          tableData: [],
        }
  },
  methods: {
  },
  mounted() {
    Link(Url.userlist).then((response)=>{
      setTimeout(() => {
        this.loading=false
        this.tableData=response.data
      }, 1000)
    })
  },
}
</script>

<style>

</style>