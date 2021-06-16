<template>
  <div class="hrm-warning">
      <slot>這是一個提示</slot>
  </div>
</template>

<script>
export default {
  name: 'HrmWarning'
}
</script>

<style lang="scss" scoped>
.hrm-warning{
  border: solid 2px black;
  border-radius: 5px;
  background-color: rgba(#666, 0.2);
  padding: 10px 18px;
}
</style>