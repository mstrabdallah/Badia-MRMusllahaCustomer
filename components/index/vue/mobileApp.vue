<template>
  <section class="container_cc mob">
      <v-row class="row landing">
        <div class="col-12 col-lg-6">
            <div class="row pt-16 mt-16">
                <div class="col-12 col-lg-6 landing-img2 d-block d-lg-none d-xl-none">
                    <img src='/images/mobileapp.png' class='img-fluid' alt="frame"  />
                </div>
                <div class="col-12 text-center py-2">
                    <h2 class="mesalah-h">{{$t('mrmusllaha')}}</h2>
                    <h2> {{$t('service-on')}}</h2>
                </div>

                <div class="col-12 text-center">
                    <p>{{$t('mobile-p')}}</p>
                </div>
                <div class="col-12 text-center">
                    <img src='/images/googleapp.svg' alt="google-app-download"  />
                    <img src='/images/apple.svg'  alt="ios-app-download"  />
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6 landing-img d-none d-sm-none d-md-none d-lg-block">
            <img src='/images/mobileapp.png' class='img-fluid' alt="frame"  />
        </div>
    </v-row>


    <!-- <div class="mob_body">
      <template>
        <v-container>
          <v-row no-gutters>
            <v-col>
              <div class="mob_imgs">
                <img
                  src="https://www.mrmusllaha.com/static/media/mobileapp1.b7b023d7.png"
                />
              </div>
            </v-col>
            <v-divider class="mx-4" d-sm-none vertical></v-divider>
            <v-col>
              <div class="mob_des">
                <h3>
                  We are the ideal platform to have a range of services at your
                  doorstep.
                </h3>
                <p>
                  Use our mobile app <br />For reference and get free service
                </p>

                <div class="but_download">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.Musllaha"
                    target="_blank"
                    rel="noreferrer"
                    ><img
                      src="https://www.mrmusllaha.com/app_store.png"
                      alt=""
                      style="max-height: 48px; max-width: 142px"
                    /> </a
                  ><a
                    href="https://apps.apple.com/us/app/mr-musllaha/id1582292480"
                    target="_blank"
                    rel="noreferrer"
                    ><img
                      src="https://www.mrmusllaha.com/playstore.png"
                      alt=""
                      style="max-height: 48px; max-width: 142px"
                    />
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </div> -->
  </section>
</template>

<style scoped>
.mob {
  padding: 20px;
  margin-top: 100px;
}
.mob_body {
}
.mob_imgs {
  text-align: center;
}
.mob_des {
}

h3 {
  display: block;
  padding-top: 50px;
  font-size: 30px;
}
p {
  border-left: 1px solid #dfb754;
  padding-left: 12px;
  line-height: 35px;
  margin-top: 40px;
  margin-left: 20px;
}

.but_download {
  margin-top: 70px;
}
.but_download :nth-child(2):lang(en) {
  margin-left: 40px;
}
.but_download :nth-child(2):lang(ar) {
  margin-right: 40px;
}
</style>
