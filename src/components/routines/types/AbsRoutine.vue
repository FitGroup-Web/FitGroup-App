<template>
    
    <v-container class="title">
                    <v-card class="type-title">                            
                        <span class="button-title text-white">
                            <h1 class="button-title">Abs Routines</h1>  
                        </span>     
                    </v-card>
    </v-container>
    <v-row>
        <v-col>
                <v-container class="workout">
                    <v-card class="mx-auto" max-width="344" outlined color="#272424"> 
                    <v-list-item three-line>
                        
                    <img class="image" src="../../../assets/routines/exercise-superman.png">
                    <v-list-item-content>
                        <v-list-item-title class="text-h5 mb-1 pa-5 text-white">
                        SUPERMAN
                        </v-list-item-title>
                        <v-list-item-subtitle class="mb-1 pa-5 text-grey">3 minutos</v-list-item-subtitle>
                    </v-list-item-content>

                    
                    </v-list-item>

                    <v-card-actions>
                    <router-link class="link" :to="{ name: 'ExerciseSuperman' }">
                    <v-btn outlined rounded text class="button">
                        INICIAR
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
                    <v-card class="mx-auto" max-width="344" outlined color="#272424">
                    <v-list-item three-line>
                            <img class="image" src="../../../assets/routines/exercise-plank.png">
                        <v-list-item-content>
                            <v-list-item-title class="text-h5 mb-1 pa-5 text-white">
                            PLANK
                            </v-list-item-title>
                            <v-list-item-subtitle class="mb-1 pa-5 text-grey">30 segundos</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>

                        <v-card-actions>
                            <v-btn outlined rounded text class="button">
                            INICIAR
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>

            </v-col>
                

        </v-row>
    
    <v-container class="workout">
        
        <v-card class="mx-auto" max-width="344" outlined color="#272424">
        <v-list-item three-line>
            <img class="image" src="../../../assets/routines/exercise-crisscross.png">
        <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1 pa-5 text-white">
            CRISS CROSS            
            </v-list-item-title>
            <v-list-item-subtitle class="mb-1 pa-5 text-grey">30 segundos</v-list-item-subtitle>
        </v-list-item-content>

        
        </v-list-item>

        <v-card-actions>
        <v-btn outlined rounded text class="button">
            INICIAR
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
.button-title{
    margin-left: 300px;
    margin-bottom: 10px;
}
.routines-available{
    margin-top: 120px;
}
.type-title{
    max-width: 500px;
    background: gray;

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

</style>
