<template>
  <div>
    <!-- <v-btn class="mx-2" fab dark  color="indigo" @click="addToCard" >
      <v-icon
        dark
        > mdi-cart-outline </v-icon>
    </v-btn> -->


  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },

  name: 'Card',
  methods: {

    changeValue(val) {
      if (val) {
        //this.item.count++
        this.$store.dispatch('changeItemCount', {
          type: val,
          item: this.item,
        })
      } else {
        if (this.item.count >= 0) {
          this.$store.dispatch('changeItemCount', {
            type: val,
            item: this.item,
          })
        }
      }
    },
    removeItem() {
      this.$store.dispatch('removeFromCard', this.item.id)
    },
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.v-btn--fab.v-size--default {
  height: 50px;
  width: 50px;
}
</style>
