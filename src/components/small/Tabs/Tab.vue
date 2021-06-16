<template>
  <div class="hrm-tab" :class="classes" @click="onClick(id)">
    {{ label }}
  </div>
</template>

<script>
export default {
  name: 'HrmTab',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: 'Label',
    },
    isEven: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes: function() {
      return {
        [`hrm-tab-even`]: this.isEven,
        [`hrm-tab-active`]: this.isActive,
      };
    },
  },
  methods:{
      onClick(id){
          this.$emit('clickTab', id);
      }
  }
};
</script>

<style lang="scss" scoped>
.hrm-tab {
  border: solid 1px black;
  display: inline-block;
  padding: 10px 18px;
  border-radius: 5px;
  border-top: 5px solid #666;
  cursor: pointer;
  margin: 2px;
  background-color: #f7f7f7;
  &-even {
    border-top: 5px solid #aaa;
    background-color: #f0f0f0;
  }
  &-active{
      border-top: 5px solid #000;
      background-color: #fff;
  }
}
</style>
