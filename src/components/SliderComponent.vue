<template>
  <section class="slider_content" aria-label="Carrusel de imágenes">
    <div class="carousel-track">
      <div
        v-for="copy in 2"
        :key="copy"
        class="carousel-group"
        :aria-hidden="copy === 2 ? 'true' : null"
      >
        <figure v-for="(imgSrc, index) in slides" :key="`${copy}-${index}`">
          <img :src="imgSrc" :alt="`Imagen ${index + 1}`" loading="lazy" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpse0jxLac5rarsrd1oibzU-4ZiUYEZ57mpROke9_58pqEByIl6YeODls&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJLH7qwntGMED7klSwwZOqS_68quOMSp8Rio_O2a4xPKHup72UjKrZjBe&s=10",
        "https://static.vecteezy.com/system/resources/previews/013/948/540/non_2x/mcdonald-s-logo-on-transparent-white-background-free-vector.jpg",
        "https://media.istockphoto.com/id/1468285157/es/vector/linda-hamburguesa-en-estilo-retro-de-dibujos-animados-ilustraci%C3%B3n-de-arte-de-l%C3%ADneas.jpg?s=612x612&w=0&k=20&c=fdDjn0pguwWxpiULzaZPKBfIuDBkPHtbmaDOny2dEbs=",
        "https://img.pikbest.com/illustration/20251111/best-burger-logo-design-%E2%80%93-modern-fast-food-branding-tasty-restaurant-emblem_12023442.jpg!sw800",
      ],
    };
  },
};
</script>

<style scoped>
.slider_content {
  --carousel-gap: 16px;
  --carousel-speed: 36s;
  width: 100%;
  height: clamp(180px, 28vw, 320px);
  border-radius: 20px;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: max-content;
  height: 100%;
  animation: carousel-scroll var(--carousel-speed) linear infinite;
  animation-play-state: running;
  will-change: transform;
}

@keyframes carousel-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.carousel-group {
  flex: 0 0 auto;
  display: flex;
  gap: var(--carousel-gap);
  height: 100%;
  padding-right: var(--carousel-gap);
  box-sizing: border-box;
}

.carousel-group figure {
  flex: 0 0 clamp(220px, 24vw, 360px);
  height: 100%;
  margin: 0;
  overflow: hidden;
  border-radius: 12px;
}

.carousel-group img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 640px) {
  .carousel-group figure {
    flex-basis: 220px;
  }
}
</style>
