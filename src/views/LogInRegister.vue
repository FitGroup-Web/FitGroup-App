<template >

  <v-app id="inspire">
    <v-content>
      <br><br><br>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Sign In to FitGroup</h1>
                        <div class="text-center mt-4">
                          <v-btn
                              class="mx-2"
                              color="blue"
                              icon="mdi-facebook"
                          ></v-btn>
                          <v-btn
                              class="mx-2"
                              color="amber"
                              icon="mdi-instagram"
                          ></v-btn>
                          <v-btn
                              class="mx-2"
                              color="red"
                              icon="mdi-google"
                          ></v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <br>
                        <v-form>
                          <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              type="email"
                              label="Email"
                              placeholder="Email"
                              prepend-icon="mdi-email"
                              required
                          ></v-text-field>
                          <v-text-field
                              v-model="password"
                              :rules="passwordRules"
                              :type="passwordShow?'text':'password'"

                              label="Password"
                              placeholder="Password"
                              prepend-icon="mdi-key"
                              :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                              @click:append="passwordShow = !passwordShow"
                              required
                          ></v-text-field>
                        </v-form>
                        <h3 class="text-center mt-3">Forget your password?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <router-link class="link" :to="{ name: 'Routine' }">
                        <v-btn rounded color=#00EBEE  dark>SIGN IN</v-btn>
                        </router-link>
                      </div>
                      <br>
                    </v-col>
                    <v-col id="passer" cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, Friends!</h1>
                        <h5 class="text-center">Enter your personal information and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded color=#00EBEE outlined="" dark @click="step++">SIGN UP</v-btn>
                      </div>

                    </v-col>
                  </v-row>
                </v-window-item>

                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col id="passer" cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                            class="text-center"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded color=#00EBEE outlined dark @click="step--">SIGN IN</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn
                              class="mx-2"
                              color="blue"
                              icon="mdi-facebook"
                          ></v-btn>
                          <v-btn
                              class="mx-2"
                              color="amber"
                              icon="mdi-instagram"
                          ></v-btn>
                          <v-btn
                              class="mx-2"
                              color="red"
                              icon="mdi-google"
                          ></v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <br>
                        <v-form>
                          <v-text-field
                              label="Name"
                              name="Name"
                              prepend-icon="mdi-user"
                              type="text"
                              color="teal accent-3"
                          />
                          <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              type="email"
                              label="Email"
                              placeholder="Email"
                              prepend-icon="mdi-email"
                              required
                          ></v-text-field>
                          <v-text-field
                              v-model="password"
                              :rules="passwordRules"
                              :type="passwordShow?'text':'password'"

                              label="Password"
                              placeholder="Password"
                              prepend-icon="mdi-key"
                              :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                              @click:append="passwordShow = !passwordShow"
                              required
                          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color=#00EBEE dark @click="step++">SIGN UP</v-btn>
                      </div>
                      <br>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="3">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text id="infobodycard" class="mt-12">
                        <h1 class="text-sm-left display-2 teal--text text--accent-3" >Before continuing...</h1>
                        <h4 class="text-left mt-4">Enter your personal information</h4>
                        <br>
                        <v-form>
                          <v-row no-gutters>
                          <v-col cols="12" sm="6" md="8">
                            <v-text-field
                                v-model="numberWeight"
                                label="Weight"
                                hide-details
                                type="number"></v-text-field>
                          </v-col>
                          <v-col cols="6" md="4">
                            <v-select
                                v-model="selectWeight"
                                :items="itemsWeight"
                                :rules="[v => !!v || 'Item is required']"
                                label="Unit"
                            ></v-select>
                          </v-col>

                          <br>
                            <v-col cols="12" sm="6" md="8">
                              <v-text-field
                                  v-model="numberHeight"
                                  label="Height"
                                  hide-details
                                  type="number"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="6" md="4">
                              <v-select
                                  v-model="selectHeight"
                                  :items="itemsHeight"
                                  :rules="[v => !!v || 'Item is required']"
                                  label="Unit"
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-form>

                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color=#00EBEE  dark>LET'S DO IT</v-btn>
                      </div>
                      <br>
                    </v-col>
                    <v-col id="" cols="12" md="4" class="teal accent-3" >
                      <v-card-text class="white--text mt-12" >
                        <v-img  src="../src/assets/trainer.png"
                        class="d-flex justify-center mb-6"></v-img>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "LogInRegister",
  data:()=>({
    step:1,
    passwordShow:false,
    email: '',
    password: '',
    numberWeight:0,
    numberHeight:0,
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'Email must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 digits',
    ],
    selectWeight: null,
    selectHeight: null,
    itemsWeight:[
      'kilograms',
      'pounds',
      'stones'
    ],
    itemsHeight:[
      'meters',
      'feet',
    ],
  }),
  props:{
    source:String
  },

}
</script>

<style scoped>
#inspire{
  background-color: dimgray;
}
#infobodycard{
  padding: 5em;
}
#passer{
  background-color: #005AEE;
}
.mt-12{
  color: black;
}
.link {
  text-decoration: none;
}
v-img{
  height: auto;
}
</style>