<template>
  <div class="item">
    <slot name="main"></slot>
  </div>
</template>

<script>
export default {
  name:'ItemPage'
}
</script>

<style scoped>
  .item{
    height: 4.825rem;
    border: 1px solid rgb(168, 168, 168);
    background-color: rgb(134, 134, 134);
  }
</style>