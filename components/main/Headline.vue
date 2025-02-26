<template>
  <section class="headline-container">
    <div class="headline__inner">
      <h1>
        Coincident Strategies
        <br />
        for Sustainable Success.
      </h1>
      <p>
        We reduce uncertainty through
        <strong>meticulous strategies,</strong>
        <br />
        <strong>foster long-term growth</strong>
        with our clients, and identify innovative opportunities
        <br />
        <strong>in evolving markets to deliver the best possible outcomes.</strong>
      </p>
    </div>

    <HeadlineSwiper></HeadlineSwiper>
  </section>
</template>

<script>
import HeadlineSwiper from '~/components/HeadlineSwiper.vue'
export default {
  components: {
    HeadlineSwiper
  }
}
</script>
<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;
.headline-container {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  .headline__inner {
    padding: 12rem 0 15rem 0;
    color: #fff;
    border: 1px solid $border-color;
    h1 {
      font-size: 5rem;
      line-height: 1.5;
      letter-spacing: 2px;
      margin-bottom: 6rem;
      opacity: 0;
      transform: translateY(0);
      animation: fadeInUp 1.5s ease-in-out forwards;
    }
    p {
      line-height: 2;
      font-size: 1.8rem;
      animation: fadeInUp 1.5s ease-in-out forwards;
      animation-delay: 1s;
      opacity: 0;
      transform: translateY(0);
      strong {
        color: $point-color;
      }
    }
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 1024px) {
  .headline-container {
    .headline__inner {
      h1 {
        font-size: clamp(4rem, 5.208vw, 5rem);
        margin: 0 auto 6rem auto;
      }
      p {
        font-size: clamp(1.7rem, 2.214vw, 1.8rem);
        margin: 0 auto;
      }
      h1,
      p {
        width: 90%;
      }
    }
  }
}

@media (max-width: 768px) {
  .headline-container {
    .headline__inner {
      h1 {
        font-size: clamp(3rem, 5.455vw, 4rem);
      }
      p {
        font-size: clamp(1.6rem, 2.909vw, 1.7rem);
      }
    }
  }
}
@media (max-width: 550px) {
  .headline-container {
    .headline__inner {
      h1 {
        font-size: clamp(2.3rem, 5.75vw, 3rem);
      }
      p {
        font-size: clamp(1.5rem, 3.75vw, 1.6rem);
      }
    }
  }
}
@media (max-width: 400px) {
  .headline-container {
    .headline__inner {
      h1 {
        font-size: clamp(2rem, 5.556vw, 2.3rem);
      }
    }
  }
}
</style>
