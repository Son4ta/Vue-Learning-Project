<template>
  <div id="home">
    <el-container>
      <el-aside width="auto">
          <LeftMenu></LeftMenu>
      </el-aside>
      <el-container>
        <el-header>
          <RightTop></RightTop>
        </el-header>
        <el-main>
          <!-- 路由出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftMenu from '../../components/LeftMenu'
import RightTop from '../../components/RightTop'

export default {
  name: 'home',
  components: {
    LeftMenu,
    RightTop,
  },
}
</script>

<style scoped>
  #home {
    /* overflow: hidden; */
    background-color: rgb(111, 111, 111);
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: left center;
    line-height: 65px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
    overflow: hidden;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* 我真的服了这个老六，表格行高就是因为这个寄吧 */
    /* line-height: 160px; */
  }
  
.el-container {
    height: 100%;
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>