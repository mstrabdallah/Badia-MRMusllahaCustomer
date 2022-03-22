<template>
  <section>
    <div class="head_ps">
      <h1>filter</h1>
    </div>
    <div class="container_cc">
      <div class="services">
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
                  to="/Categories/services/1"
                >
                  single service
                </v-btn>
                </v-card-actions>

              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </section>
</template>

<style scoped>
.head_ps {
  min-height: 300px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.services {
  width: max-content;
  margin: auto;
  margin-top: -100px;
  border-radius: 19px;
}
.crad_s {
  margin-top: 30px;
}
</style>
