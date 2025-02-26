<template>
  <div class="about-container">
    <section class="section1">
      <div class="section1__inner">
        <h2>
          <strong>Coincident</strong>
          Ventures
        </h2>
        <p>Coincident Strategies for Sustainable Success.</p>
        <p>
          Coincident Ventures is a next-generation investment firm
          <br />
          that expertly hedges risks across various sectors, delivering
          <br />
          superior results, stable growth, and sustainable returns.
        </p>
      </div>
    </section>
    <section class="section2">
      <div class="section2__inner">
        <div class="txt-box">
          <h2>Believing in hope is not our strategy.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt
            <br />
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris
            <br />
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillu
            <br />
            m dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui
          </p>
        </div>

        <ol>
          <li>
            <p>
              IDEA AND
              <br />
              MARKET SELECTION
            </p>
          </li>
          <li>
            <p>
              MARKET & RISK
              <br />
              RESEARCH
            </p>
          </li>
          <li>
            <p>
              FIND HIGHEST
              <br />
              PROFITABILITY
              <br />
              WHEN SUCCESSFUL
            </p>
          </li>
          <li>
            <p>
              MEETINGS
              <br />
              AND INVEST
            </p>
          </li>
        </ol>
      </div>
    </section>
    <section class="section3">
      <div class="section3__inner">
        <div class="contents">
          <div class="left-contents">
            <h3>What we are</h3>
            <ul class="ok-check-box">
              <li>
                <p>
                  A Next-Generation Investment Firm - We strategically hedge risks <br />
                  and identify high-potential opportunities across various sectors.
                </p>
              </li>

              <li>
                <p>
                  Focused on Sustainable & Stable Returns - Our approach <br />
                  prioritizes long-term value creation over short-term speculation.
                </p>
              </li>

              <li>
                <p>
                  Client-Centered & Trustworthy - We align our <br />
                  success with our clients' goals, fostering strong partnerships based on trust.
                </p>
              </li>

              <li>
                <p>
                  Data-Driven & Adaptive - Leveraging cutting-edge analytics and <br />
                  market insights, we adapt to evolving economic conditions.
                </p>
              </li>
            </ul>
          </div>

          <div class="right-contents">
            <h3>What we are not</h3>
            <ul class="no-check-box">
              <li>
                <p>
                  A Short-Term Speculative Fund - We don’t chase quick <br />
                  wins at the cost of stability and long-term growth.
                </p>
              </li>
              <li>
                <p>
                  High-Risk, High-Volatility Investors - Our strategies focus on <br />managing risk
                  while ensuring consistent and reliable returns.
                </p>
              </li>
              <li>
                <p>
                  One-Size-Fits-All Approach - We tailor investment <br />
                  strategies to align with market trends and client needs.
                </p>
              </li>
              <li>
                <p>
                  Passive Observers - We proactively seek opportunities and <br />
                  navigate market changes with precision and expertise.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section4">
      <div class="section4__inner">
        <h3>FAQ</h3>

        <ul class="faq-txt">
          <li v-for="(faq, index) in faqs" :key="index">
            <button @click="faqToggle(index)">
              {{ faq.question }}
              <span
                class="material-symbols-rounded"
                :style="
                  faq.open
                    ? {
                        transform: 'translateY(0) rotate(180deg)',
                        transition: 'transform 0.3s ease'
                      }
                    : { transition: 'transform 0.3s ease' }
                "
              >
                keyboard_arrow_down
              </span>
            </button>
            <p :class="{ 'faq-answer': true, active: faq.open }">{{ faq.answer }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section5">
      <div class="section5__inner">
        <p>
          you gain access to a firm that’s not <br />
          only committed to protecting your <br />
          investments but also dedicated to <br />unlocking long-term growth.
        </p>
      </div>
    </section>
    <section class="section6">
      <div class="section6__inner">
        <h3>Our Team</h3>

        <ol>
          <li>
            <h4>Team member</h4>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit, sed do<br />
              eiusmod tempor incididunt ut<br />
              dolore magna aliqua. Ut enim ad<br />
              veniam, quis nostrud exercitation<br />
              o laboris nisi ut aliquip ex ea com<br />
              consequat. Duis aute irure dolor<br />
              henderit in voluptate velit esse<br />
              dolore eu fugiat nulla pariatur.
            </p>
          </li>
          <li>
            <h4>Team member</h4>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit, sed do<br />
              eiusmod tempor incididunt ut<br />
              dolore magna aliqua. Ut enim ad<br />
              veniam, quis nostrud exercitation<br />
              o laboris nisi ut aliquip ex ea com<br />
              consequat. Duis aute irure dolor<br />
              henderit in voluptate velit esse<br />
              dolore eu fugiat nulla pariatur.
            </p>
          </li>
          <li>
            <h4>Team member</h4>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit, sed do<br />
              eiusmod tempor incididunt ut<br />
              dolore magna aliqua. Ut enim ad<br />
              veniam, quis nostrud exercitation<br />
              o laboris nisi ut aliquip ex ea com<br />
              consequat. Duis aute irure dolor<br />
              henderit in voluptate velit esse<br />
              dolore eu fugiat nulla pariatur.
            </p>
          </li>
          <li>
            <h4>Team member</h4>
            <p>
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit, sed do<br />
              eiusmod tempor incididunt ut<br />
              dolore magna aliqua. Ut enim ad<br />
              veniam, quis nostrud exercitation<br />
              o laboris nisi ut aliquip ex ea com<br />
              consequat. Duis aute irure dolor<br />
              henderit in voluptate velit esse<br />
              dolore eu fugiat nulla pariatur.
            </p>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'How do we invest to COINCIDENT VENTURES?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est quos amet impedit dignissimos vero, ipsum reprehenderit quam ut facilis.',
          open: false
        },
        {
          question: 'How to schedule an offline meeting?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque adipisci nam iste minus porro facere iure iusto recusandae officiis tenetur, at corrupti ipsa modi eius ratione! Pariatur esse itaque recusandae necessitatibus dolores consequuntur illo doloremque dicta a aperiam, dolorem natus?',
          open: false
        },
        {
          question: 'What is the minimum and maximum funding for clients?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi voluptates, corporis tenetur eaque ipsam aperiam? Vitae qui, nostrum reprehenderit commodi repellat consequuntur corrupti sequi doloribus repellendus itaque libero, harum architecto minima dolorem in ad distinctio debitis quidem perspiciatis! Mollitia, ut suscipit nesciunt aperiam amet odio, quos dolore laborum quisquam atque sunt doloribus necessitatibus qui dolorum porro vitae nobis earum fugiat facere harum, nihil enim. Consectetur ipsum veniam atque cum excepturi magni distinctio, id, necessitatibus consequuntur tempora dolore sit magnam a, illum eum voluptate deleniti quae reiciendis? Illo deserunt porro inventore pariatur hic expedita voluptatum, magni, minima optio nobis obcaecati!',
          open: false
        }
      ]
    }
  },
  methods: {
    faqToggle(index) {
      if (this.faqs[index]) {
        this.faqs[index].open = !this.faqs[index].open
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;
.about-container {
  section {
    color: #fff;
  }
  //section1
  .section1 {
    border: 1px solid $border-color;
    .section1__inner {
      padding: 14rem 0 30rem 8rem;
      background-image: url(~/assets/images/section1_bg.png);
      background-repeat: no-repeat;
      background-position: right;
      background-size: contain;

      h2 {
        font-size: 5rem;
        font-weight: 600;
        margin-bottom: 2.5rem;
        strong {
          color: $point-color;
        }
      }
      p {
        font-weight: 300;
        &:nth-of-type(1) {
          font-size: 2.3rem;
          margin-bottom: 3.5rem;
        }
        &:nth-of-type(2) {
          line-height: 1.5;
          font-size: 1.7rem;
        }
      }
    }
  }

  //section2
  .section2 {
    background: linear-gradient(180deg, #1b2937 0%, #182430 100%);
    .section2__inner {
      .txt-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12rem 0 16rem 0;
        text-align: center;
        font-weight: 300;
        border: 1px solid $border-color;
        h2 {
          font-size: 2.3rem;
          margin-bottom: 4.5rem;
        }
        p {
          font-size: 1.7rem;
          line-height: 1.5;
        }
      }

      ol {
        width: 100%;
        display: flex;
        padding-bottom: 10rem;

        li {
          width: calc(100% / 4);
          height: 215px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid $border-color;

          p {
            text-align: center;
            line-height: 1.3;
            position: relative;

            &::before {
              position: absolute;
              top: -30px;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 25px;
              height: 25px;
              background-color: $point-color;
              border-radius: 50%;
              color: #333;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.4rem;
            }
          }
        }

        li:nth-child(1) p::before {
          content: '1';
        }
        li:nth-child(2) p::before {
          content: '2';
        }
        li:nth-child(3) p::before {
          content: '3';
        }
        li:nth-child(4) p::before {
          content: '4';
        }
      }
    }
  }

  //section3
  .section3 {
    background-color: #f3f5ef;
    color: #1b2937;
    .section3__inner {
      border: 1px solid #cccccc63;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 12rem;
    }
    .contents {
      display: flex;
      justify-content: center;
      border: 1px solid #cccccc63;
    }
    .left-contents,
    .right-contents {
      display: flex;
      flex-direction: column;
      border: 1px solid #cccccc63;
      width: 50%;
      h3 {
        padding: 12rem 0 4rem 2rem;
        font-weight: 600;
        font-size: 2.3rem;
      }
    }
    ul {
      li {
        background-color: #ecefe6;
        padding: 3.5rem 5rem;
        border: 1px solid #cccccc63;
      }
    }
    .ok-check-box,
    .no-check-box {
      li {
        p {
          position: relative;
          line-height: 1.5;

          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -35px;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            color: #fff;
            font-size: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
          }
        }
      }
    }

    .ok-check-box {
      li {
        p {
          &::before {
            content: '✔';
            background-color: #2eb100;
          }
        }
      }
    }

    .no-check-box {
      li {
        p {
          &::before {
            content: '✖';
            background-color: #df0000;
          }
        }
      }
    }
  }

  //section4
  .section4 {
    background-color: #f3f5ef;
    color: #1b2937;
    .section4__inner {
      display: flex;
      width: 90%;
      margin: 0 auto;
      justify-content: center;
      border: 1px solid #cccccc63;
      padding-bottom: 12rem;

      h3 {
        font-size: 2.6rem;
        font-weight: 600;
        width: 100%;
        border: 1px solid #cccccc63;
        padding: 4rem 0 0 4rem;
      }
      .faq-txt {
        li {
          border: 1px solid #cccccc63;
          height: 230px;
          overflow: hidden;
          button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 2.1rem;
            width: 100%;
            padding: 4rem 4rem 0;
          }
          .faq-answer {
            overflow: hidden;
            opacity: 0;
            padding: 0 2rem;
            margin-top: 1rem;
            background-color: #f1f1f1;
            font-size: 1.6rem;
            line-height: 1.7;
            border-radius: 8px;
            transition:
              height 0.5s ease-out,
              opacity 0.3s ease,
              padding 0.3s ease;
            margin: 2rem 4rem 0 4rem;

            &.active {
              height: auto;
              opacity: 1;
              padding: 1.5rem 2rem;
              margin-bottom: 4rem;
              height: 100px;
              overflow: auto;
            }
          }
        }
      }
    }
  }

  //section5
  .section5 {
    background: linear-gradient(180deg, #1b2937 0%, #182430 100%);

    .section5__inner {
      width: 90%;
      margin: 0 auto;
      border: 1px solid $border-color;
      position: relative;

      p {
        font-size: 3.5rem;
        font-weight: 300;
        line-height: 1.3;
        padding: 7rem 0 15rem 5rem;
        position: relative;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 40px;
        width: 250px;
        height: 100%;
        background: url('~/assets/images/about_bull_bg.png') no-repeat center;
        background-size: contain;
      }
    }
  }

  //section6
  .section6 {
    background-color: #f3f5ef;
    color: #1b2937;
    border: 1px solid #cccccc63;
    .section6__inner {
      width: 90%;
      margin: 0 auto;
      padding-block: 12rem;
      border: 1px solid #cccccc63;
      h3 {
        font-size: 2.3rem;
        font-weight: 600;
        border: 1px solid rgba(204, 204, 204, 0.3882352941);
        padding: 0 0 3rem 2rem;
        border-top: unset;
      }
      ol {
        display: flex;
        justify-content: space-between;
        li {
          width: 100%;
          h4 {
            font-weight: 500;
            padding: 2rem 0 2rem 2rem;
            border: 1px solid #cccccc63;
            font-size: 1.8rem;
          }
          p {
            color: #283d52;
            padding: 2rem 2rem 5rem 2rem;
            line-height: 1.4;
            border: 1px solid #cccccc63;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .about-container {
    .section1 {
      .section1__inner {
        padding: 14rem 0 30rem 0;
        background-position: right bottom;
        width: 90%;
        margin: 0 auto;

        h2 {
          font-size: clamp(3.5rem, 4.557vw, 5rem);
        }
        p {
          &:nth-of-type(1) {
            font-size: clamp(2rem, 2.604vw, 2.3rem);
          }
          &:nth-of-type(2) {
            font-size: clamp(1.6rem, 2.083vw, 1.7rem);
          }
        }
      }
    }
    // 2
    .section2 {
      .section2__inner {
        .txt-box {
          h2,
          p {
            width: 90%;
            margin: 0 auto;
          }

          h2 {
            margin-bottom: 4.5rem;
            font-size: clamp(2rem, 2.604vw, 2.3rem);
          }
          p {
            font-size: 1.5rem;
          }
        }
        ol {
          flex-direction: column;
          align-items: center;
          li {
            width: 100%;
            p {
              width: 90%;
              margin: 0 auto;
              font-size: 1.5rem;
            }
          }
        }
      }
    }
    // 3
    .section3 {
      .section3__inner {
        .contents {
          flex-direction: column;
        }

        .left-contents,
        .right-contents {
          width: 100%;

          p {
            font-size: 1.5rem;
          }
        }
      }
    }
    // 4
    .section4 {
      .section4__inner {
        flex-direction: column;
        h3 {
          padding: 4rem;
        }
        .faq-txt {
          li {
            button {
              font-size: clamp(1.8rem, 2.344vw, 2.1rem);
            }

            .faq-answer {
              font-size: 1.5rem;
              margin: 2rem auto;
              width: 90%;
            }
          }
        }
      }
    }
    // 5
    .section5 {
      .section5__inner {
        p {
          font-size: clamp(2.5rem, 3.255vw, 3.5rem);
          padding: 7rem 0 15rem 0;
          width: 90%;
          margin: 0 auto;
        }
        &::after {
          background: url('~/assets/images/about_bull_bg.png') no-repeat center bottom;
          background-size: contain;
        }
      }
    }
    // 6
    .section6 {
      .section6__inner {
        ol {
          flex-direction: column;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about-container {
    .section1 {
      .section1__inner {
        h2 {
          font-size: clamp(2.5rem, 4.545vw, 3.5rem);
        }
        p {
          &:nth-of-type(1) {
            font-size: clamp(1.7rem, 3.091vw, 2rem);
          }
          &:nth-of-type(2) {
            font-size: clamp(1.5rem, 2.727vw, 1.6rem);
          }
        }
      }
    }

    // 4
    .section4 {
      .section4__inner {
        .faq-txt {
          li {
            button {
              padding: 4rem 0 0;
              font-size: clamp(1.6rem, 2.909vw, 1.8rem);
              width: 90%;
              margin: 0 auto;
              text-align: left;
            }
          }
        }
      }
    }
    // 5
    .section5 {
      .section5__inner {
        p {
          font-size: clamp(2rem, 3.636vw, 2.5rem);
        }
        &::after {
          width: clamp(150px, 27.273vw, 250px);
        }
      }
    }
    // 6
    .section6 {
      .section6__inner {
      }
    }
  }
}

@media (max-width: 550px) {
  .about-container {
    .section1 {
      .section1__inner {
        h2 {
          font-size: clamp(2.2rem, 5.5vw, 2.5rem);
        }
        p {
          &:nth-of-type(1) {
            font-size: clamp(1.6rem, 4vw, 1.7rem);
          }
          &:nth-of-type(2) {
            font-size: clamp(1.4rem, 3.5vw, 1.5rem);
          }
        }
      }
    }

    // 5
    .section5 {
      .section5__inner {
        p {
          font-size: clamp(1.8rem, 4.5vw, 2rem);
        }
        &::after {
          width: clamp(120px, 30vw, 150px);
        }
      }
    }
    // 6
    .section6 {
      .section6__inner {
      }
    }
  }
}
</style>
