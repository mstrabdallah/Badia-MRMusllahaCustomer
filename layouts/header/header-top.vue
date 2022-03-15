<template >
  <nav class="header-top container_cc">
    <a>اتصل بنا</a>
    <ul>

      <li>
        <a :href="switchLocalePath('ar')">
          <v-list-item-title>العربية</v-list-item-title>
        </a>
      </li>
      <li>
        <a :href="switchLocalePath('en')">
          <v-list-item-title>English</v-list-item-title>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
 
 <style scoped>
.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e0b755;
  height: 40px;
}
ul {
  display: flex;
}
ul li:lang(ar) {
  margin-right: 20px;
}

ul li:lang(en) {
  margin-left: 20px;
}
</style>