<template>
    <v-container class="routines-available">
        <v-row :justify="space-around">
            <v-col class="mx-auto">
                <v-container >
                    <v-card class="card type-routine">
                        <v-img
                                class="align-end text-white"
                                src="https://www.beingtheparent.com/wp-content/uploads/2021/05/teen-doing-V-sit-stretch.jpg"
                                cover
                        >
                            <v-card-actions>
                                <v-btn class="button start-routine" variant="text">
                                    <router-link class="link" :to="{ name: 'TestExercise' }">ABS ROUTINE</router-link>
                                </v-btn>
                            </v-card-actions>
                        </v-img>
                    </v-card>
                </v-container>
            </v-col>
            <v-col class="mx-auto">
                <v-container>
                    <v-card class="card type-routine">
                        <v-img
                                class="align-end text-white"
                                src="https://lacasadeporte.com/wp-content/uploads/2021/06/Sin-sobre-esfuerzo-calistenia.png"
                                cover
                        >

                            <v-card-actions>
                                <v-btn class="button start-routine" variant="text">
                                    ARMS ROUTINE
                                </v-btn>
                            </v-card-actions>
                        </v-img>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
        <v-row :justify="space-around">
            <v-col class="mx-auto">
                <v-container>
                    <v-card class="card type-routine">
                        <v-img
                                class="align-end text-white"
                                src="https://andreajdl.files.wordpress.com/2020/06/plank-main.jpg"
                                cover
                        >

                            <v-card-actions>
                                <v-btn class="button start-routine" variant="text">
                                    FULL BODY ROUTINE
                                </v-btn>
                            </v-card-actions>
                        </v-img>
                    </v-card>
                </v-container>
            </v-col>
            <v-col class="mx-auto">
                <v-container>
                    <v-card class="card type-routine">
                        <v-img
                                class="align-end text-white"
                                src="https://www.beingtheparent.com/wp-content/uploads/2021/05/teen-doing-V-sit-stretch.jpg"
                                cover
                        >

                            <v-card-actions>
                                <v-btn class="button start-routine" variant="text">
                                    LEGS ROUTINE
                                </v-btn>
                            </v-card-actions>
                        </v-img>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
  name: "Routines"
}
</script>

<style scoped>
.routines-available{
    margin-top: 120px;
}
.card type-routine{
    max-width: 550px;
}
.mx-auto{
    max-width: 550px;
    min-width: 350px;
    border-radius: 30px;
}

.mx-auto v-container{
    border-radius: 50px;
}
.mx-auto .type-routine{
    border-radius: 50px;
    max-height: 260px;

}
.mx-auto .type-routine .align-end.text-white{
    border-radius: 50px;
    max-height: 260px;
    opacity: 0.9;
    --v-border-opacity: v-bind();

}
.mx-auto .type-routine .button.start-routine{
    margin-left: 25px;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 36px;
    color: black;
}
</style>