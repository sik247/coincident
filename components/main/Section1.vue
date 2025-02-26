<template>
  <section class="section section1">
    <div class="section1__inner">
      <h2>
        <strong>Coincident Ventures,</strong>
        <br />
        Next-generation investment firm
      </h2>

      <p>
        We’re expertly hedges risks across various sectors,
        <br />
        delivering superior results, stable growth, and sustainable returns.
      </p>

      <div class="btn-box">
        <router-link to="/contact" class="contact-btn">
          <span>Contact Us</span>
          <span class="material-symbols-outlined">chevron_right</span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.section1 {
  background: linear-gradient(to right, #24313e, #1b2b3c);

  .section1__inner {
    width: 90%;
    margin: 0 auto;
    color: #fff;
    padding: 13rem 0 23.5rem 8rem;
    border: 1px solid $border-color;
    background-image: url('~/assets/images/section1_bg.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;

    h2 {
      font-size: 2.7rem;
      line-height: 1.3;
      margin-bottom: 4.5rem;
      strong {
        color: $point-color;
        font-weight: 600;
      }
    }
    p {
      font-size: 1.7rem;
      line-height: 1.5;
      margin-bottom: 6rem;
    }
    .btn-box {
      margin-bottom: 6rem;
    }

    .contact-btn {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 180px;
      border: 1px solid $border-color;
      padding: 2rem;
      transition:
        box-shadow 0.3s ease,
        transform 0.3s ease;
      border-radius: $border-radius;

      .material-symbols-outlined {
        margin-left: 2rem;
      }

      &:hover {
        box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
        transform: translateX(7px);
      }
    }
  }
}

@media (max-width: 1024px) {
  .section1 {
    .section1__inner {
      background-position: right bottom;
      padding: 13rem 3rem 18rem 3rem;
      h2 {
        font-size: clamp(2.4rem, 3.125vw, 2.7rem);
      }
    }
  }
}

@media (max-width: 768px) {
  .section1 {
    .section1__inner {
      h2 {
        font-size: clamp(2.2rem, 4vw, 2.4rem);
      }
      p {
        font-size: clamp(1.4rem, 2.545vw, 1.7rem);
      }
      .contact-btn {
        font-size: 1.5rem;
        padding: clamp(1.3rem, 2.364vw, 2rem);
        .material-symbols-outlined {
          font-size: 1.9rem;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .section1 {
    .section1__inner {
      h2 {
        font-size: clamp(2rem, 5vw, 2.2rem);
      }
    }
  }
}
</style>
