<template>
  <h1>ffe</h1>
</template>

<script>
 export default {
    computed: {
    ...mapGetters(['Categories']),
  },
  methods: {
    ...mapActions(['getSubCategories']),

     get(){
      // const params = new URLSearchParams(['parent']);
        alert(this.$route.query.parent)
     }
    // onSubmit(){
    //   this.addToCart(this.prodName)
    // }
  },

}
</script>
