<template>
  <span class="hrm-badge" :class="classes">
    <p>{{ label }}</p>
  </span>
</template>

<script>
export default {
  name: 'HrmBadge',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    display: {
      type: Boolean,
      default: false,
    },
    label: {
      type: Number,
      default: 3,
    },
  },
  data() {
    let show = false;
    return {
      show,
    };
  },
  computed: {
    classes() {
      if (this.label > 0) {
        this.show = true;
      } else {
        this.show = false;
      }
      return {
        [`hrm-badge--${this.size}`]: true,
        [`hrm-badge--display`]: this.show,
        [`hrm-badge--hide`]: !this.show,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-badge {
  margin: 10px;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  background-color: black;
  border-radius: 100%;
  & p {
    margin: 0;
    padding: 0;
  }
  &--display {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--hide {
    display: none;
  }
  &--small {
    width: 20px;
    height: 20px;
  }
  &--medium {
    width: 25px;
    height: 25px;
  }
}
</style>
