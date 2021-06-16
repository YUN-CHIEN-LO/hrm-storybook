<template>
  <select class="hrm-select" :class="classes" :disabled="disabled ? true : false">
    <option v-for="option in options" :key="option.value" :value="option.value"> {{option.text}} </option>
  </select>
</template>

<script>
export default {
  name: 'HrmSelect',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => {
        return [
          {
            text: 'option 1',
            value: 'op1',
          },
          {
            text: 'option 2',
            value: 'op2',
          },
          {
            text: 'option 3',
            value: 'op3',
          },
        ];
      },
    },
  },
  computed: {
    classes() {
      return {
        [`hrm-select--${this.size}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-select {
  font-size: 15px;
  border-radius: 3px;
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
