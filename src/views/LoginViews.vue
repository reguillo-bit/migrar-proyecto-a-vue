<template>
  <div>
    <LoginComponent :imagen="require(`@/assets/skydrop_logo.png`)" />
  </div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";

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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  display: flex;
  font-family: Arial, sans-serif;
  background-color: #242649;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
