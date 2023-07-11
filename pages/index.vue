<template>
  <div class="Index">
    <IndexMobile v-if="isMobile" />

    <IndexDesktop v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',

  computed: {
    ...mapState(['isMobile'])
  }
}
</script>
