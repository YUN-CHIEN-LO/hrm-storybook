<template>
  <div class="hrm-hotkey">
    <div class="hrm-hotkey-row" v-for="i in Math.ceil(hotclicks.length / 3)" :key="i">
      <div
        class="hrm-hotkey-click"
        v-for="hotclick in hotclicks.slice((i - 1) * 3, i * 3)"
        :key="hotclick.label"
      >
        <Hotclick :icon="hotclick.icon" :label="hotclick.label" :badgeNum="hotclick.badgeNum" />
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import Hotclick from './Hotclick.vue';
export default {
  name: 'Hotkey',
  components: {
    Hotclick,
  },
  props: {
    hotclicks: {
      type: Array,
      default: function() {
        return [
          { icon: 'far fa-bell', label: '通知', badgeNum: 0 },
          { icon: 'fas fa-list-ol', label: '工作', badgeNum: 0 },
          { icon: 'fas fa-exchange-alt', label: '簽核', badgeNum: 0 },
          { icon: 'fas fa-sign-out-alt', label: '請假', badgeNum: 0 },
          { icon: 'far fa-newspaper', label: '公告', badgeNum: 0 },
          { icon: 'far fa-calendar-check', label: '考勤', badgeNum: 0 },
        ];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.hrm-hotkey {
  &-row {
    display: flex;
    font-size: 24px;
  }
  &-click {
    flex: 1;
  }
}
</style>
