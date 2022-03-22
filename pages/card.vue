<template>
  <v-container >
     <v-banner single-line>
    <v-avatar
      slot="icon"
      color=" accent-4"
      size="100"
    >
      <img
        src="/images/02.png"
      />


    </v-avatar>

    <h4>Title</h4>
    <span>Price</span>
    <template v-slot:actions>
      <v-btn
        fab
        :rounded='false'
        small

      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>


      <span class="counter"

      >
        1
      </span>
      <v-btn
        fab

        small

      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>

     <v-btn
        fab
        dark
        small
        :rounded='false'
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
  </v-banner>
  </v-container>
   <!-- <v-container class="">
    <v-row >
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <div
          class="pa-2"
          tile
        >


        </div>
      </v-col>



      <v-col
        cols="6"
        md="4"
      >
        <div
          class="pa-2"

          tile
        >
          Process to card
        </div>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>

export default {

   data () {
      return {

      }
    },
  computed: {
    items() {
      return this.$store.getters.getItems
    },
    cart() {
      return this.$store.getters.getCart
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice
    }
  }
}
</script>

<style scoped>

.price{
  background-color: #ff0000cc;
  color: white;
  font-weight: 900;
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
}
.counter{
  border: 1px solid #ccc;
  padding: 8px 20px;
  border-radius: 5px;
}
.v-btn--round{
  border-radius: 5px;
}
</style>
