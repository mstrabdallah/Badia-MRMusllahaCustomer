<template>
  <v-simple-table
    fixed-header
  >
    
      <tbody>
        <Cart v-for="item in cart" :item="item" :key="item.id"/>
      </tbody>
  
  </v-simple-table>
</template>

<script>
export default {
  name: "cardTable",
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
