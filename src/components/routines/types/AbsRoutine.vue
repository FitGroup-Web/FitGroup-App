<template>
    
    <v-container class="title">
        <v-card class="type-title">
                <h1>Abdominal Routine</h1>
        </v-card>
    </v-container>
    <v-row>
        <v-col>
                <v-container class="workout">
                    <v-card class="mx-auto" max-width="400" outlined color="#272424">
                    <v-list-item three-line>
                        
                        <img class="image" src="../../../assets/routines/exercises/exercise-superman.png" alt="Exercise Superman">
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1 pa-5 text-white">
                            SUPERMAN
                            </v-list-item-title>
                            <v-list-item-subtitle class="mb-1 pa-5 text-grey">3 minutes</v-list-item-subtitle>
                        </v-list-item-content>

                    
                    </v-list-item>

                    <v-card-actions>
                    <router-link class="link" :to="{ name: 'ExerciseSuperman' }">
                    <v-btn outlined rounded text class="button">
                        START
                    </v-btn>
                    </router-link>
                    </v-card-actions>
                </v-card>
                </v-container>
        </v-col>
    </v-row>
    <v-row>
            <v-col>
                <v-container class="workout">
                    <v-card class="mx-auto" max-width="400" outlined color="#272424">
                    <v-list-item three-line>
                            <img class="image" src="../../../assets/routines/exercises/exercise-plank.png" alt="Exercise plank">
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1 pa-5 text-white">
                            PLANK
                            </v-list-item-title>
                            <v-list-item-subtitle class="mb-1 pa-5 text-grey">30 seconds</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn outlined rounded text class="button">
                            START
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>

            </v-col>
                

        </v-row>
    
    <v-container class="workout">
        
        <v-card class="mx-auto" max-width="400" outlined color="#272424">
        <v-list-item three-line>
            <img class="image" src="../../../assets/routines/exercises/exercise-crisscross.png" alt="Crisscross Exercise">
        <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1 pa-5 text-white">
            CRISS CROSS            
            </v-list-item-title>
            <v-list-item-subtitle class="mb-1 pa-5 text-grey">30 seconds</v-list-item-subtitle>
        </v-list-item-content>

        
        </v-list-item>

        <v-card-actions>
        <v-btn outlined rounded text class="button">
            START
        </v-btn>
        </v-card-actions>
    </v-card>
    </v-container>
    
</template>

<script>
export default {
  name: "AbsRoutine"
}

</script>

<style scoped>

.title{
    margin-top: 100px;
}


.type-title{
    max-width: 500px;
    background: gray;
    justify-content: center;
    padding-left: 30px;
}
.workout{
    margin-left: 0px;
}
.button {
    margin-left:250px;
    background:blue;
    color: white;
}
.image{
    max-width: 40%;
}

h1 {
    color: white;
    font-weight: bold;
}
</style>
