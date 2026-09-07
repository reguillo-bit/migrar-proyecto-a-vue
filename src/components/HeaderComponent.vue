<template>
  <header>
    <h1>Whining</h1>
    <div class="menu-conten">
      <p class="menu">inicio</p>
      <p class="menu">rastreo</p>
      <p class="menu">acerca de</p>
      <p class="menu">contacto</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
header {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 0;
  padding: 0 20px;
  background-color: rgb(27, 26, 27);
  border-bottom: 2px solid rgb(1, 209, 252);
}

h1 {
  margin: 0;
  color: rgb(1, 209, 252);
  text-align: left;
}
.menu-conten {
  display: flex;
  gap: 50px;
  height: 100px;
  width: 400px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}
.menu {
  font-weight: 100px;
  color: aliceblue;
}
.menu:hover {
  color: rgb(1, 209, 252);
  cursor: pointer;
}
</style>
