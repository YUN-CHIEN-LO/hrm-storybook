<template>
  <div class="hrm-header">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'HrmHeader'
};
</script>

<style lang="scss" scoped>
.hrm-header{
    font-size: 24px;
    border: solid 1px black;
}

</style>
