<template>
  <Login />
</template>


<script>
import Login from "../components/login/login.vue";
export default {
  data: () => ({

  }),
  mounted(){

},

  components: {
    Login,
  },
};
</script>
 


<style scoped>
.login {
  background: #f5f5f5 url(/background_bg_login.png) 53px 149px no-repeat !important;
  background-position: 50%;
  background-size: cover;
}

.form_login {
  width: 600px;
  padding: 40px;
  border-radius: 5px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 0 1px 17px 0 rgb(95 95 95 / 20%);
}

.form_title {
  text-align: center;
  color: #2c4b4c;
  font-size: 1.5em;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 10px;
  margin-bottom: 23px;
}

.form_login button {
  width: 100%;
  background: rgb(190 129 75);
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.input_style {
  text-align: left;
}

.form-control,
.custom-select {
  margin: 20px 0px;
}

select {
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  border: #ccc 1px solid;
  border-radius: 4px;
}

@media (max-width: 1023px) {
  .login {
    background: #f5f5f5 !important;
  }
}
@media (max-width: 768px) {
  .form_login {
    width: 100%;
    padding: 20px;
  }
  .form_login_cc {
    padding: 0px 20px;
  }
}
</style>