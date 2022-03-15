<template>

<v-container class="py-10">

    <v-row>
      <v-col md="4">
        <div class="">
          <v-card
            class="mx-auto text-start"
            max-width="344"
          >
      <div
            class="pa-7 rounded-circle d-inline-block"
          >
        <img
          src="/images/07.png"
          class="relative"
        />
      </div>



      <v-list-item >
        <v-list-item-icon>
          <font-awesome-icon far icon="user" class="mr-5" />
        </v-list-item-icon>
        <v-list-item-title text="title" class="text-start">User Name</v-list-item-title>
      </v-list-item>

      <v-list-item >
        <v-list-item-icon>
          <font-awesome-icon far icon="user" class="mr-5" />
        </v-list-item-icon>
        <v-list-item-title text="title">User Email</v-list-item-title>
      </v-list-item>

      <v-list-item >
        <v-list-item-icon>
          <font-awesome-icon far icon="user" class="mr-5" />
        </v-list-item-icon>
        <v-list-item-title text="title">User Number Phone</v-list-item-title>
      </v-list-item>

      <v-list-item >
        <v-list-item-icon>
          <font-awesome-icon far icon="user" class="mr-5" />
        </v-list-item-icon>
        <v-list-item-title text="title">User Adress</v-list-item-title>
      </v-list-item>
<!--


      <v-card-title>
        User Email
      </v-card-title>

      <v-card-title>
        User Number Phono
      </v-card-title>

      <v-card-title>
        User Cuntery
      </v-card-title> -->


  </v-card>
        </div>
      </v-col>

      <v-divider
  vertical
></v-divider>
      <v-col md="8">
        <div>


    <v-expansion-panels
      v-model="panel"
      :disabled="disabled"
      multiple
    >
      <v-expansion-panel>
        <v-expansion-panel-header>Pesonal Information</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>About Me</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>Bank Account</v-expansion-panel-header>
        <v-expansion-panel-content>
          Some content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
      </v-col>
    </v-row>
</v-container>


</template>

<script>
export default {

}
</script>

<style>

.relative{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}
.v-card__title{
  display: inherit;
}
</style>
