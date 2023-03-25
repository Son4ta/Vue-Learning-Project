<template>
  <div id="leftmenu">
    <el-menu
      class="el-menu-vertical-demo"
      default-active="/home"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      :collapse="!this.$store.state.HomeModule.isCollapse"
      active-text-color="#ffd04b"
      router>

      <div v-for="(val) in this.$router.options.routes[3].children" :key="val.path">
        <!-- 下拉，只渲染有孩子的 -->
        <el-submenu :index="val.path" v-if="val.children">
          <template slot="title">
            <i :class="val.mate.icon"></i>
            <span>{{val.mate.title}}</span>
          </template>
          <el-menu-item-group>
            <template slot="title">选项</template>
            <div v-for="(val_sub) in val.children" :key="val_sub.path">
              <el-menu-item :index="val_sub.path">{{val_sub.mate.title}}</el-menu-item>
            </div>
          </el-menu-item-group>
        </el-submenu>
        <!-- 不带下拉 -->
        <el-menu-item :index="val.path" v-else>
          <i :class="val.mate.icon"></i>
          <span slot="title">{{val.mate.title}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'leftmenu',
  data() {
    return {
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    console.log(this.$router.options.routes[3].children)
  },
}
</script>

<style scoped>
#leftmenu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
  }
.el-menu-vertical-demo{
    min-height: 100%;
  }
</style>

<style>
    /*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,
      <el-submenu>,<el-menu-item-group>之一，但是却嵌套了<div>,而导致收折就隐藏不了文字*/
    /*隐藏文字*/
    .el-menu--collapse  .el-submenu__title span{
        display: none;
    }
    /*隐藏 > */
    .el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
        display: none;
    }
</style>