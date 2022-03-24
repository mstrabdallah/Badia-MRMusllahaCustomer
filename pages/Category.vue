<template>
  <h1>ffe</h1>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
 export default {

  methods: {
    ...mapActions(['getSubCategories']),
  },
  mounted() {
    this.getSubCategories(this.$route.query.parent)

  },

}
</script>
