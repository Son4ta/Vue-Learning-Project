<template>
  <div class="container">
    <el-row class="row" :gutter="0">
      <el-col :span="12"><ItemPage>

        <template #main>
          <Chart1></Chart1>
        </template>
      </ItemPage></el-col>

      <el-col :span="12"><ItemPage>
        <template #main>
          <Chart2></Chart2>
        </template>
      </ItemPage></el-col>

      <el-col :span="12"><ItemPage>
        <template #main>
          <Chart3></Chart3>
        </template>
      </ItemPage></el-col>

      <el-col :span="12"><ItemPage>
        <template #main>
          <Chart4></Chart4>
        </template>
      </ItemPage></el-col>

    </el-row>
  </div>
</template>

<script>
import ItemPage from '../../../components/ItemPage'
import Chart1 from '../../../components/Chart1'
import Chart2 from '../../../components/Chart2'
import Chart3 from '../../../components/Chart3'
import Chart4 from '../../../components/Chart4'

export default {
  name: 'echartsview',
  components:{
    ItemPage,
    Chart1,
    Chart2,
    Chart3,
    Chart4,
  },
}
</script>

<style scoped>
  .container{
    width: 100%;
    /* height: 100%; */
    margin: 0 auto;
    background-color: gray;
    display: flex;
  }
  .row{
    /* 一定要记得row的宽度，不然你span再多都没用 */
    width: 100%;
  }
  .row:last-child{
    padding-right: 0;
  }
</style>