<template>
  <div class="hrm-checkboxgroup" :class="classes">
    <HrmCheckbox
      v-for="checkbox in checkboxs"
      :key="checkbox.id"
      :label="checkbox.label"
      :value="checkbox.value"
      :id="checkbox.id"
    />
  </div>
</template>

<script>
import HrmCheckbox from './Checkbox.vue';
export default {
  name: 'HrmCheckboxgroup',
  components: {
    HrmCheckbox,
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    checkboxs: {
      type: Array,
      default: () => {
        return [
          {
            label: 'Checkbox 1',
            value: 'ch1',
            id: 'ch1',
            name: 'ch1',
          },
          {
            label: 'Checkbox 2',
            value: 'ch2',
            id: 'ch2',
            name: 'ch2',
          },
          {
            label: 'Checkbox 3',
            value: 'ch3',
            id: 'ch3',
            name: 'ch3',
          },
        ];
      },
    },
  },
  computed:{
      classes: function(){
          return{
              [`hrm-checkboxgroup--${this.type}`]: true,
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.hrm-checkboxgroup{
    display: flex;
    &--default{
        flex-direction: column;
    }
    &--inline{
        flex-direction: row;
    }
}
</style>
