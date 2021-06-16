<template>
  <div :class="classes" @click="$emit('click')">
    <i class="hrm-button-icon" :class="icon" v-if="icon && icon.length > 0"></i>
    <slot>Button</slot>
  </div>
</template>

<script>
export default {
  name: 'HRMButton',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        'hrm-button': true,
        [`hrm-button--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
.hrm-button {
  display: inline-block;
  border-radius: 3px;
  border: solid 1px black;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
  &-icon {
    margin-right: 5px;
  }
  &--small {
    padding: 0px 5px;
  }
  &--medium {
    padding: 5px 10px;
  }
  &--large {
    padding: 10px 18px;
  }
}
</style>
