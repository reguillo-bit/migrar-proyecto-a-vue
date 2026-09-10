<template>
  <section class="carta">
    <img :src="imagen" alt="" />
    <p class="p">{{ nombre }}</p>
    <div class="boton2">boton</div>
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
.carta img {
  display: block;
  width: 100%;
  height: 125px;
  border-start-start-radius: 10px;
  border-start-end-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.carta:hover {
  transform: scale(1.1);
}
.p {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;

  padding: 12px;
  background-color: gray;
}
.boton2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  padding: 0 12px;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  background-color: burlywood;
}
.boton2:hover {
  background-color: aliceblue;
  cursor: pointer;
}
</style>
