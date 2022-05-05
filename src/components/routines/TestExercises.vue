<template>
    <v-app id="text-exercises">
        <v-content>
            <br><br><br>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col>
                        <v-card class="elevation-12 rounded-xl">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <div class="embed-container">
                                                <iframe src="https://www.youtube.com/embed/AsxalxAnFPM" allowfullscreen></iframe>
                                            </div>
                                        </v-col>
                                        <v-col id="passer" cols="12" md="4" class="teal accent-3">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Good job!</h1>
                                                <br>
                                                <h3 class="text-center">Please indicate how difficult it was for you.</h3>
                                                <br>
                                                <div class="punctuation-difficulty d-flex flex-column align-center justify-center">
                                                    <v-rating
                                                            class="rating-difficulty"
                                                            v-model="rating"
                                                            :item-labels="['very easy', '', '', '', 'very difficult']"
                                                            item-label-position="top"
                                                            empty-icon="mdi-circle-outline"
                                                            full-icon="mdi-circle"
                                                            half-icon="mdi-circle-half"
                                                            half-increments
                                                            hover
                                                            density="compact"
                                                    ></v-rating>
                                                </div>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded color=#00EBEE outlined="" dark @click="step++">NEXT</v-btn>
                                            </div>
                                            <br><br>

                                        </v-col>
                                    </v-row>
                                </v-window-item>

                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col id="passer" cols="12" md="4" class="teal accent-3">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Keep it up!</h1>
                                                <br>
                                                <h3 class="text-center">Please indicate how difficult it was for you.</h3>
                                                <br>
                                                <div class="punctuation-difficulty d-flex flex-column align-center justify-center">
                                                    <v-rating
                                                            class="rating-difficulty"
                                                            v-model="rating"
                                                            :item-labels="['very easy', '', '', '', 'very difficult']"
                                                            item-label-position="top"
                                                            empty-icon="mdi-circle-outline"
                                                            full-icon="mdi-circle"
                                                            half-icon="mdi-circle-half"
                                                            half-increments
                                                            hover
                                                            density="compact"
                                                    ></v-rating>
                                                </div>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded color=#00EBEE outlined="" dark @click="step++">NEXT</v-btn>
                                            </div>
                                            <br><br>

                                        </v-col>

                                        <v-col cols="12" md="8">
                                            <div class="embed-container">
                                                <iframe src="https://www.youtube.com/embed/cwaBAxnPeCs" allowfullscreen></iframe>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                                <v-window-item :value="3">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <div class="embed-container">
                                                <iframe src="https://www.youtube.com/embed/AW9iGsRtnVs" allowfullscreen></iframe>
                                            </div>
                                        </v-col>
                                        <v-col id="passer" cols="12" md="4" class="teal accent-3">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">We're almost done!</h1>
                                                <br>
                                                <h3 class="text-center">Please indicate how difficult it was for you.</h3>
                                                <br>
                                                <div class="punctuation-difficulty d-flex flex-column align-center justify-center">
                                                    <v-rating
                                                            class="rating-difficulty"
                                                            v-model="rating"
                                                            :item-labels="['very easy', '', '', '', 'very difficult']"
                                                            item-label-position="top"
                                                            empty-icon="mdi-circle-outline"
                                                            full-icon="mdi-circle"
                                                            half-icon="mdi-circle-half"
                                                            half-increments
                                                            hover
                                                            density="compact"
                                                    ></v-rating>
                                                </div>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded color=#00EBEE outlined="" dark @click="step++">
                                                    <router-link class="link" :to="{ name: 'AbsRoutine' }">NEXT</router-link>
                                                </v-btn>
                                            </div>
                                            <br><br>

                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <br><br><br><br>
    </v-app>
</template>

<script>
export default {
    name: "TestExercises",
    data:()=>({
        step:1,
        rating: 2.5,
    }),
    props:{
        source:String
    },
}
</script>

<style scoped>
#text-exercises{
    margin-top: 80px;
    background-color: #272424;
}

#passer{
    background-color: #005AEE;
}
.mt-12{
    color: black;
}

.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin: 30px;
}
.embed-container iframe {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
}


</style>