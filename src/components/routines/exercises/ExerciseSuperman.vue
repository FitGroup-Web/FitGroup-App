<template>
    <v-container class="title">
        <v-card class="type-title">
            <h1>Exercise Superman 🦸🏻</h1>
        </v-card>
    </v-container>

  <v-container class="specific-exercise vertical_align_center">
    <v-row :justify="space-around" >
      <v-col cols="8">
        <v-container  class="video-specific-exercise">
          <div class="embed-container">
            <iframe src="https://www.youtube.com/embed/z6PJMT2y8GQ" ></iframe>
          </div>
        </v-container>
      </v-col>

      <v-col class="timer vertical_align_center" cols="4" ms="4" md="4">
          <v-container>
          <div class="container-image">
              <img
                      src="../../../assets/routines/icons/icon-timer.png"
                      class="objectives-images"
                      alt="Counter Timer Icon"/>
          </div>
          </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "ExerciseSuperman",

  data() {
    return {
      timerCount: 30
    }
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true
    }
  }
    }
</script>


<style scoped lang="scss">
.title{
    margin-top: 100px;
}
.button-title{
    margin-left: 300px;
    margin-bottom: 10px;
}
.specific-exercise{
    margin-top: 120px;
}
.type-title{
  max-width: 500px;
  background: gray;
  justify-content: center;
  padding-left: 30px;
}
.video-specific-exercise{
  height: 100%;
  border-radius: 1em;
  padding: 0;
  align-content: center;
}
.embed-container iframe {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
}
.embed-container {
  position: relative;
  padding-bottom: 50%;
  height: 0;
  overflow: hidden;
  margin: 1px;
}

.timer{
  justify-content: center;
}
h1{
  color: #ffffff;
  font-weight: bold;
}
h2{
  font-size: 200px;
  margin-left: 380px;
  color: #08CEE9;
}
.counter-timer{
  font-size: 100px;
}
.container-image {
  justify-content: center;
  text-align: center;
}
.objectives-images{
  max-width: 300px;
}
</style>

