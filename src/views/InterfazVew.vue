<template>
  <HeaderComponent />
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: { HeaderComponent },
};
</script>

<style>
body {
  display: flex;
  font-family: Arial, sans-serif;
  background-color: #464647;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
