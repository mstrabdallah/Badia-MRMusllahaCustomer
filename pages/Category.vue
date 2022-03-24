<template>
  <h1>ffe</h1>
</template>

<script>
 export default {
   mounted(){
    this.get()
  },
   methods:{
     get(){
      // const params = new URLSearchParams(['parent']);
        alert(this.$route.query.parent)
     }
   }
}
</script>
