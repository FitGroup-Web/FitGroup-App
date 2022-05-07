<template>
    <v-container class="home-start">
        <v-container class="information">
            <h1 class="font-weight-black">Objective</h1>
            <h2 class="font-weight-bold">What is your objective</h2>
            <p class="font-weight-thin">Please, select which one fits you better</p>
        </v-container>
        <br>

        <v-container class="objectives d-flex justify-center">
            <!-- LOSE WEIGHT  -->
            <router-link class="link-form" :to="{ name: 'PhysicalActivity' }">
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card
                            :elevation="isHovering ? 12 : 2"
                            height= "auto"
                            max-width="660px"
                            class="mx-auto"
                            v-bind="props"
                            color="#272424"

                            >
                            <v-row class="items-hover">
                            <v-col cols="4" sm="4" md="4">
                            <div class="container-image">
                            <img
                              src="../Routines/images/icons/icon-lose-weight.png"
                              class="objectives-images"
                             alt="Lose Weight Icon"/>
                            </div>
                            </v-col>

                            <v-col cols="8" sm="8" md="8">
                            <v-col>
                            <h2 class="font-weight-bold">Lose Weight</h2>
                            </v-col>
                            <v-col>
                            <h3>
                              Decrease the amount of fat on your body and keep your
                              muscle mass 🍎
                            </h3>
                            </v-col>
                            </v-col>
                            </v-row>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </router-link>
        </v-container>
        <br>
        <v-container class="objectives d-flex justify-center">
        <!-- GAIN MUSCLES -->
            <router-link class="link-form" :to="{ name: 'PhysicalActivity' }">
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card
                      :elevation="isHovering ? 12 : 2"
                      height="auto"
                      max-width="660px"
                      class="mx-auto"
                      v-bind="props"
                      color="#272424"
                    >
                      <v-row class="items-hover">
                        <v-col cols="4" sm="4" md="4">
                          <div class="container-image">
                            <img
                              src="../Routines/images/icons/icon-gain-muscles.png"
                              class="objectives-images"
                             alt="Gain Muscle Icon"/>
                          </div>
                        </v-col>

                        <v-col cols="8" sm="8" md="8">
                          <v-col>
                            <h2 class="font-weight-bold">Gain Muscles</h2>
                          </v-col>
                          <v-col>
                            <h3>
                              Increase the size of your muscles and become stronger 🏋
                            </h3>
                          </v-col>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-hover>
                </v-col>
                </v-row>
            </router-link>
        </v-container>
        <br>
        <v-container class="objectives d-flex justify-center">
        <!-- KEEP WEIGHT -->
            <router-link class="link-form" :to="{ name: 'PhysicalActivity' }">
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                        <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          height="auto"
                          max-width="660px"
                          class="mx-auto"
                          v-bind="props"
                          color="#272424"

                        >
                          <v-row class="items-hover">
                            <v-col cols="4" sm="4" md="4">
                              <div class="container-image">
                                <img
                                  src="../Routines/images/icons/icon-keep-weight.png"
                                  class="objectives-images"
                                 alt="Keep Weight Icon"/>
                              </div>
                            </v-col>

                            <v-col cols="8" sm="8" md="8">
                              <v-col>
                                <h2 class="font-weight-bold">Keep Weight</h2>
                              </v-col>
                              <v-col>
                                <h3>
                                  Continue doing regular exercise to keep your body healthy
                                  🚲
                                </h3>
                              </v-col>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-hover>
                    </v-col>
                </v-row>
            </router-link>
        </v-container>

    </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home-start {
  margin-top: 60px;
}

.link-form{
    list-style: none;
    text-decoration: none;
}

.objectives-images {
  width: 120px;
}

.items-hover {
  justify-content: center;
  text-align: left;
}

h1,
h2,
h3,
p {
color: white;
}


.container-image {
  justify-content: center;
  text-align: center;
}


</style>