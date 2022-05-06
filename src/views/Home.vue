<template>
  <v-container class="home-start">
    <v-container class="information">
      <h1 class="font-weight-black">Objective</h1>
      <h2 class="font-weight-bold">What is your objective</h2>
      <p class="font-weight-thin">Please, select wich one fits you better</p>
    </v-container>

    <v-container class="objectives d-flex">
      <v-row>

        <!-- LOSE WEIGHT  -->
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
                <v-col cols="4" sm="4" md="4">
                  <div class="container-image">
                    <img
                      src="../assets/lose-weight.png"
                      class="objectives-images"
                    />
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

        <!-- GAIN MUSCLES -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height="auto"
              max-width="auto"
              class="mx-auto"
              v-bind="props"
              color="#272424"
            >
              <v-row class="items-hover">
                <v-col cols="4" sm="4" md="4">
                  <div class="container-image">
                    <img
                      src="../assets/GainMuscles.png"
                      class="objectives-images"
                    />
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


        <!-- KEEP WEIGHT -->
        <v-col cols="12" md="12" lg="12">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              height="auto"
              max-width="auto"
              class="mx-auto"
              v-bind="props"
              color="#272424"
              
            >
              <v-row class="items-hover">
                <v-col cols="4" sm="4" md="4">
                  <div class="container-image">
                    <img
                      src="../assets/KeepWeight.png"
                      class="objectives-images"
                    />
                  </div>
                </v-col>

                <v-col cols="8" sm="8" md="8">
                  <v-col>
                    <h2 class="font-weight-bold">Lose Weight</h2>
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