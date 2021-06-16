<template>
  <div :class="classes">
    <textarea rows="4" cols="50" :disabled="disabled ? true : false"></textarea>
  </div>
</template>

<script>
export default {
  name: 'HRMTextarea',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['medium'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        'hrm-textarea': true,
        [`hrm-textarea--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-textarea {
  &--medium {
    & textarea {
      padding: 10px 18px;
    }
  }
}
</style>
