<template>
    <v-app>
      <v-content>
        <v-container fluid  fill-height pt-0 pb-0 pr-0 pl-0>
          <v-layout row>
            <v-flex hidden-sm-and-down md6 class="intro-login">
              <v-layout align-center justify-center row fill-height >
                  <v-flex xs7>
                    <h1 class="text-xs-left">Kubo S.A.S</h1>
                    <br>
                    <v-img
                      src="img/login.png"
                      aspect-ratio="2.75"
                    ></v-img>
                    <br>
                    <p class="text-xs-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora minima assumenda exercitationem repudiandae unde officia distinctio ducimus necessitatibus debitis alias esse corrupti.</p>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs8 offset-xs2 md-6 offset-md0>
              <v-layout align-center justify-center row fill-height>
                <v-flex md7>
                  <h1>Iniciar sesión</h1>
                  <br>
                  <v-form ref="form">
                    <v-text-field
                      prepend-icon="person"
                      v-model="email"
                      :rules="emailRules"
                      label="Correo electrónico"
                      placeholder="dsdsd"
                    ></v-text-field>
                    
                    <v-text-field
                      prepend-icon="lock"
                      v-model="password"
                      label="Contraseña"
                      placeholder="**********"
                      type="password"
                    ></v-text-field>
                    <v-btn large block class="btn-login" @click="submit">Ingresar</v-btn>
                  </v-form>
                </v-flex>
              </v-layout> 
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<style>

  .intro-login{
    background: linear-gradient(to right,#0097A7,#7C4DFF,#00BCD4);
    color: #fff;
  }

  .btn-login{
    background-color: #0097A7 !important;
    color: #fff !important;
  }

</style>

<script>
  import nuxtStorage from 'nuxt-storage';
  export default {
    data () { 
      return {
          email: '',
          password: '',
           emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ]
      }
    },methods:{
      submit(){
        if(this.email == 'test@kubo.co' && this.password == '123'){
          //nuxtStorage.localStorage.setData('uid', this.email,10,'h');
          const cookieLogin = { uid: this.email, isLoggedIn: true }
          this.$cookies.set('login', cookieLogin, {
            path: '/',
            maxAge: 60 * 60 * 24 * 7
          })
          this.$router.push('/home');
        }
      }
    }
  }
</script>