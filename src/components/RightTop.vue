<template>
  <div>
    <i v-if="!this.$store.state.HomeModule.isCollapse" class="el-icon-arrow-right" @click="collapse"></i>
    <i v-if="this.$store.state.HomeModule.isCollapse" class="el-icon-arrow-left" @click="collapse"></i>
  </div>
</template>

<script>
export default {
  name: 'righttop',
    data() {
    return {
    };
  },
  methods: {
    collapse(){
      this.$store.commit('SET_COLLAPSE')
    },
  },
}
</script>

<style scoped>
i {
  font-size: 24px;
}
</style>