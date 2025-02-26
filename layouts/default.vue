<!-- layouts/default.vue -->
<template>
  <div>
    <Header></Header>
    <NuxtPage></NuxtPage>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: { Header, Footer },
  mounted() {
    document.querySelector('body').style.backgroundColor = '#1B2937'
  }
}
</script>
