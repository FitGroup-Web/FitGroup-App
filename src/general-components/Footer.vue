<template>
    <v-footer
            class="bg-grey-darken-3 text-white text-center d-flex flex-column"
    >
        <div>
            <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 text-white"
                    :icon="icon"
                    variant="text"
            ></v-btn>
        </div>

        <div>
            <v-row class="mb-6">
                <div class="text-left">
                    <v-col cols="12">
                            <h3>FITGROUP</h3>
                            <h5>About us</h5>
                            <h5>Talk with us</h5>
                            <h5>Q & A</h5>
                            <h5>SmartFit Peru personal data policy</h5>
                            <h5>ARCO Rights Form</h5>
                    </v-col>
                </div>
                <div class="text-left">
                    <v-col >
                        <h3>PLANS</h3>
                        <h5>Know our plans</h5>
                        <h5>Documents</h5>
                    </v-col>
                </div>
            </v-row>
        </div>


        <div class="text-white">
            {{ new Date().getFullYear() }} — <strong>FitGroup</strong>
        </div>
    </v-footer>
</template>

<script>
export default {
    name: "Footer",
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>

<style scoped>

</style>