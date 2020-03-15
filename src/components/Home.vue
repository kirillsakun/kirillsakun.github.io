<template>
  <div id="home">
    <section id="title" :style="{ backgroundImage: `url(${mainBg})` }">
      <h1>Kirill Sakun</h1>
      <p>
        Junior Frontend developer
      </p>
    </section>
    <section id="information" class="col-bor">
      <div class="column" id="about-me">
        <h4>About me</h4>
        <p>
          I'm student of BSUIR, faculty of Computer Design. I can describe myself as an attentive to
          detail (sometimes too attentive even where it is not necessary), systematic and punctual
          person, able to learn a lot in a short time. And if I do something, I do it well, and if
          not for the soul, then for show.
          <br />
        </p>
      </div>
      <div class="column" id="my-photo">
        <img src="../assets/img/me.png" alt="My photo" />
      </div>
      <div class="column" id="personal-information">
        <h4>Personal information</h4>
        <ul>
          <li v-for="item in personalInformation" :key="item.title" class="line">
            <h5>{{ item.title }}</h5>
            <p v-html="item.info"></p>
          </li>
          <li class="line">
            <h5>Social media</h5>
            <a v-for="item in socialMedia" :key="item.title" :href="item.url" target="_blank">
              <i :class="'icon ' + 'ion-logo-' + item.title.toLowerCase()"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section id="skills" :style="{ backgroundImage: `url(${skillsBg})` }">
      <h3>My skills</h3>
      <ul>
        <li class="skill" v-for="(skill, index) in mySkills" :key="skill.title">
          <h5>{{ skill.title }}</h5>
          <p>{{ skill.description }}</p>
          <i>{{ index + 1 }}</i>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import mainBg1 from '@/assets/img/pic1.jpg';
import skillsBg1 from '@/assets/img/skills-bg.jpg';

export default {
  name: 'Home',
  data() {
    return {
      mySkills: [
        {
          title: 'HTML5',
          description: `I learned the semantics of the language and
						how to use tags correctly.`,
        },
        {
          title: 'CSS3',
          description: `I studied the ways of positioning (flexbox, float)
						and styling elements, animation.
						I also learned how to make adaptive cross-browser pages.`,
        },
        {
          title: 'SASS',
          description: `This wonderful preprocessor helps me to write styles
						much easier and faster. Usually I prefer to use SCSS syntax.`,
        },
        {
          title: 'JavaScript',
          description: `I learned the basics of the language, working with objects, arrays, classes, DOM.
						Also I have some skills with jQuery, but recently I try to replace it with pure js.`,
        },
        {
          title: 'Vue.js',
          description: `It is a progressive framework for building user interfaces.
						I use it to create Single-Page Applications and reactive apps.`,
        },
        {
          title: 'Vue CLI',
          description: `Vue CLI helps me to create Vue.js applications more easily and faster.
						I usually use the webpack configuration.`,
        },
        {
          title: 'Github',
          description: `I know the basics of working with GitHub,
						understand the advantages of using it.`,
        },
        {
          title: 'Node.js',
          description: `Coming soon...`,
        },
      ],
      personalInformation: [
        {
          title: 'Fullname',
          info: 'Kirill Sakun',
        },
        {
          title: 'Phone',
          info: '<a href="tel:+375447617425">+375447617425</a>',
        },
        {
          title: 'Email',
          info: ' <a href="mailto:kirillsakun03@gmail.com"> kirillsakun03@gmail.com </a> ',
        },
        {
          title: 'Birth date',
          info: '03.04.2000',
        },
        {
          title: 'Location',
          info: 'Minsk, Belarus',
        },
      ],
      socialMedia: [
        {
          title: 'Github',
          url: 'https://github.com/kirillsakun',
        },
        {
          title: 'Vk',
          url: 'https://vk.com/kirillsakun',
        },
        {
          title: 'Instagram',
          url: 'https://www.instagram.com/tortik_s_vishney',
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/kirillsakun',
        },
      ],
      mainBg: mainBg1,
      skillsBg: skillsBg1,
    };
  },
};

window.addEventListener('scroll', function() {
  parallaxId('title', 0.3);
});

function parallaxId(el, koeficent) {
  if (!!document.getElementById(el)) {
    let scrolled = window.pageYOffset;
    document.getElementById(el).style.backgroundPosition = `center ${0 - scrolled * koeficent}px`;
  }
}
</script>

<style lang="scss" scoped>
$vue-color: #41b883;
$facebook: #3b5998;
$vk: #4d7198;
$twitter: #1da1f2;

#title {
  height: 100vh;
  width: 100%;
  position: relative;
  color: rgb(255, 255, 255);
  z-index: 2;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.425);
  }
  h1,
  p {
    z-index: 10;
    text-align: center;
  }
  h1 {
    margin-bottom: 1rem;
  }
  p {
    font-style: italic;
    letter-spacing: 0.1rem;
  }
}
section {
  z-index: 4;
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      font-size: 1.3rem;
      font-weight: 200;
      margin: 1rem;
    }
  }
}
#about-me {
  width: 40%;
}
#my-photo {
  width: 20%;
  justify-content: center;
  margin-top: 2rem;
  img {
    border-radius: 50%;
    width: 90%;
    height: auto;
  }
}
#personal-information {
  width: 30%;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .line {
    display: flex;
    width: 90%;
    margin: 0rem 0;
    h5 {
      font-size: 1rem;
      width: 6.5rem;
      line-height: 1.8rem;
    }
    p {
      margin: 0;
      padding-left: 1rem;
    }
    a {
      padding: 0 0.4rem;
      font-size: 1.2rem;
      i::before {
        transition: 0.125s;
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
$lineHeight: 2rem;
#skills {
  background-color: rgb(0, 27, 4);
  background-size: cover;
  background-position: center 0;
  background-repeat: no-repeat;
  color: white;
  padding-bottom: 0;
  h3 {
    color: rgba(255, 255, 255, 0.856);
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.skill {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 21%;
  padding-bottom: 6rem;
  &:not(:last-child):after {
    content: '';
    position: absolute;
    bottom: 3.5rem;
    left: 2rem;
    background-color: rgba(255, 255, 255, 0.5);
    height: 1rem;
    width: calc(100% - 2rem);
    clip-path: polygon(0% 0%, 97.5% 0%, 100% 50%, 97.5% 100%, 0% 100%);
  }
  &:last-child:after {
    content: '';
    position: absolute;
    bottom: 3.5rem;
    left: 2rem;
    border-radius: 0 0.1 * $lineHeight 0.1 * $lineHeight 0;
    background-color: rgba(255, 255, 255, 0.5);
    height: 1rem;
    width: calc(100% - 2rem);
  }
  h5 {
    font-size: 1.1rem;
  }
  p {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
  i {
    height: $lineHeight;
    width: $lineHeight;
    line-height: $lineHeight;
    text-align: center;
    color: rgba(0, 0, 0, 0.7);
    font-size: 0.65 * $lineHeight;
    font-weight: 700;
    font-style: normal;
    position: absolute;
    bottom: 3rem;
    left: 0;
    border-radius: 0.1 * $lineHeight;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .logos {
    display: flex;
    img {
      height: 2rem;
    }
  }
}
@media (max-aspect-ratio: 1960/1000) {
  #title {
    background-size: auto 130vh;
  }
}

@media (max-width: 1060px) {
  #title {
    width: 100%;
    padding: 0 2vw;
    margin: 0;
    font-size: 1.3rem;
  }
  #information {
    #about-me {
      width: 100%;
    }
    #my-photo {
      width: 30%;
      padding: 0;
      img {
        width: 100%;
      }
    }
    #personal-information {
      width: 70%;
    }
  }
  .skill {
    width: 48%;
  }
}

@media (max-width: 580px) {
  #information {
    .column {
      width: 100% !important;
    }
    #my-photo {
      width: 30%;
      padding: 0;
      img {
        width: 70%;
      }
    }
    #personal-information {
      ul {
        align-items: flex-start;
      }
    }
  }
  .skill {
    width: 100%;
  }
}
</style>
