<template>
  <div class="hrm-radiogroup" :class="classes">
    <HrmRadio
      v-for="radio in radios"
      :key="radio.id"
      :label="radio.label"
      :value="radio.value"
      :id="radio.id"
    />
  </div>
</template>

<script>
import HrmRadio from './Radio.vue';
export default {
  name: 'HrmRadiogroup',
  components: {
    HrmRadio,
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    radios: {
      type: Array,
      default: () => {
        return [
          {
            label: 'Radio 1',
            value: 'ra1',
            id: 'ra1',
            name: 'ra1',
          },
          {
            label: 'Radio 2',
            value: 'ra2',
            id: 'ra2',
            name: 'ra2',
          },
          {
            label: 'Radio 3',
            value: 'ra3',
            id: 'ra3',
            name: 'ra3',
          },
        ];
      },
    },
  },
  computed:{
      classes: function(){
          return{
              [`hrm-radiogroup--${this.type}`]: true,
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.hrm-radiogroup{
    display: flex;
    &--default{
        flex-direction: column;
    }
    &--inline{
        flex-direction: row;
    }
}
</style>
