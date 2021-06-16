<template>
  <div class="hrm-divider" :class="classes"></div>
</template>

<script>
export default {
  name: 'HrmDivider',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  computed: {
    classes: function() {
      return {
        [`hrm-divider-${this.type}`]: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-divider {
  &-default{
    margin-bottom: 20px;
    height: 1px;
    border-top: 0;
    background-color: #ccc;
  }
  &-color{
    margin-bottom: 20px;
    height: 5px;
    border-top: 0;
    background: #ffffff;
    border-radius: 5px;
    background-color: #666;
  }
  &-colorful {
    margin-bottom: 20px;
    height: 5px;
    border-top: 0;
    background: #ffffff;
    border-radius: 5px;
    background-image: -moz-linear-gradient(
      left,
      #2796db,
      #2796db 25%,
      #34a85a 26%,
      #34a85a 50%,
      #eb5345 51%,
      #eb5345 75%,
      #f9c518 76%,
      #f9c518
    );
    background-image: -o-linear-gradient(
      left,
      #2796db,
      #2796db 25%,
      #34a85a 26%,
      #34a85a 50%,
      #eb5345 51%,
      #eb5345 75%,
      #f9c518 76%,
      #f9c518
    );
    background-image: linear-gradient(
      to right,
      #2796db,
      #2796db 25%,
      #34a85a 26%,
      #34a85a 50%,
      #eb5345 51%,
      #eb5345 75%,
      #f9c518 76%,
      #f9c518
    );
  }
}
</style>
