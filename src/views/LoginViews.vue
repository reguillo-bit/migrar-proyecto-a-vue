<template>
  <div>
    <LoginComponent />
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
  font-family: Arial, sans-serif;
  background-color: #4e4e4e;
  height: 100vh;
  width: 100vw;
}
</style>
