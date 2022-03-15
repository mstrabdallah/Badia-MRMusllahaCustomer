<template>
  <div>
    <div class="file" v-if="this.type == 'pdf'">
      <a :href="this.data" target="_blank">
        <fa icon="download" />
        {{ this.type }}
      </a>
    </div>

    <div class="img" v-else>
      <a :href="this.data" target="_blank">
        <img :src="this.data" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data", "type"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.img {
  max-width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
}
.img img {
  max-height: 300px;
  max-width: 90%;
}
.file a {
  background: #bf804b;
  padding: 5px;
  border-radius: 5px;
  min-width: 100px;
  width: max-content;
  text-align: center;
  margin-top: 12px;
  color: #fff;
  display: block;
}
</style>
