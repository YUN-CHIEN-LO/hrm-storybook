<template>
  <div class="hrm-hotclick">
    <div class="hrm-hotclick-border">
      <div class="hrm-hotclick-icon">
        <hrm-badge class="hrm-hotclick-badge" :label="badgeNum" />
        <i :class="icon"></i>
      </div>
      <div class="hrm-hotclick-text" >{{ label }}</div>
    </div>
  </div>
</template>

<script>
import HrmBadge from '../../basic/Badge/Badge.vue';
export default {
  name: 'Hotclick',
  props: {
    icon: {
      type: String,
      default: 'far fa-bell',
    },
    label: {
      type: String,
      default: '通知',
    },
    badgeNum:{
      type: Number,
      default: 0
    }
  },
  components: {
    HrmBadge
  },
};
</script>

<style lang="scss" scoped>
.hrm-hotclick {
  border: solid 1px black;
  width: 100%;
  text-align: center;
  font-size: 14px;
  background-color: white;
  position: relative;
  display: inline-block;
  padding: 20px 0px;
  cursor: pointer;
  &-border {
    margin: 10px 0;
    border-right: 1px solid #f5f5f5;
  }
  &-text {
    display: block;
    word-wrap: break-word;
  }
  &:hover {
    background-color: #f5f5f5;
    z-index: 1;
  }
  &-icon{
    position: relative;
    display: inline-block;
    font-size: 24px;
  }
  &-badge{
    position: absolute;
    top: -25px;
    left: 10px;
  }
}
</style>
