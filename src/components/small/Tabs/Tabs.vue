<template>
  <div class="hrm-tabs">
    <hrm-tab
      v-for="tab in tabs"
      :key="tab.id"
      :id="tab.id"
      :label="tab.label"
      :isEven="tab.id % 2 == 1 ? true : false"
      :isActive="tab.isActive"
      @clickTab="onclick"
    />
  </div>
</template>

<script>
import HrmTab from './Tab.vue';
export default {
  name: 'HrmTabs',
  components: {
    HrmTab,
  },
  props: {
    tablist: {
      type: Array,
      default: () => {
        return [
          {
            id: 0,
            label: 'tab 1',
            isActive: true
          },
          {
            id: 1,
            label: 'tab 2',
            isActive: false
          },
          {
            id: 2,
            label: 'tab 3',
            isActive: false
          },
        ];
      },
    },
  },
  data() {
    let tabs = this.tablist;
    return { tabs };
  },
  methods: {
    onclick(id) {
      console.log(id);
      this.tabs.forEach((t)=>{
          if(t.id == id){
              t.isActive = true;
          }else{
              t.isActive = false;
          }
      });
    },
  },
};
</script>

<style></style>
