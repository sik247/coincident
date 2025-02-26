<template>
  <header class="header" :class="{ 'is-scrolled': isScrolled }">
    <div class="header__inner pc">
      <router-link to="/" class="logo">
        <img src="~/assets/images/logo.png" alt="로고이미지" />
      </router-link>
      <nav class="nav">
        <div
          class="dropdown"
          ref="dropdownRef"
          @mouseenter="handleHover(true)"
          @mouseleave="handleHover(false)"
        >
          <button @click="toggleDropdown" class="menu-item">Portfolio</button>
          <Transition name="slide">
            <ul v-if="isOpen" class="dropdown-menu">
              <li>
                <router-link to="/portfolio" @click="closeDropdown">
                  <span>Portfolio</span>
                  <span class="material-symbols-outlined">chevron_right</span>
                </router-link>
              </li>
              <li>
                <router-link to="/partners" @click="closeDropdown">Partners</router-link>
              </li>
            </ul>
          </Transition>
        </div>
        <router-link to="/news" class="menu-item" @click="closeDropdown">News</router-link>
        <router-link to="/about" class="menu-item" @click="closeDropdown">About Us</router-link>
        <router-link to="/contact" class="menu-item" @click="closeDropdown">Contact</router-link>
      </nav>
    </div>
    <div class="header__inner mo">
      <router-link to="/" class="logo">
        <img src="~/assets/images/logo.png" alt="로고이미지" />
      </router-link>
      <button class="menu-toggle" @click="toggleMobileMenu">
        <span class="material-symbols-outlined menu-icon">menu</span>
      </button>
      <Transition name="slide-menu">
        <nav :class="{ 'nav-mobile': true, active: isMobileOpen }">
          <div class="img-close-box">
            <img src="" alt="" />
            <button class="close-btn" @click="toggleMobileMenu">×</button>
          </div>
          <button @click="toggleDropdownMobile" class="menu-item">Portfolio</button>
          <Transition name="slide-submenu">
            <ul v-if="isOpenMobile" class="dropdown-menu">
              <li>
                <router-link to="/portfolio" @click="closeAllMobile">
                  <span>Portfolio</span>
                </router-link>
              </li>
              <li>
                <router-link to="/partners" @click="closeAllMobile">Partners</router-link>
              </li>
            </ul>
          </Transition>
          <router-link to="/news" @click="closeAllMobile">News</router-link>
          <router-link to="/about" @click="closeAllMobile">About Us</router-link>
          <router-link to="/contact" @click="closeAllMobile">Contact</router-link>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isMobileOpen: false,
      isOpenMobile: false,
      isScrolled: false,
      dropdownRef: null
    }
  },
  methods: {
    handleHover(state) {
      if (window.innerWidth > 1024) {
        this.isOpen = state
      }
    },
    toggleDropdown() {
      if (window.innerWidth <= 1024) {
        this.isOpen = !this.isOpen
      } else {
        this.isOpen = true
      }
    },
    toggleDropdownMobile() {
      this.isOpenMobile = !this.isOpenMobile
    },
    closeDropdown() {
      this.isOpen = false
    },
    closeDropdownMobile() {
      this.isOpenMobile = false
    },
    closeAllMobile() {
      this.isMobileOpen = false // 모바일 메뉴 닫기
      this.isOpenMobile = false // 서브메뉴 닫기
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0
    },
    toggleMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen
      if (!this.isMobileOpen) {
        this.isOpenMobile = false
      }
    },
    handleClickOutside(event) {
      if (this.dropdownRef && !this.dropdownRef.contains(event.target)) {
        this.isOpen = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@use '~/assets/scss/variables.scss' as *;

.header {
  border-bottom: 1px solid $border-color;
  transition: background-color 0.3s ease;

  &.is-scrolled {
    background-color: rgb(27, 41, 55);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .header__inner {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-right: 1px solid $border-color;
    border-left: 1px solid $border-color;
  }

  .header__inner.mo {
    display: none;
  }

  .logo {
    width: fit-content;
    img {
      width: 150px;
    }
  }

  .nav {
    text-align: center;
    display: flex;
    gap: 20px;
    align-items: center;
    width: fit-content;

    .menu-item {
      text-decoration: none;
      color: #fff;
      font-size: 1.6rem;
      cursor: pointer;
      border: none;
      background: none;
      transition: color 0.3s ease, opacity 0.3s ease;
      opacity: 0.8;
      padding: 3rem 1rem;
      width: fit-content;

      &:hover {
        color: #7db2c2;
      }
    }
  }

  .dropdown {
    position: relative;

    .dropdown-menu {
      position: absolute;
      top: 80px;
      left: 0;
      background: #1d2531;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      list-style: none;
      width: 200px;

      li {
        a {
          text-decoration: none;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 10px;
        }

        &:hover {
          transition: 0.2s ease-in-out;
          font-weight: bolder;
          box-shadow: 200px 0 0 0 rgba(0, 0, 0, 0.2) inset;
        }
      }
    }
  }
}

.menu-icon {
  color: #fff;
}
.img-close-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  transform: translateX(100%);
}

.slide-menu-enter-to,
.slide-menu-leave-from {
  transform: translateX(0);
}

.slide-submenu-enter-active,
.slide-submenu-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.slide-submenu-enter-from,
.slide-submenu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-submenu-enter-to,
.slide-submenu-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.nav-mobile {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 280px;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
  border-radius: 2rem 0 0 2rem;

  &.active {
    transform: translateX(0);
  }

  .close-btn {
    align-self: flex-end;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    text-align: right;
  }

  .menu-item {
    text-align: left;
    height: 50px;
    color: #000;
    font-size: 1.6rem;
  }

  .dropdown-menu {
    padding-left: 20px;
    font-size: 1.4rem;
    margin-bottom: 1rem;

    li {
      a {
        color: #000;
        text-decoration: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
      }
    }
  }
  a {
    height: 50px;
    display: flex;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  .header {
    .header__inner.pc {
      display: none;
    }
    .header__inner.mo {
      display: flex;
    }
  }
}
</style>
