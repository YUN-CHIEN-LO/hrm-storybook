<template>
  <div class="hrm-checkbox" :class="classes">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled ? true : false"
    />
    <label class="hrm-checkbox-label" :for="id"> {{label}} </label><br />
  </div>
</template>

<script>
export default {
  name: 'HrmCheckbox',
  props: {
    label: {
      type: String,
      default: 'Checkbox',
    },
    value: {
      type: String,
      default: 'ch',
    },
    id: {
      type: String,
      default: 'ch',
    },
    name: {
      type: String,
      default: 'ch',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes: function() {
      return {
        ['hrm-checkbox--disabled']: this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-checkbox {
  position: relative;
  display: flex;
  margin-bottom: 5px;
  align-items: center;
  & input[type='checkbox'] {
    width: 16px !important;
    height: 16px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #aaa;
    box-shadow: none;
    font-size: 2em;
    border-radius: 3px;
    position: relative;
    margin-right: 5px;
    &:checked {
      border: 1px solid #aaa;
      &:after {
        content: '';
        position: absolute;
        border: solid black;
        border-width: 0 2px 2px 0;
        width: 4px;
        height: 9px;
        -webkit-transform: translate(-50%, -50%) rotate(45deg);
        -ms-transform: translate(-50%, -50%) rotate(45deg);
        transform: translate(-50%, -50%) rotate(45deg);
        top: calc(50% - 1px);
        left: 50%;
      }
    }
  }
  &-label{
    margin-right: 15px;
  }
  &--disabled {
    & input[type='checkbox'] {
      background-color: #aaa;
    }
  }
}
</style>
