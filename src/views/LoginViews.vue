<template>
  <div class="login-view">
    <LoginComponent :imagen="require(`@/assets/skydrop_logo.png`)" />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
  name: "LoginViews",
  components: {
    LoginComponent,
  },
  props: {
    msg: String,
  },
};
</script>

<style>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>
