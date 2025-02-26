<template>
  <footer>
    <div class="footer__inner">
      <ul class="footer-contents">
        <li class="left-content">
          <p class="footer-txt">
            Coincident Strategies
            <br />
            for
            <span>Sustainable Success.</span>
          </p>
          <div class="icon-contac-tie">
            <div class="sns-icons">
              <a href="#none" target="_blank"
                ><img src="~/assets/images/instagram.svg" alt="인스타그램"
              /></a>
              <a href="#none" target="_blank"><img src="~/assets/images/twitter.svg" alt="X" /></a>
              <a href="#none" target="_blank"
                ><img src="~/assets/images/youtube.svg" alt="유튜브"
              /></a>
            </div>
            <router-link to="/contact" class="contact-btn">
              <span>Contact Us</span>
              <span class="material-symbols-outlined">chevron_right</span>
            </router-link>
          </div>

          <div class="copyright-privacy-tie">
            <span>ⓒ 2024 Company name</span>
            <span>ㅣ</span>
            <a href="/privacy-policy" class="privacy-link">Privacy Policy</a>
          </div>
        </li>

        <li class="right-contents">
          <div class="login-box">
            <router-link to="" class="login-btn">
              <span>LP Login</span>
              <span class="material-symbols-outlined">chevron_right</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

footer {
  color: #fff;
  border: 1px solid $border-color;
  background-color: #1c2838;

  .footer__inner {
    width: 90%;
    margin: 0 auto;
    padding: 10rem 2rem;
    border: 1px solid $border-color;

    .footer-txt {
      font-size: 2.1rem;
      margin-bottom: 7rem;
      line-height: 1.3;
      span {
        font-weight: 600;
        color: $point-color;
      }
    }

    .icon-contac-tie {
      margin-bottom: 6rem;
      display: flex;
      align-items: center;

      .sns-icons {
        width: 100%;
        max-width: 160px;
        display: flex;
        a {
          &:nth-child(2) {
            margin: 0 3rem;
          }
          img {
            width: 3rem;
          }
        }
      }
      .contact-btn {
        margin-left: 4rem;
        display: flex;
        align-items: center;
        font-weight: 300;
        .material-symbols-outlined {
          margin-left: 1rem;
          color: $point-color;
        }
      }
    }

    .footer-contents {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .left-content {
        width: 50%;
        .copyright-privacy-tie {
          font-weight: 300;
          .privacy-link {
            color: $point-color;
          }
        }
      }
      .right-contents {
        display: flex;
        width: fit-content;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid $border-color;
        .login-box {
          a {
            span {
              font-weight: 300;
            }
            .material-symbols-outlined {
              margin-left: 1rem;
              color: $point-color;
            }
          }
        }
        a {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  footer {
    .footer__inner {
      .footer-txt {
        font-size: clamp(1.9rem, 2.474vw, 2.1rem);
      }
      .icon-contac-tie {
        .sns-icons {
          a {
            &:nth-child(2) {
              margin: 0 1rem;
            }
            img {
              width: clamp(2.5rem, 3.255vw, 3rem);
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  footer {
    .footer__inner {
      .footer-txt {
        font-size: clamp(1.7rem, 3.091vw, 1.9rem);
      }

      .footer-contents .left-content {
        width: 65%;
      }
    }
  }
}

@media (max-width: 550px) {
  footer {
    .footer__inner {
      .footer-txt {
        margin-bottom: 4rem;
      }
      .footer-contents {
        flex-direction: column;
        .left-content {
          width: 100%;
          .copyright-privacy-tie {
            font-size: 1.4rem;
            margin-bottom: 4rem;
          }
        }
      }
      .icon-contac-tie {
        margin-bottom: 4rem;
      }
    }
  }
}
</style>
