<template>
  <div class="hrm-chip">
      {{label}}
  </div>
</template>

<script>
export default {
name: 'HrmChip',
props:{
    label:{
        type: String,
        default: 'chip'
    }
}
}
</script>

<style lang="scss" scoped>
.hrm-chip{
    border: solid 1px black;
    display: inline-block;
    border-radius: 3px;
    padding: 2px 6px;
    font-size: 7px;
}
</style>