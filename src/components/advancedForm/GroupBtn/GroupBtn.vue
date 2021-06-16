<template>
  <div class="htm-group-btn" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HrmGroupBtn',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    classes() {
      return {
        [`htm-group-btn--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss">
.htm-group-btn {
  display: inline-block;
  border-radius: 5px;
  overflow: hidden;
  border: solid 1px black;
  &--small {
    & .hrm-button {
      padding: 0px 5px !important;
    }
  }
  &--medium {
    & .hrm-button {
      padding: 5px 10px !important;
    }
  }
  &--large {
    & .hrm-button {
      padding: 10px 18px !important;
    }
  }
}
.hrm-button {
  border-radius: 0px !important;
}
</style>
