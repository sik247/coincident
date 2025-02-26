<template>
  <section class="portfolio-container">
    <div class="portfolio__inner">
      <div class="portfolio-header-txt">
        <h2>Portfolio</h2>
      </div>
      <HeadlineSwiper></HeadlineSwiper>

      <div class="tab-contents-box">
        <nav class="tabs">
          <ul>
            <li>
              <button
                class="tab-item"
                :class="{ active: activeTab === 'portfolio' }"
                @click="ActiveTab('portfolio')"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                class="tab-item"
                :class="{ active: activeTab === 'partners' }"
                @click="ActiveTab('partners')"
              >
                Partners
              </button>
            </li>
          </ul>
        </nav>

        <section class="content">
          <div v-if="activeTab === 'portfolio'">
            <div class="portfolio-description">
              <!-- portfolio -->
              <ol class="portfolio-contents">
                <li class="logo">
                  <img src="~/assets/images/portfolio_brand_logo.png" alt="브랜드 로고" />
                </li>
                <li>
                  <p>Credit Building app for everyone.</p>
                </li>
                <li>
                  <p>PARTNERED</p>
                  <p>Series A</p>
                </li>
                <li>
                  <p>STATUS</p>
                  <p>Active</p>
                </li>
              </ol>

              <ol class="portfolio-contents">
                <li class="logo">
                  <img src="~/assets/images/portfolio_brand_logo.png" alt="브랜드 로고" />
                </li>
                <li>
                  <p>Credit Building app for everyone.</p>
                </li>
                <li>
                  <p>PARTNERED</p>
                  <p>Series A</p>
                </li>
                <li>
                  <p>STATUS</p>
                  <p>Active</p>
                </li>
              </ol>
            </div>
          </div>

          <!-- partners -->
          <div v-if="activeTab === 'partners'">
            <div class="partners-description">
              <ol class="partners-contents">
                <li class="logo">
                  <img src="~/assets/images/portfolio_brand_logo.png" alt="브랜드 로고" />
                </li>
                <li>
                  <p>Credit Building app for everyone.</p>
                </li>
                <li>
                  <p>PARTNERED</p>
                  <p>Series A</p>
                </li>
                <li>
                  <p>STATUS</p>
                  <p>Active</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import HeadlineSwiper from '~/components/HeadlineSwiper.vue'
export default {
  components: {
    HeadlineSwiper
  },
  data() {
    return {
      activeTab: 'portfolio'
    }
  },
  methods: {
    ActiveTab(tab) {
      this.activeTab = tab
    }
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;
.portfolio-container {
  .portfolio__inner {
    .portfolio-header-txt {
      background-image: url('~/assets/images/portfolio_bg.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      height: 350px;
      border: 1px solid $border-color;

      h2 {
        color: #fff;
        font-size: 4rem;
        padding: 15rem 5rem 5rem 5rem;
        width: 90%;
        margin: 0 auto;
        letter-spacing: 0.2rem;
      }
    }

    .tab-contents-box {
      background-color: #f3f5ef;
      // 탭메뉴
      .tabs {
        border: 1px solid #cccccc63;
        ul {
          display: flex;
          justify-content: center;
          width: 90%;
          margin: 0 auto;
          li {
            width: 100%;
          }
        }

        .tab-item {
          background: none;
          border: 1px solid #cccccc63;
          padding: 10px 20px;
          cursor: pointer;
          transition: ease-in-out 0.3s;
          width: 100%;
          font-family: 'Roboto', sans-serif;
          &.active {
            background-color: #ecefe6;
            font-weight: 600;
          }
        }
      }

      .content {
        margin-top: 30px;
        width: 90%;
        margin: 0 auto;

        .portfolio-contents,
        .partners-contents {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7.6rem 5rem 7.6rem 5rem;
          border: 1px solid #cccccc63;
          li {
            padding: 0 1rem;
          }
        }
      }

      .portfolio-description,
      .partners-description {
        border: 1px solid #cccccc63;

        h3 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .portfolio-container {
    .portfolio__inner {
      .portfolio-header-txt {
        background-size: cover;
        h2 {
          font-size: clamp(3.3rem, 4.297vw, 4rem);
          text-align: center;
        }
      }
      .tab-contents-box {
        .content {
          .portfolio-contents,
          .partners-contents {
            flex-direction: column;
            align-items: flex-start;
            padding: 7.6rem 3rem;
            li {
              width: 90%;
              margin: 0;
              &:nth-of-type(3) {
                margin: 2rem 0;
              }
              img {
                width: 180px;
                margin-bottom: 2rem;
              }
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .portfolio-container {
    .portfolio__inner {
      .portfolio-header-txt {
        h2 {
          font-size: clamp(2.8rem, 5.091vw, 3.3rem);
        }
      }
    }
  }
}
</style>
