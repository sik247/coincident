<template>
  <section class="contact-container">
    <div class="contact__inner">
      <div class="contact-header-txt">
        <h2>Contact Us</h2>
      </div>

      <div class="contents">
        <div class="sns-section">
          <div class="sns-section__inner">
            <h3>Get in touch</h3>

            <ul class="sns-phone-box">
              <li>
                <p>Social Media</p>
                <div class="sns-box">
                  <a href="#none" target="_blank"
                    ><img src="~/assets/images/instagram_dark.svg" alt="인스타그램"
                  /></a>
                  <a href="#none" target="_blank"
                    ><img src="~/assets/images/twitter_dark.svg" alt="X"
                  /></a>
                  <a href="#none" target="_blank"
                    ><img src="~/assets/images/youtube_dark.svg" alt="유튜브"
                  /></a>
                </div>
              </li>

              <li>
                <p>Phone</p>
                <p>+82 10 0000 0000</p>
              </li>
            </ul>
          </div>
        </div>

        <div class="form-section">
          <div class="h3-box"><h3>Send a note</h3></div>
          <form action="post">
            <ul>
              <li>
                <label for="email"> EMAIL ADDRESS </label>
                <input type="text" id="email" autocomplete="off" required />
              </li>

              <li>
                <label for="contact1"> PHONE NUMBER </label>
                <input type="number" id="contact1" autocomplete="off" required />
              </li>

              <li>
                <label for="company">NAME OR COMPANY </label>
                <input type="text" id="company" autocomplete="off" required />
              </li>

              <li>
                <label for="contact2"> MEMO </label>
                <textarea type="text" id="contact2" autocomplete="off" required></textarea>
              </li>

              <li class="btn-box">
                <button>
                  Send
                  <span class="material-symbols-outlined">chevron_right</span>
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.contact-container {
  .contact__inner {
    .contact-header-txt {
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
    .contents {
      background-color: #f3f5ef;
      padding: 5rem 0;
      .sns-section {
        border: 1px solid #cccccc63;
        height: 195px;
        .sns-section__inner {
          display: flex;
          align-items: center;
          width: 90%;
          height: inherit;
          margin: 0 auto;
          border: 1px solid #cccccc63;
        }
        h3 {
          font-size: 2.4rem;
          color: #1b2937;
          font-weight: 600;
          width: 30%;
          height: 100%;
          border: 1px solid rgba(204, 204, 204, 0.3882352941);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .sns-phone-box {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          li {
            flex: 0.2;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 2rem;

            .sns-box {
              a {
                &:nth-of-type(2) {
                  margin: 0 1.3rem;
                }
              }
            }
            p {
              &:nth-of-type(1) {
                margin-bottom: 2rem;
                font-size: 1.8rem;
              }
              &:nth-of-type(2) {
                color: #283d52;
                font-size: 1.5rem;
              }
            }
          }
        }
      }
      .form-section {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #cccccc63;
        display: flex;
        .h3-box {
          width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 4rem;
          h3 {
            font-size: 2.4rem;
            color: #1b2937;
            font-weight: 600;
            height: 100%;
          }
        }
        form {
          padding: 2rem 0 12rem 2rem;
          width: 100%;
          border: 1px solid #cccccc63;

          ul {
            max-width: 650px;
            li {
              display: flex;
              flex-direction: column;
              margin: 2rem auto;
            }
            .btn-box {
              button {
                flex-direction: unset;
                border: 1px solid #ccc;
                border-radius: $border-radius;
                max-width: 120px;
                height: 4rem;
                margin: 3rem 0 0 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 1rem;
                color: #1b2937;
                background-color: $point-color;
                transition: 0.3s ease-in-out;
                .material-symbols-outlined {
                  font-weight: 300;
                  color: #1b2937;
                }
                &:hover {
                  box-shadow: 120px 0 0 0 rgba(0, 0, 0, 0.2) inset;
                  transform: translateX(7px);
                }
              }
            }
          }
        }
      }
    }
    label {
      color: #283d52;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    input {
      height: 4rem;
    }
    input,
    textarea {
      border: 1px solid #1b2937;
      font-size: 1.4rem;
      font-family: 'Roboto', sans-serif;
      border-radius: $border-radius;
      padding: 1rem;
    }
    textarea {
      height: 300px;
    }
  }
}

@media (max-width: 1024px) {
  .contact-container {
    .contact__inner {
      .contact-header-txt {
        background-size: cover;
        h2 {
          font-size: clamp(3.3rem, 4.297vw, 4rem);
          text-align: center;
        }
      }
      .contents {
        .sns-section {
          .sns-section__inner {
            flex-direction: column;
            .sns-phone-box {
              width: 90%;
              li {
                flex: unset;
                padding: 0 2rem 0 0;
                height: fit-content;
                .sns-box {
                  img {
                    width: 25px;
                  }
                }
                p {
                  &:nth-of-type(1) {
                    font-size: 1.6rem;
                  }
                  &:nth-of-type(2) {
                    font-size: 1.4rem;
                  }
                }
              }
            }
          }
          h3 {
            font-size: 2.1rem;
            width: 90%;
            border: unset;
            align-items: center;
            justify-content: unset;
          }
        }
        .form-section {
          flex-direction: column;
          .h3-box {
            width: 90%;
            border: unset;
            padding: 0;
            h3 {
              font-size: 2.1rem;
              height: 96px;
              width: 90%;
              margin: 0 auto;
              display: flex;
              align-items: center;
            }
          }

          form {
            border: unset;
            width: 90%;
            padding: 0 0 12rem 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contact-container {
    .contact__inner {
      .contact-header-txt {
        background-size: cover;
        h2 {
          font-size: clamp(2.8rem, 5.091vw, 3.3rem);
        }
      }
    }
  }
}
</style>
