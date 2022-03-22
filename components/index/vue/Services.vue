<template>


  <section id="serv" class="container_cc serv">
    <h2>popular services</h2>

    <div class="sec_body">
      <template>
        <v-container>
          <v-row no-gutters>
            <v-col
            v-for="n in 6"
            :key="n"
            >
              <v-card class="crad_s mx-auto" max-width="344" >
                <v-img
                  src="http://tanshcreative.com/bizops-lp-preview/variations/assets/images/hero-img2.jpg"
                  height="200px"
                ></v-img>

                <v-card-title> Top western road trips </v-card-title>

                <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

                <v-card-actions>
                  <!-- <v-btn color="orange lighten-2" text> Explore </v-btn> -->

                  <v-spacer></v-spacer>

                 <v-btn
                  text
                  color="deep-purple accent-4"
                  nuxt
                  to="/services"
                >
                  GO To Services
                </v-btn>
                </v-card-actions>

              </v-card>
            </v-col>

          </v-row>
        </v-container>
      </template>
    </div>
  </section>
</template>

<style scoped>
.serv {
      background: #f8f8f8;
  padding: 20px;
  padding-bottom:50px;
  min-height: 100vh;
  align-items: center;

}
.serv h2{
        text-align: center;
    padding: 40px;
    font-weight: bold;
    font-size: 2em;
}
.sec_body{
    align-items: center;
}
.crad_s{
        padding: 0px;
        margin-bottom: 30px;
}

</style>
