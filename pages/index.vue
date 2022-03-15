<template>
  <div class="head_p container_cc">
    <div class="head">
 
 
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true });
  },
};
</script>
 
 <style scoped>
.head {
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head h1 {
  font-size: 5em;
  margin-bottom: 40px;
}

.head_left button {
  width: 250px;
  margin-top: 60px;
  background: #2c4b4c;
  padding: 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

.head_left p {
  padding-bottom: 15px;
}
.head_right img {
  width: 100%;
  padding: 0px 20px;
}

@media (max-width: 960px) {
  .head_left {
    width: 100%;
  }

  .head {
    flex-direction: column;
    text-align: center;
    border: 1px solid #bf804b;
    border-radius: 5px;
    padding: 20px;
    padding-top: 3em;
  }
  .head_right {
    display: none;
  }
}
</style>