<template>
  <section class="section section2">
    <div class="section2__inner">
      <div class="left-contents">
        <h2>Portfolio</h2>

        <div class="btn-box">
          <router-link to="/portfolio" class="portfolio-btn">
            <span>Portfolio</span>
            <span class="material-symbols-outlined">chevron_right</span>
          </router-link>

          <router-link to="" class="partners-btn">
            <span>Partners</span>
            <span class="material-symbols-outlined">chevron_right</span>
          </router-link>
        </div>
      </div>

      <div class="right-contents">
        <p>
          The
          <strong>strength of a partnership</strong>
          <br />
          lies in the ability to adapt, innovate,
          <br />
          and evolve together.
        </p>

        <div class="btn-box">
          <router-link to="" class="companies-btn">
            <span>All Companies</span>
            <span class="material-symbols-outlined">chevron_right</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.section2 {
  background: linear-gradient(to left, #24313e, #1b2b3c);

  .section2__inner {
    width: 90%;
    margin: 0 auto;
    color: #fff;
    padding: 10rem 0 14rem 8rem;
    border: 1px solid $border-color;
    display: flex;
    align-items: center;
    // left contents
    .left-contents {
      width: 17%;
      margin-right: 18rem;
      h2 {
        font-size: 2.7rem;
        line-height: 1.3;
        margin-bottom: 4.5rem;
        color: $point-color;
        font-weight: 600;
      }
    }
    // right contents
    .right-contents {
      margin-top: 13rem;
      p {
        font-size: 2.7rem;
        line-height: 1.4;
        margin-bottom: 4.5rem;
        font-weight: 300;
        strong {
          color: $point-color;
        }
      }
    }

    //common
    .btn-box {
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid $border-color;
        width: 100%;
        padding: 1.8rem 2rem;
        transition:
          box-shadow 0.3s ease,
          transform 0.3s ease;
      }
      .portfolio-btn {
        border-radius: $border-radius;
        &:hover {
          box-shadow: 380px 0 0 rgba(0, 0, 0, 0.2) inset;
          transform: translateX(7px);
        }
      }
      .partners-btn {
        border-radius: $border-radius;
        &:hover {
          box-shadow: 380px 0 0 0 rgba(0, 0, 0, 0.2) inset;
          transform: translateX(7px);
        }
      }
      .companies-btn {
        border-radius: $border-radius;
        &:hover {
          box-shadow: 500px 0 0 0 rgba(0, 0, 0, 0.2) inset;
          transform: translateX(7px);
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .section2 {
    .section2__inner {
      padding: 10rem 3rem 14rem 3rem;
      flex-direction: column;
      align-items: flex-start;

      .left-contents {
        width: 100%;
        margin-right: unset;
        h2 {
          font-size: clamp(2.4rem, 3.125vw, 2.7rem);
        }
      }
      .right-contents {
        margin-top: 6rem;
        width: 100%;
        p {
          font-size: clamp(2.4rem, 3.125vw, 2.7rem);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .section2 {
    .section2__inner {
      .left-contents {
        h2 {
          font-size: clamp(2.2rem, 4vw, 2.4rem);
        }
      }
      .right-contents {
        p {
          font-size: clamp(2.2rem, 4vw, 2.4rem);
        }
      }

      .btn-box {
        .portfolio-btn,
        .partners-btn,
        .companies-btn {
          font-size: 1.5rem;
          padding: clamp(1.3rem, 2.364vw, 2rem);
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .section2 {
    .section2__inner {
      .right-contents {
        p {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
        }
      }
    }
  }
}
</style>
