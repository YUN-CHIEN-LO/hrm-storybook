<template>
  <div class="hrm-submenu-btn" :class="classes" @click="$emit('click')">
    <i :class="icon"></i>
    <span class="hrm-submenu-btn-text"> {{ label }} </span>
  </div>
</template>

<script>
export default {
  name: 'HrmSubmenuBtn',
  components: {
  },
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '總覽',
    },
    icon: {
      type: String,
      default: 'fas fa-home',
    },
  },
  computed: {
    classes() {
      return {
        [`hrm-submenu-btn--selected`]: this.selected,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-submenu-btn {

  border: solid 1px black;
  height: 42px;
  border-top: none;
  border-left: none;
  font-size: 18px;
  text-align: center;
  line-height: 42px;

  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  cursor: pointer;
  box-sizing: border-box;
  border-bottom: 4px solid #fff;

  &:hover,
  &:focus {
    background-color: #f5f5f5;
    border-bottom: 4px solid #f5f5f5;
  }
  &-icon {
    display: inline-block;
    margin-right: 6px;
    line-height: 42px;
    font-size: 16px;
  }
  &--selected {
    // border-bottom: 4px solid #fff;
    border-bottom: 4px solid #000;
    &:hover {
      background-color: #f5f5f5;
      border-bottom: 4px solid #000;
    }
  }
}

@media (max-width: 768px) {
  .subMenuBtn-icon {
    margin-right: 0;
  }
  .subMenuBtn-text {
    display: none;
  }
}
</style>
