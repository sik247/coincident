<!-- <template>
  <section class="news-container">
    <div class="news__inner">
      <div class="news-header-txt">
        <h2>News & Insights</h2>
      </div>

      <section class="news-contents-box">
        <div class="search-filter">
          <div class="custom-select-wrapper">
            <div class="select-input-tie">
              <div class="select-wrapper">
                <select
                  id="custom-select1"
                  class=""
                  v-model="selectedValue1"
                  @click="toggleDropdown1"
                >
                  <option v-for="option1 in options1" :key="option1.value" :value="option1.value">
                    {{ option1.name }}
                  </option>
                </select>
                <span class="arrow" :class="{ rotated: isOpen1 }">
                  <span class="material-symbols-rounded">keyboard_arrow_down</span>
                </span>
              </div>

              <div class="input-search-box">
                <input
                  v-model="title"
                  type="text"
                  class="form-control"
                  @keyup.enter="apply"
                  placeholder="Enter news"
                />
                <button>
                  <img src="~/assets/images/search.png" alt="search button" />
                </button>
              </div>
            </div>
          </div>

          <div class="custom-select-wrapper newest">
            <div class="select-wrapper">
              <select id="custom-select2" v-model="selectedValue2" @click="toggleDropdown2">
                <option v-for="option2 in options2" :key="option2.value" :value="option2.value">
                  {{ option2.name }}
                </option>
              </select>
              <span class="arrow" :class="{ rotated: isOpen2 }">
                <span class="material-symbols-rounded">keyboard_arrow_down</span>
              </span>
            </div>
          </div>
        </div>

        <ul class="news-contents">
          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>
          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>
          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>
          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>
          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>

          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>

          <li>
            <p>News & Insights</p>
            <p>News / Insight Title</p>
            <p>News / Insight Title</p>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue1 = ref('All')
const isOpen1 = ref(false)
const options1 = [
  { value: 'All', name: 'All' },
  { value: 1, name: 'Option 1' },
  { value: 2, name: 'Option 2' },
  { value: 3, name: 'Option 3' }
]

const selectedValue2 = ref('Newest')
const isOpen2 = ref(false)
const options2 = [
  { value: 'Newest', name: 'Newest' },
  { value: 4, name: 'Option 1' },
  { value: 5, name: 'Option 2' },
  { value: 6, name: 'Option 3' }
]

const toggleDropdown1 = () => {
  isOpen1.value = !isOpen1.value
}
const toggleDropdown2 = () => {
  isOpen2.value = !isOpen2.value
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.news-container {
  .news__inner {
    .news-header-txt {
      background-image: url('~/assets/images/portfolio_bg.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      height: 350px;
      border: 1px solid $border-color;
      width: 90%;
      margin: 0 auto;

      h2 {
        color: #fff;
        font-size: 4rem;
        padding: 15rem 5rem 5rem 5rem;
        letter-spacing: 0.2rem;
      }
    }

    .news-contents-box {
      background-color: #f3f5ef;

      select {
        width: 150px;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        appearance: none;
        background-color: #ecefe6;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #ccc;
      }

      option {
        font-size: 1.4rem;
      }

      .arrow {
        position: absolute;
        right: 10px;
        transform: translateY(25%);
        transition: transform 0.25s ease-in-out;
        cursor: pointer;
      }

      .arrow.rotated {
        transform: translateY(10%) rotate(180deg);
      }

      .news-contents {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #cccccc63;
        padding: 8.8rem 8rem;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        li {
          width: 32%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          background-color: #1b2937;
          height: 350px;
          border-radius: $border-radius;
          color: #fff;
          padding: 0 4rem 4rem 4rem;

          p {
            &:nth-child(2) {
              margin: 1rem 0;
            }
            &:nth-child(2),
            &:nth-child(3) {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }

  .search-filter {
    width: 90%;
    margin: 0 auto;
    padding: 5rem;
    border: 1px solid #cccccc63;
    display: flex;
    justify-content: space-between;
  }

  .custom-select-wrapper {
    position: relative;
  }

  .select-wrapper {
    position: relative;
  }

  .select-input-tie {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    .input-search-box {
      position: relative;

      input {
        border: 1px solid #ccc;
        border-radius: $border-radius;
        width: 100%;
        padding: 1rem;
      }

      button {
        img {
          position: absolute;
          right: 10px;
          top: 7px;
          width: 20px;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .news-container {
    .news__inner {
      .news-header-txt {
        background-size: cover;
        h2 {
          font-size: clamp(3.3rem, 4.297vw, 4rem);
          text-align: center;
        }
      }
      .news-contents-box {
        .news-contents {
          padding: 8.8rem 0;
          li {
            width: 90%;
            margin: 0 auto;
          }
        }

        .search-filter {
          flex-direction: column-reverse;
          padding: 5rem 2rem;
          .custom-select-wrapper.newest {
            margin-bottom: 1rem;
          }
          .select-wrapper {
            width: 100%;
          }
          select {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .news-container {
    .news__inner {
      .news-header-txt {
        h2 {
          font-size: clamp(2.8rem, 5.091vw, 3.3rem);
        }
      }
      .news-contents-box {
        .news-contents {
          li {
            padding: 0 2rem 2rem 2rem;
            p {
              &:nth-child(1) {
                font-size: 1.5rem;
              }
              &:nth-child(2),
              &:nth-child(3) {
                font-size: 1.6rem;
              }
            }
          }
        }
      }
    }
  }
}
</style> -->
<script setup>
import { ref, onMounted } from 'vue'

// --- Dropdown & Search Data (unchanged) ---
const selectedValue1 = ref('All')
const isOpen1 = ref(false)
const options1 = [
  { value: 'All', name: 'All' },
  { value: 1, name: 'Option 1' },
  { value: 2, name: 'Option 2' },
  { value: 3, name: 'Option 3' }
]

const selectedValue2 = ref('Newest')
const isOpen2 = ref(false)
const options2 = [
  { value: 'Newest', name: 'Newest' },
  { value: 4, name: 'Option 1' },
  { value: 5, name: 'Option 2' },
  { value: 6, name: 'Option 3' }
]

const toggleDropdown1 = () => {
  isOpen1.value = !isOpen1.value
}
const toggleDropdown2 = () => {
  isOpen2.value = !isOpen2.value
}

// --- Where we'll store fetched articles ---
const articles = ref([])
function truncateText(text, maxLength) {
  if (!text) return ''
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text
}

// --- Fetch CoinDesk data on mount ---
onMounted(async () => {
  try {
    const baseUrl = 'https://data-api.coindesk.com/news/v1/article/list'
    const params = {
      lang: 'EN',
      limit: 10,
      api_key: 'fa052d0f81102ee08f94b209514d8da70746d23f85886fde7694454877906215'
    }

    // Build the URL with query params
    const url = new URL(baseUrl)
    url.search = new URLSearchParams(params).toString()

    const options = {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }

    const response = await fetch(url, options)
    const json = await response.json()
    console.log('CoinDesk API Response:', json)

    // Depending on the API response structure:
    articles.value = json.Data || []
  } catch (err) {
    console.error('Error fetching CoinDesk data:', err)
  }
  

})
</script>

<template>
  <section class="news-container">
    <div class="news__inner">
      <div class="news-header-txt">
        <h2>News & Insights</h2>
      </div>

      <section class="news-contents-box">
        <!-- Existing search/filter UI -->
        <div class="search-filter">
          <div class="custom-select-wrapper">
            <div class="select-input-tie">
              <div class="select-wrapper">
                <select
                  id="custom-select1"
                  v-model="selectedValue1"
                  @click="toggleDropdown1"
                >
                  <option
                    v-for="option1 in options1"
                    :key="option1.value"
                    :value="option1.value"
                  >
                    {{ option1.name }}
                  </option>
                </select>
                <span class="arrow" :class="{ rotated: isOpen1 }">
                  <span class="material-symbols-rounded">keyboard_arrow_down</span>
                </span>
              </div>

              <div class="input-search-box">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter news"
                />
                <button>
                  <img src="~/assets/images/search.png" alt="search button" />
                </button>
              </div>
            </div>
          </div>

          <div class="custom-select-wrapper newest">
            <div class="select-wrapper">
              <select
                id="custom-select2"
                v-model="selectedValue2"
                @click="toggleDropdown2"
              >
                <option
                  v-for="option2 in options2"
                  :key="option2.value"
                  :value="option2.value"
                >
                  {{ option2.name }}
                </option>
              </select>
              <span class="arrow" :class="{ rotated: isOpen2 }">
                <span class="material-symbols-rounded">keyboard_arrow_down</span>
              </span>
            </div>
          </div>
        </div>

        <ul class="news-contents">
  <li v-for="(article, i) in articles" :key="i" class="news-card">
    <div class="image-wrapper">
      <img :src="article.IMAGE_URL" alt="Article Image" />
    </div>
    <div class="content-wrapper">
      <h3>{{ truncateText(article.TITLE, 50) }}</h3>
      <p class="body-snippet">{{ truncateText(article.BODY, 100) }}</p>
      <p class="source-text">
        {{ article.SOURCE_DATA && article.SOURCE_DATA.NAME ? article.SOURCE_DATA.NAME : 'Unknown source' }}
      </p>
    </div>
  </li>
</ul>
      </section>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.news-container {
  .news__inner {
    /* ===== HEADER ===== */
    .news-header-txt {
      background-image: url('~/assets/images/portfolio_bg.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      height: 350px;
      border: 1px solid $border-color;
      width: 90%;
      margin: 0 auto;

      h2 {
        color: #fff;
        font-size: 4rem;
        padding: 15rem 5rem 5rem 5rem;
        letter-spacing: 0.2rem;
      }
    }

    /* ===== MAIN CONTENTS BOX ===== */
    .news-contents-box {
      background-color: #f3f5ef;

      /* --- Existing select, arrow, etc. styles --- */
      select {
        width: 150px;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        appearance: none;
        background-color: #ecefe6;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #ccc;
      }

      option {
        font-size: 1.4rem;
      }

      .arrow {
        position: absolute;
        right: 10px;
        transform: translateY(25%);
        transition: transform 0.25s ease-in-out;
        cursor: pointer;
      }

      .arrow.rotated {
        transform: translateY(10%) rotate(180deg);
      }

      /* ===== NEWS GRID ===== */
      .news-contents {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #cccccc63;
        padding: 8.8rem 8rem;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        /* Each news card */
        li.news-card {
          width: 32%;
          background-color: #1b2937; /* dark card bg */
          color: #fff;
          border-radius: $border-radius;
          overflow: hidden; /* ensures the image corners are clipped if needed */
          display: flex;
          flex-direction: column;
          height: 350px; /* remove or adjust if you want auto-height */

          /* IMAGE AREA */
          .image-wrapper {
            width: 100%;
            height: 180px; /* fixed image height */
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover; /* fill the area, cropping if necessary */
            }
          }

          /* CONTENT AREA */
          .content-wrapper {
            flex: 1; /* takes the remaining vertical space */
            display: flex;
            flex-direction: column;
            padding: 1rem 2rem;

            /* Title (h3) */
            h3 {
              font-size: 1.6rem;
              margin-bottom: 0.5rem;
            }

            /* Body snippet (smaller text) */
            .body-snippet {
              font-size: 1.4rem;
              line-height: 1.4;
              color: #dcdcdc;
              margin-bottom: 0.5rem;
            }

            /* Source text (even smaller) */
            .source-text {
              font-size: 1.2rem;
              color: #aaa;
              margin-top: auto; /* pushes this to the bottom if there's space */
            }
          }
        }
      }
    }
  }

  /* ===== SEARCH/FILTER SECTION ===== */
  .search-filter {
    width: 90%;
    margin: 0 auto;
    padding: 5rem;
    border: 1px solid #cccccc63;
    display: flex;
    justify-content: space-between;
  }

  .custom-select-wrapper {
    position: relative;
  }

  .select-wrapper {
    position: relative;
  }

  .select-input-tie {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    .input-search-box {
      position: relative;

      input {
        border: 1px solid #ccc;
        border-radius: $border-radius;
        width: 100%;
        padding: 1rem;
      }

      button {
        img {
          position: absolute;
          right: 10px;
          top: 7px;
          width: 20px;
        }
      }
    }
  }
}

/* ===== MEDIA QUERIES ===== */
@media (max-width: 1024px) {
  .news-container {
    .news__inner {
      .news-header-txt {
        background-size: cover;
        h2 {
          font-size: clamp(3.3rem, 4.297vw, 4rem);
          text-align: center;
        }
      }
      .news-contents-box {
        .news-contents {
          padding: 8.8rem 0;

          li.news-card {
            width: 90%;
            margin: 0 auto;
            height: auto; /* let cards resize on smaller screens */
          }
        }

        .search-filter {
          flex-direction: column-reverse;
          padding: 5rem 2rem;

          .custom-select-wrapper.newest {
            margin-bottom: 1rem;
          }

          .select-wrapper {
            width: 100%;
          }

          select {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .news-container {
    .news__inner {
      .news-header-txt {
        h2 {
          font-size: clamp(2.8rem, 5.091vw, 3.3rem);
        }
      }
      .news-contents-box {
        .news-contents {
          li.news-card {
            padding: 0 2rem 2rem 2rem;
            height: auto; /* override the 350px if you want fluid height */

            .content-wrapper {
              h3 {
                font-size: 1.5rem;
              }
              .body-snippet {
                font-size: 1.4rem;
              }
              .source-text {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
}



.news-container {
  .news__inner {
    .news-header-txt {
      background-image: url('~/assets/images/portfolio_bg.png');
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;
      height: 350px;
      border: 1px solid $border-color;
      width: 90%;
      margin: 0 auto;

      h2 {
        color: #fff;
        font-size: 4rem;
        padding: 15rem 5rem 5rem 5rem;
        letter-spacing: 0.2rem;
      }
    }

    .news-contents-box {
      background-color: #f3f5ef;

      select {
        width: 150px;
        padding: 10px;
        border-radius: 4px;
        cursor: pointer;
        appearance: none;
        background-color: #ecefe6;
        font-size: 1.4rem;
        outline: none;
        border: 1px solid #ccc;
      }

      option {
        font-size: 1.4rem;
      }

      .arrow {
        position: absolute;
        right: 10px;
        transform: translateY(25%);
        transition: transform 0.25s ease-in-out;
        cursor: pointer;
      }

      .arrow.rotated {
        transform: translateY(10%) rotate(180deg);
      }

      .news-contents {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #cccccc63;
        padding: 8.8rem 8rem;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        li {
          width: 32%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          background-color: #1b2937;
          height: 350px;
          border-radius: $border-radius;
          color: #fff;
          padding: 0 4rem 4rem 4rem;

          p {
            &:nth-child(1) {
              margin-bottom: 1rem;
              font-weight: bold;
              font-size: 2rem; /* example styling for the headline */
            }
            &:nth-child(2) {
              font-size: 1.6rem; /* example styling for summary */
            }
          }
        }
      }
    }
  }

  .search-filter {
    width: 90%;
    margin: 0 auto;
    padding: 5rem;
    border: 1px solid #cccccc63;
    display: flex;
    justify-content: space-between;
  }

  .custom-select-wrapper {
    position: relative;
  }

  .select-wrapper {
    position: relative;
  }

  .select-input-tie {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    .input-search-box {
      position: relative;

      input {
        border: 1px solid #ccc;
        border-radius: $border-radius;
        width: 100%;
        padding: 1rem;
      }

      button {
        img {
          position: absolute;
          right: 10px;
          top: 7px;
          width: 20px;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .news-container {
    .news__inner {
      .news-header-txt {
        background-size: cover;
        h2 {
          font-size: clamp(3.3rem, 4.297vw, 4rem);
          text-align: center;
        }
      }
      .news-contents-box {
        .news-contents {
          padding: 8.8rem 0;
          li {
            width: 90%;
            margin: 0 auto;
          }
        }

        .search-filter {
          flex-direction: column-reverse;
          padding: 5rem 2rem;
          .custom-select-wrapper.newest {
            margin-bottom: 1rem;
          }
          .select-wrapper {
            width: 100%;
          }
          select {
            width: 100%;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .news-container {
    .news__inner {
      .news-header-txt {
        h2 {
          font-size: clamp(2.8rem, 5.091vw, 3.3rem);
        }
      }
      .news-contents-box {
        .news-contents {
          li {
            padding: 0 2rem 2rem 2rem;
            p {
              &:nth-child(1) {
                font-size: 1.5rem;
              }
              &:nth-child(2) {
                font-size: 1.4rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
