<template>
  <div class="hrm-avatar">
    <img src="./default-user.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'HrmAvatar',
};
</script>

<style lang="scss" scoped>
.hrm-avatar {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  overflow: hidden;
  cursor: pointer;
  border: solid 1px black;
  img {
    width: 100%;
  }
}
</style>
