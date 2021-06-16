<template>
  <div class="hrm-submenu">
    <hrm-submenu-btn
      v-for="btn in btns"
      :key="btn.label"
      :icon="btn.icon"
      :label="btn.label"
      :selected="btn.selected"
      @click="onclick(btn)"
    />
  </div>
</template>

<script>
import HrmSubmenuBtn from './SubMenuBtn.vue';
export default {
  name: 'HrmSubmenu',
  components: {
    HrmSubmenuBtn,
  },
  props: {
    subMenuBtns: {
      type: Array,
      default: function() {
        return [
          { icon: 'fas fa-home', label: '總覽', selected: true },
          { icon: 'fas fa-user', label: '個人', selected: false },
          { icon: 'fas fa-info-circle', label: '資訊中心', selected: false },
        ];
      },
    },
  },
  data() {
    let btns = this.subMenuBtns;
    return {
      btns,
    };
  },
  methods: {
    onclick(btn) {
      this.btns.forEach((x) => {
        x.selected = false;
      });
      btn.selected = true;
    },
  },
};
</script>

<style>
.hrm-submenu {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: solid 1px black;
}
</style>
