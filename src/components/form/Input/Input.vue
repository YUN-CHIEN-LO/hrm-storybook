<template>
  <div :class="classes">
    <input type="text" name="" id="" placeholder="text..." :disabled="disabled ? true : false" />
  </div>
</template>

<script>
export default {
  name: 'HRMInput',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    type: {
      type: String,
      default: 'default',
      validator: function(value) {
        return ['default', 'underline'].indexOf(value) !== -1;
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
        'hrm-input': true,
        [`hrm-input--${this.size}`]: true,
        [`hrm-input--${this.type}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
.hrm-input {
  display: inline-block;
  &--small {
    & input {
      padding: 0px 5px;
    }
  }
  &--medium {
    & input {
      padding: 5px 10px;
    }
  }
  &--large {
    & input {
      padding: 10px 18px;
    }
  }
  &--default {
    & input {
      border: none; /* <-- This thing here */
      border: solid 1px #ccc;
      border-radius: 3px;
    }
  }
  &--underline {
    & input {
      border: none; /* <-- This thing here */
      border-bottom: solid 1px #000;
      border-radius: 0px;
    }
  }
}
</style>
