<template>
  <v-container class="home-start">
    <v-container class="information">
      <h1 class="font-weight-black">Phisical Activity</h1>
      <h2 class="font-weight-bold">How is yout Phisical Activity</h2>
      <p class="font-weight-thin">Please, select wich one fits you better</p>
    </v-container>

    <v-container class="objectives d-flex">
      <v-row>

        <!-- SEDENTARY  -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height= "auto"
              max-width="auto"
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
                      src="../assets/PhisicalActivity/sedentary.png"
                      class="objectives-images"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>



<!-- LIGHT  -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height= "auto"
              max-width="auto"
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
                      src="../assets/PhisicalActivity/light.png"
                      class="objectives-images"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>




<!-- MEDIUM  -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height= "auto"
              max-width="auto"
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
                      src="../assets/PhisicalActivity/medium.png"
                      class="objectives-images"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>




<!-- Hight  -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height= "auto"
              max-width="auto"
              class="mx-auto"
              v-bind="props"
              color="#272424"
              
            >
              <v-row class="items-hover">
           

                <v-col cols="8" sm="8" md="8">
                  <v-col>
                    <h2 class="font-weight-bold">Hight</h2>
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
                      src="../assets/PhisicalActivity/hight.png"
                      class="objectives-images"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>




<!-- ATHLETE  -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height= "auto"
              max-width="auto"
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
                      src="../assets/PhisicalActivity/athlete.png"
                      class="objectives-images"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-hover>
        </v-col>






      </v-row>
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

.man-box {
  position: absolute;
  width: 915px;
  height: 260px;

  background: #212121;
  mix-blend-mode: lighten;
  border-radius: 73px;
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