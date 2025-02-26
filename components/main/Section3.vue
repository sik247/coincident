<template>
  <section class="section section3">
    <div class="section3__inner">
      <div class="text-tie">
        <h2>New & Insights</h2>
        <router-link to="/News" class="view-more">
          View More
          <span class="material-symbols-outlined">chevron_right</span>
        </router-link>
      </div>
      <ul>
        <li v-for="(item, index) in newsList" :key="index">
          <router-link :to="item.link" class="new-box">
            <img :src="item.imgSrc" :alt="item.alt" class="new-img" />
            <p>{{ item.category }}</p>
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import section3Img from '~/assets/images/section3_ex.png'
export default {
  data() {
    return {
      newsList: [
        {
          imgSrc: section3Img,
          alt: 'News 1',
          category: 'News & Insight',
          title: 'Title for News 1',
          link: ''
        },
        {
          imgSrc: section3Img,
          alt: 'News 2',
          category: 'News & Insight',
          title: 'Title for News 2',
          link: ''
        },
        {
          imgSrc: section3Img,
          alt: 'News 3',
          category: 'News & Insight',
          title: 'Title for News 3',
          link: ''
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.section3 {
  .section3__inner {
    width: 90%;
    margin: 0 auto;
    color: #fff;
    padding: 13rem 8rem 25rem 8rem;
    border: 1px solid $border-color;
    display: flex;
    align-items: center;
    flex-direction: column;
    .text-tie {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    h2 {
      font-size: 2.7rem;
      margin-bottom: 5rem;
      width: 100%;
      text-align: center;
    }
    .view-more {
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      &:hover {
        color: $point-color;
        transition: 0.3s;
        .material-symbols-outlined {
          transform: translateX(7px);
          transition: 0.3s;
        }
      }
    }

    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      li {
        a {
          display: flex;
          flex-direction: column;
        }
        img {
          margin-bottom: 3rem;
          width: 100%;
        }

        p {
          color: $point-color;
          font-size: 1.7rem;
          margin-bottom: 1.2rem;
        }
        span {
          font-size: 1.8rem;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .section3 {
    .section3__inner {
      padding: 10rem 3rem 14rem 3rem;
      h2 {
        font-size: clamp(2.4rem, 3.125vw, 2.7rem);
      }
      ul {
        flex-direction: column;
      }
    }
  }
}

@media (max-width: 768px) {
  .section3 {
    .section3__inner {
      h2 {
        font-size: clamp(2.2rem, 4vw, 2.4rem);
      }
      ul {
        li {
          p {
            font-size: 1.6rem;
          }
          span {
            font-size: 1.7rem;
          }
        }
      }
      .view-more {
        font-size: 1.5rem;
        .material-symbols-outlined {
          font-size: 1.9rem;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  .section3 {
    .section3__inner {
      h2 {
        font-size: clamp(2.2rem, 4vw, 2.4rem);
      }
      ul {
        li {
          p {
            font-size: 1.5rem;
          }
          span {
            font-size: 1.6rem;
          }
        }
      }
    }
  }
}
</style>
