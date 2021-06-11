<template>
  <div class="hrm-modal">
    <div class="hrm-modal-header">
        <h4 class="hrm-modal-title">Title</h4>
        <i class="hrm-modal-close fas fa-times"></i>
    </div>
    <div class="hrm-modal-body">
      Body
    </div>
    <div class="hrm-modal-footer">
      <hrm-button class="hrm-modal-footer-btn" :size="'large'">Cancel</hrm-button>
      <hrm-button class="hrm-modal-footer-btn" :size="'large'">Submit</hrm-button>
    </div>
  </div>
</template>

<script>
import HrmButton from '../../basic/Button/Button.vue';
export default {
  name: 'HrmModal',
  components: {
    HrmButton,
  },
};
</script>

<style lang="scss" scoped>
.hrm-modal {
  border: solid 1px black;
  border-radius: 3px;
  overflow: hidden;
  max-width: 600px;
  &-header {
    padding: 15px;
    background-color: #ccc;
    display: flex;
    justify-content: space-between;
  }
  &-title{
      margin: 0;
      display: inline-block;
  }
  &-close{
      font-size: 10px;
      color: #aaa;
      cursor: pointer;
      &:hover{
          color: #666;
      }
  }
  &-body {
    padding: 20px;
  }
  &-footer {
    border-top: solid 1px #ccc;
    padding: 20px;
    display: flex;
    justify-content: flex-end;
    &-btn {
      margin-bottom: 5px;
      margin-left: 5px;
    }
  }
}
</style>
