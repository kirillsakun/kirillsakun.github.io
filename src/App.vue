<template>
  <div id="sheet">
    <header>
      <router-link to="/" id="logo">
        <a @click="menuShow = false">skA</a>
      </router-link>
      <button class="icon ion-md-menu" id="show-menu-icon" @click="menuShow = true"></button>
      <transition name="slide">
        <nav id="menu" v-show="menuShow" @click="menuShow = false">
          <router-link v-for="link in mainMenuLinks" :key="link.title" :to="`${link.url}`">
            <h2>{{link.title}}</h2>
          </router-link>
          <button class="icon ion-md-close" id="close-menu-icon" @click="menuShow = false"></button>
        </nav>
      </transition>
    </header>
    <transition name="slide-page">
      <router-view></router-view>
    </transition>
    <footer>
      <div class="social-media">
        <h4>Contact me</h4>
        <div class="icons">
          <a v-for="item in socialMedia" :href="item.url" :key="item.title" target="_blank">
            <i :class="'icon ' + 'ion-logo-' + item.title.toLowerCase()"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>



<script>

export default {
  name: "App",
  data() {
    return {
      menuShow: false,
      mainMenuLinks: [
        { title: "Home", url: "/" },
        { title: "Templates", url: "/templates" },
        { title: "Test tasks", url: "/testtasks" }
      ],
      socialMedia: [
        {
          title: "Github",
          url: "https://github.com/kirillsakun"
        },
        {
          title: "Facebook",
          url: "https://www.facebook.com/profile.php?id=100010532382767"
        },
        {
          title: "Vk",
          url: "https://vk.com/kirill_sakun"
        },
        {
          title: "Instagram",
          url: "https://www.instagram.com/tortik_s_vishney"
        },
        {
         title: "Twitter",
         url: "https://twitter.com/tortiksvishney"
        }
      ]
    };
  }
};

window.addEventListener("scroll", function() {
  headerOpacity();
});

function headerOpacity() {
  let scrolled = window.pageYOffset;
  if (scrolled > 100) {
    document.getElementsByTagName('header')[0].style.opacity = 1.0 - scrolled * 0.0033;
  } else {
    document.getElementsByTagName('header')[0].style.opacity = 1.0;
  }
}
</script>

<style lang="scss">

@import url("https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400,600&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap");

$primary-font: "Raleway", sans-serif;
$secondary-font: "Montserrat", sans-serif;
$primary-color: rgb(255, 255, 255);
$text-color: rgb(26, 26, 26);
$default-border: 1px rgb(0, 0, 0) solid;
$header-height: 5rem;
$vue-color: #41b883;
$facebook: #3b5998;
$vk: #4d7198;
$twitter: #1da1f2;

body,
html {
  scroll-behavior: smooth;
  font-family: $secondary-font;
  font-weight: 300;
  color: $text-color;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: $primary-color;
  box-sizing: border-box;
  overflow-x: hidden;
  scrollbar-width: none;
  cursor: default;
}
::-webkit-scrollbar {
  display: none;
}
*,
*::after,
*::before {
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $primary-font;
}

p {
  font-family: $secondary-font;
  margin: 0 0;
  line-height: 1.8rem;
	text-align: justify;
  width: 100%;
  cursor: default;
}

h3{
	font-size: 2.3rem;
	font-weight: 600;
}
input{
  cursor: pointer;
}
button{
	background: none;
	border: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: $text-color;
  cursor: pointer;
}
.col-bor {
  border-bottom: 2px solid red;
  border-top: 2px solid red;
  border-image: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
  border-image-slice: 1;
}
#sheet {
  display: flex;
  flex-direction: column;
}
.section-title {
  width: 100%;
  font-size: 2rem;
  text-align: center;
  font-weight: 300;
  margin: 0;
}
.underheader-mg{
  margin-top: $header-height;
}
.parenthesis{
  flex-direction: column;
  //padding-bottom: 0;
  h1,h2{
    margin-bottom: 2rem;
  }
  p{
    text-align: left;
    width: 50%;
  }
}
header {  
  position: fixed;
  top: 0;
  width: 100%;
  height: $header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $primary-color;
  z-index: 100;
  transition: 0.2s;
  border-top: (0.03 * $header-height) solid red;
  border-bottom: 1px solid red;
  border-image: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
  border-image-slice: 1;

  &:hover {
    opacity: 1 !important;
  }
  #logo {
    font-size: 3rem;
    padding: 0 3rem;
  }
  button {
    font-size: 1.4rem;
    color: $text-color;
    margin: 1rem;
    padding: -1rem;
    background: none;
    border: none;
  }
  #show-menu-icon {
    position: absolute;
    top: 0.5rem;
    right: 0rem;
    z-index: 1;
  }
  nav {
    z-index: 5;
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: $primary-color;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0.9 * $header-height;
      transition: 0.3s;
      $pseudo-mg: 0.2rem;
      h2 {
        font-size: 1.3rem;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.1rem;
        transition: transform 0.35s;
        transform: scaleX(0);
        background: #93291e; /* fallback for old browsers */
        background: linear-gradient(
          to right,
          #ed213a,
          #93291e,
          #ed213a
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        z-index: 10;
      }
      &::before {
        transform-origin: right;
        top: $pseudo-mg;
        left: 0;
      }
      &::after {
        transform-origin: left;
        bottom: $pseudo-mg;
        left: 0;
      }
      &:hover::before,
      &:hover:after {
        transform: scaleX(1);
      }
      &:hover::before {
        transform-origin: left;
      }
      &:hover::after {
        transform-origin: right;
      }

      &:hover h2 {
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.267);
      }
      h2 {
        display: block;
        transition: 0.3s;
        padding: 0 3rem;
        margin: 0;
        font-weight: 300;
      }
    }
  }
}
section {
  width: 100%;
  padding: 3rem 2%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
footer {
  padding: 0 2%;
  z-index: 10;
  width: 100%;
	margin-top: 0 !important;
  height: $header-height;
  border-top: 1px solid red;
  border-bottom: (0.03 * $header-height) solid red;
  border-image: linear-gradient(to left, #40e0d0, #ff8c00, #ff0080);
  border-image-slice: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary-color;
  .social-media {
    min-width: 30%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      font-size: 1.3rem;
      font-weight: 300;
      letter-spacing: 0.4rem;
    }
    .icons {
      display: flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;

      a {
        padding: -1rem;
        i::before {
          font-size: 1.6rem;
          transition: 0.3s;
        }
        i:hover::before {
          transform: scale(1.3);
        }
        i:hover.ion-logo-facebook::before {
          color: $facebook;
        }
        i:hover.ion-logo-vk::before {
          color: $vk;
        }
        i:hover.ion-logo-twitter::before {
          color: $twitter;
        }
        i:hover.ion-logo-instagram::before {
          background: #d6249f;
          background: radial-gradient(
            circle at 30% 107%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 60%,
            #285aeb 90%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease-out;
}
.slide-enter-to,
.slide-leave {
  top: 0;
  right: 0;
}
.slide-leave-to,
.slide-enter {
  top: 0;
  right: -70%;
}

.slide-page-enter-active,
.slide-page-leave-active {
  transition: 0.7s ease-in-out;
  position: fixed;
  // top: 0;
  // left: 0;
}

.slide-page-enter {
  //left: 100%;
  opacity: 0;
}
.slide-page-enter-to {
  //left: 0;
  opacity: 1;
}
.slide-page-leave {
  //left: 0;
  opacity: 1;
}
.slide-page-leave-to {
  //left: -100%;
  opacity: 0;
}


@media (max-width: 1060px) {
  header {
    opacity: 1 !important;
    nav {
      justify-content: flex-start;
      flex-direction: column;
      width: 100vw;
      height: unset;
      position: fixed;
      padding-top: 1rem;
      top: 0;
      right: 0;
      a {
        width: 70%;
        border: none;
        &:last-of-type {
          margin-bottom: 1rem;
        }
      }
    }
    #close-menu-icon {
      position: absolute;
      top: 0;
      right: 0;
    }
    .slide-leave-to,
    .slide-enter {
      top: 0;
      right: -100%;
    }
  }
  .parenthesis{
    p{
      text-align: left;
      width: 80%;
    }
  }
}
@media (max-width: 580px){
  .parenthesis{
    p{
      text-align: left;
      width: 100%;
    }
  }
}
</style>


