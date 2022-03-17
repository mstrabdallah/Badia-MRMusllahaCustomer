<template>
  <v-container class="py-10">
      <h2 class="text-center my-10 about-h">{{$t('about-h')}}</h2>
    <v-row>
      <v-col md="6">
        <div class="mt-12 about-p">
          <p>
            {{$t('about-p')}}
          </p>
        </div>
      </v-col>
      <v-col md="6">
        <div >
          <img class="img-fluid" src="/images/output-onlinepngtools.png" alt="">
        </div>
      </v-col>
    </v-row>

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



  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.row{
  margin: 0px;
}
.mesalah-h{
  color: #e0b755;
}
 p{
    font-size: 20px;
  }
  .landing{
    border: 1px solid #f6e82b;
    border-radius: 27px;
  }
  .landing-img{
    padding: 20px 0px 0px;
  }
</style>
