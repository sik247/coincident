<!-- pages/index.vue -->
<template>
  <div class="main">
    <Headline></Headline>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
  </div>
</template>

<script>
import Headline from '~/components/main/Headline.vue'
import Section1 from '~/components/main/Section1.vue'
import Section2 from '~/components/main/Section2.vue'
import Section3 from '~/components/main/Section3.vue'

export default {
  components: { Headline, Section1, Section2, Section3 }
}
</script>
