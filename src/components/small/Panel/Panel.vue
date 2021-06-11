<template>
  <div class="hrm-panel" :class="classes">
    <div class="hrm-panel-title" @click="toggleThis()">
      <i class="hrm-panel-title-icon" :class="icon"></i>
      {{label}}
      <div class="hrm-panel-title-btn" v-if="withBtn" @click="$emit('titleBtnClick')">Button</div>
    </div>
    <div
      class="hrm-panel-body"
      :class="{ 'hrm-panel-body--hide': !show }"
    >
      <div class="hrm-panel-items">
        <div class="hrm-panel-items-item" v-for="item in items" :key="item.value">{{ item.label }}</div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hrm-panel',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: function(value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default: 'fas fa-bookmark',
    },
    label: {
      type: String,
      default: 'Title',
    },
    toggle: {
      type: Boolean,
      default: false,
    },
    withBtn: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  computed: {
    classes() {
      return {
        ['hrm-panel--toggle']: this.toggle,
        [`hrm-panel--${this.size}`]: true,
      };
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleThis() {
      if (this.toggle) {
        this.show = !this.show;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
.hrm-panel {
  &-title {
    border: solid 1px black;
    background-color: #ccc;
    display: flex;
    align-items: center;
    font-size: 18px;
    &-icon {
      margin-right: 5px;
    }
    &-btn {
      margin-left: auto;
      border: solid 1px black;
      padding: 2px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background: #aaa;
      }
    }
  }
  &-body {
    border: solid 1px black;
    transition-duration: 0.3s;
    height: auto;
    &--hide {
      transition-duration: 0.3s;
      height: 0;
      overflow: hidden;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }
  &-items{
      &-item{
          border: solid 1px black;
          cursor: pointer;
          font-size: 14px;
          &:hover{
              background-color: #ccc;
          }
      }
  }
  &--toggle {
    & .hrm-panel-title {
      cursor: pointer;
    }
  }
  
  &--small {
    & .hrm-panel-title,
    & .hrm-panel-body,
    & .hrm-panel-items-item {
      padding: 0px 5px;
    }
    & .hrm-panel-items{
        margin: 0px -5px;
    }
  }
  &--medium {
    & .hrm-panel-title,
    & .hrm-panel-body,
    & .hrm-panel-items-item {
      padding: 5px 15px;
    }
    & .hrm-panel-items{
        margin: -5px -15px;
    }
  }
  &--large {
    & .hrm-panel-title,
    & .hrm-panel-body,
    & .hrm-panel-items-item {
      padding: 10px 18px;
    }
    & .hrm-panel-items{
        margin: -10px -18px;
    }
  }
}
</style>
