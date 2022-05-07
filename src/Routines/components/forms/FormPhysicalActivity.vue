<template>
    <v-container class="home-start">
        <v-container class="information">
            <h1 class="font-weight-black">Physical Activity</h1>
            <h2 class="font-weight-bold">How is your Physical Activity</h2>
            <p class="font-weight-thin">Please, select which one fits you better</p>
        </v-container>
            <!--SEDENTARY-->
        <router-link class="link-card-activity-information" :to="{ name: 'Routines' }">
            <v-container class="objectives d-flex justify-center">
        <!-- SEDENTARY  -->
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card
                      :elevation="isHovering ? 12 : 2"
                      height= "auto"
                      max-width="600px"
                      class="mx-auto"
                      v-bind="props"
                      color="#272424"

                    >
                      <v-row class="items-hover">


                        <v-col cols="8" sm="8" md="8">
                          <v-col>
                            <h2 class="font-weight-bold">Sedentary</h2>
                          </v-col>
                          <v-col>
                            <h3>
                              None or really low exercise 🛏️
                            </h3>
                          </v-col>
                        </v-col>

                         <v-col cols="4" sm="4" md="4">
                          <div class="container-image">
                            <img
                              src="../../images/icons/icon-sedentary.png"
                              class="objectives-images"
                             alt="Sedentary Icon"/>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-hover>
                </v-col>
                </v-row>
        </v-container>
        </router-link>
            <!-- LIGHT  -->
        <router-link class="link-card-activity-information" :to="{ name: 'Routines' }">
            <v-container class="objectives d-flex justify-center">
                    <v-row>
                        <v-col cols="12" md="12" lg="12">
                            <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          height= "auto"
                          max-width="600px"
                          class="mx-auto"
                          v-bind="props"
                          color="#272424"

                        >
                          <v-row class="items-hover">


                            <v-col cols="8" sm="8" md="8">
                              <v-col>
                                <h2 class="font-weight-bold">Light</h2>
                              </v-col>
                              <v-col>
                                <h3>
                                  Exercise from 1 to 2 days per week 🚲
                                </h3>
                              </v-col>
                            </v-col>

                             <v-col cols="4" sm="4" md="4">
                              <div class="container-image">
                                <img
                                  src="../../images/icons/icon-light.png"
                                  class="objectives-images"
                                 alt="Light Icon"/>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-hover>
                        </v-col>
                    </v-row>
            </v-container>
        </router-link>
            <!-- MEDIUM  -->
        <router-link class="link-card-activity-information" :to="{ name: 'Routines' }">
            <v-container class="objectives d-flex justify-center">
                    <v-row>
                        <v-col cols="12" md="12" lg="12">
                      <v-hover v-slot="{ isHovering, props }">
                        <v-card
                          :elevation="isHovering ? 12 : 2"
                          height= "auto"
                          max-width="600px"
                          class="mx-auto"
                          v-bind="props"
                          color="#272424"

                        >
                          <v-row class="items-hover">


                            <v-col cols="8" sm="8" md="8">
                              <v-col>
                                <h2 class="font-weight-bold">Medium</h2>
                              </v-col>
                              <v-col>
                                <h3>
                                  Exercise from 3 to 4 days per week 🎾
                                </h3>
                              </v-col>
                            </v-col>

                             <v-col cols="4" sm="4" md="4">
                              <div class="container-image">
                                <img
                                  src="../../images/icons/icon-medium.png"
                                  class="objectives-images"
                                 alt="Medium Activity Icon"/>
                              </div>
                            </v-col>
                          </v-row>
                        </v-card>
                      </v-hover>
                    </v-col>
                    </v-row>
            </v-container>
        </router-link>
            <!-- HIGH  -->
        <router-link class="link-card-activity-information" :to="{ name: 'Routines' }">
            <v-container class="objectives d-flex justify-center">
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card
                      :elevation="isHovering ? 12 : 2"
                      height= "auto"
                      max-width="600px"
                      class="mx-auto"
                      v-bind="props"
                      color="#272424"
                    >
                      <v-row class="items-hover">


                        <v-col cols="8" sm="8" md="8">
                          <v-col>
                            <h2 class="font-weight-bold">High</h2>
                          </v-col>
                          <v-col>
                            <h3>
                              Exercise from 5 to 6 days per week 🏋️
                            </h3>
                          </v-col>
                        </v-col>

                         <v-col cols="4" sm="4" md="4">
                          <div class="container-image">
                            <img
                              src="../../images/icons/icon-high.png"
                              class="objectives-images"
                             alt="High Activity Icon"/>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-hover>
                </v-col>
                </v-row>
            </v-container>
        </router-link>
            <!-- ATHLETE  -->
        <router-link class="link-card-activity-information" :to="{ name: 'Routines' }">
            <v-container class="objectives d-flex justify-center">
                <v-row>
                    <v-col cols="12" md="12" lg="12">
                  <v-hover v-slot="{ isHovering, props }">
                    <v-card
                      :elevation="isHovering ? 12 : 2"
                      height= "auto"
                      max-width="600px"
                      class="mx-auto"
                      v-bind="props"
                      color="#272424"

                    >
                      <v-row class="items-hover">


                        <v-col cols="8" sm="8" md="8">
                          <v-col>
                            <h2 class="font-weight-bold">Athlete</h2>
                          </v-col>
                          <v-col>
                            <h3>
                              Exercise from 5 to 6 days per week 🏇️
                            </h3>
                          </v-col>
                        </v-col>

                         <v-col cols="4" sm="4" md="4">
                          <div class="container-image">
                            <img
                              src="../../images/icons/icon-athlete.png"
                              class="objectives-images"
                             alt="Athlete Activity Icon"/>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-hover>
                </v-col>
                </v-row>
            </v-container>
        </router-link>
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


.objectives-images {
  width: 120px;
}

.items-hover {
  justify-content: center;
  text-align: left;
}
.link-card-activity-information{
    list-style: none;
    text-decoration: none;
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