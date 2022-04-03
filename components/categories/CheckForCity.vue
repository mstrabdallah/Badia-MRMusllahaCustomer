<template>
  <v-container>
    <v-row class="row landing">
        <div class="col-12 col-lg-6">
            <div class="row pt-16 mt-16">

                <div class="col-12 text-center py-2">
                    <h2 class="mesalah-h">{{$t('mrmusllaha')}}</h2>
                </div>

                <div class="col-12 text-center">
                    <h2>{{$t('Please Choice Your City From Above')}} </h2>
                    <h2>{{$t('To Show The Service')}} </h2>
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

<style >

.mesalah-h{
  color: #30c88d;
}
 p{
    font-size: 20px;
  }
  .landing{
    border: 1px solid #30c88d;
    border-radius: 27px;
  }
  .landing-img{
    padding: 20px 0px 0px;
  }

</style>
