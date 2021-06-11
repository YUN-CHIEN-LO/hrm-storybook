<template>
  <div class="hrm-radio" :class="classes">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :disabled="disabled ? true : false"
    />
    <label class="hrm-radio-label" :for="id"> {{label}} </label><br />
  </div>
</template>

<script>
export default {
  name: 'HrmRadio',
  props: {
    label: {
      type: String,
      default: 'Radio',
    },
    value: {
      type: String,
      default: 'ra',
    },
    id: {
      type: String,
      default: 'ra',
    },
    name: {
      type: String,
      default: 'ra',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes: function() {
      return {
        ['hrm-radio--disabled']: this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-radio {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  & input[type='radio'] {
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
    border-radius: 100%;
    position: relative;
    margin-right: 5px;
    &:checked {
      border: 1px solid #aaa;
      &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #000;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        top: calc(50%);
        left: 50%;
      }
    }
  }
  &-label{
    margin-right: 15px;
  }
  &--disabled {
    & input[type='radio'] {
      background-color: #aaa;
    }
  }
}
</style>
