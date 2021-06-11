<template>
  <div class="hrm-breadcrumb">
    <span v-for="(item, i) in items" :key="item.label">
      <a :href="item.url" class="hrm-breadcrumb-label">{{ item.label }}</a>
      <span class="hrm-breadcrumb-slash" v-if="i < items.length - 1">/</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HrmBreadcrumb',
  props: {
    items: {
      type: Array,
      default: () => {
        return [
          { label: 'Text1', url: '#' },
          { label: 'Text2', url: '#' },
          { label: 'Text3', url: '#' },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-breadcrumb {
  background-color: #ccc;
  padding: 8px 15px;
  &-label{
      cursor: pointer;
      color: black;
      &:hover{
          color: #666;
      }
  }
  &-slash {
    padding: 0px 5px;
  }
}
</style>
