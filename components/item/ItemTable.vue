<template>
  <v-simple-table
    class="table"
    fixed-header
  >
        <Item v-for="item in items" :item="item" :key="item.id"/>
    
  </v-simple-table>
</template>

<script>
export default {
  name: "ItemTable",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
