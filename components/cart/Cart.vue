<template>
  
</template>

<script>
export default {
  name: "Card",
  methods: {
    changeValue(val) {
      if (val) {
        //this.item.count++
        this.$store.dispatch("changeItemCount", {
          type: val,
          item: this.item
        })
      } else {
        if (this.item.count >= 0) {
          this.$store.dispatch("changeItemCount", {
            type: val,
            item: this.item
          })
        }
      }
    },
    removeItem() {
      this.$store.dispatch("removeFromCard", this.item.id)
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>

</style>
