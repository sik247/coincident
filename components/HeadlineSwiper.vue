<template>
  <div class="swiper-wrapper">
    <div class="swiper-track">
      <div v-for="(image, index) in duplicatedSlides" :key="index" class="swiper-slide">
        <img :src="image" alt="예시이미지" />
      </div>
    </div>
  </div>
</template>

<script>
import exImg from '~/assets/images/ex_img.png'
import bitget from '~/assets/images/bitget3.png'
import cryptox from '~/assets/images/cryptox2.png'

export default {
  setup() {
    const images = [exImg, bitget, cryptox, exImg]
    const duplicatedSlides = [...images, ...images, ...images]

    return {
      duplicatedSlides
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;
.swiper-wrapper {
  overflow: hidden;
  position: relative;
  border: 1px solid $border-color;
}

.swiper-track {
  display: flex;
  width: max-content;
  animation: slide 16s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.333%);
  }
}

.swiper-slide {
  width: 405px;
  height: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $border-color;
  img {
    width: 254px;
    object-fit: contain;
  }
}

@media (max-width: 1024px) {
  .swiper-slide {
    width: 400px;
    height: 140px;
    img {
      width: clamp(200px, 26.042vw, 254px);
    }
  }
}

@media (max-width: 768px) {
  .swiper-slide {
    height: 120px;
    img {
      width: clamp(150px, 27.273vw, 200px);
    }
  }
}

@media (max-width: 550px) {
  .swiper-slide {
    width: 393px;
  }
}
</style>
