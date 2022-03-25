<template>
<v-badge
      overlap
      :content="`${$store.state.carts.cartLength}`"
    >
      <v-btn nuxt to="/card" icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
    </v-badge>
</template>

<script>
export default {

}
</script>

<style>
.stock-span{
  position: relative;
  bottom: 20px;
  left: 1px;
  background-color: aquamarine;
  border-radius: 50%;
  padding: 5px;
}
</style>
