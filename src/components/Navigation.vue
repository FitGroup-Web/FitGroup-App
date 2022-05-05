<template>
    <header :class="{'scrolled-nav': scrollNav}">
        <nav>
            <div class="branding">
                <img src="@/assets/logo.png" alt="Fit Group Logo" />
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link></li>
                <li><router-link class="link" :to="{ name: 'Routines' }">Routines</router-link></li>
                <li><router-link class="link" :to="{ name: 'Nutrition' }">Nutrition</router-link></li>
            </ul>
            <div class="icon">
                <i @click="toogleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{ name: 'Home' }">Home</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Routines' }">Routines</router-link></li>
                    <li><router-link class="link" :to="{ name: 'Nutrition' }">Nutrition</router-link></li>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default {
  name: "Navigation",
    data(){
      return {
          scrollNav:null,
          mobile:null,
          mobileNav:null,
          windowWidth: null
      }
    },
    created() {
      window.addEventListener("resize",this.checkScreen);
      this.checkScreen();
    },
    methods:{
      toogleMobileNav(){
          this.mobileNav=!this.mobileNav;
      },
        updateScroll(){
          const scrollPosition=window.scrollY;
          if(scrollPosition>50)
          {
              this.scrollNav=true;
              return;
          }
          this.scrollNav=false;
        },

      checkScreen(){
          this.windowWidth= window.innerWidth;
          if (this.windowWidth<=750){
              this.mobile=true;
              return;
          }
          this.mobile=false;
          this.mobileNav=false;
          return;
      }
    }
}
</script>

<style scoped>
header{
    background-color: #272424;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: white;

}

header nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;

}

@media (min-width: 1140px){
    nav  {
        max-width: 1140px;
    }
}

header nav ul, .link{
    font-weight: 500;
    color: #ffffff;
    list-style: none;
    text-decoration: none;
}
header nav .link{
    font-weight: 500;
    color: #ffffff;
    list-style: none;
    text-decoration: none;
}

header nav li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
}
header nav .link{
    font-size: 15px;
    font-weight: bold;
}
header nav .link:hover{
    color: #08CEE9;
    border-color: #08CEE9;
    font-size: 16px;
}

header nav .branding{
    display: flex;
    align-items: center;
}
header nav .branding img{
    width: 90px;
    transition: 0.5s ease all;
}
header nav .navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}
header nav .icon{
    display: flex;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}
header nav .icon i{
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
}

header nav .icon-active{
    transform: rotate(180deg);
}

header nav .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #08CEE9;
    top: 0;
    left: 0;
}
header nav .dropdown-nav li{
    margin-left: 0;
}
header nav .dropdown-nav li .link{
    color: black;
}
header nav .mobile-nav-enter-active, .mobile-nav-leave-active{
    transition: 1s ease all;
}

header nav .mobile-nav-enter-from, .mobile-nav-leave-active{
    transform: translateX(-250px);
}
header nav .mobile-nav-enter-to{
    transform: translateX(0);
}
</style>
