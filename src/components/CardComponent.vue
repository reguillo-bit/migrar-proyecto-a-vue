<template>
  <section class="carta">
    <img :src="imagen" alt="" />
    <p class="p">{{ nombre }}</p>
    <div>boton</div>
  </section>
</template>

<script>
export default {
  props: {
    imagen: String,
    nombre: String,
  },
};
</script>

<style>
.carta {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.p {
  display: flex;
  height: 60px;
  width: 100%;
  background-color: gray;
}
.boton {
  display: flex;
  height: 60px;
  width: 100%;
}
.boton:hover {
  background-color: aliceblue;
  cursor: pointer;
}
</style>
