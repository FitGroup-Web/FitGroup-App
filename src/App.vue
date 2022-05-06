<template>
    <div class="app">
        <Navigation/>
        <v-container>

        <router-view></router-view>
        </v-container>
        <br><br><br><br>
        <Footer/>
    </div>


</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
export default {
    components: {Navigation,Footer}
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-weight: 400;

}
.app {
  min-height: 100vh;
  position: relative;
  background-color: #212121;
}
.container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
  scrollbar-width: none;
  overflow-y: scroll;
  overflow: hidden;
}

</style>
