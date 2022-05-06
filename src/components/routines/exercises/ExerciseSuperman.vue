<template>
    <v-container class="title">
      <v-card class="type-title">
        <span class="button-title text-white">
          <h1 class="button-title">SUPERMAN</h1>
        </span>
      </v-card>
    </v-container>

  <v-container class="specific-exercise">
    <v-row :justify="space-around">
      <v-col >
        <v-container  class="video-specific-exercise">
          <div class="embed-container">
            <iframe src="https://www.youtube.com/embed/z6PJMT2y8GQ" ></iframe>
          </div>
        </v-container>
      </v-col>

      <v-col class="timer" >
        <v-container  >
          <h2>{{  timerCount  }}</h2>
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
}
.video-specific-exercise{
  background:gray;
  height: 100%;
  border-radius: 1em;
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
h2{
  font-size: 200px;
  margin-left: 380px;
  color: #08CEE9;
}

</style>

