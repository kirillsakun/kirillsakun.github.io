<template>
  <div id="templates" class="underheader-mg">
    <section id="cards">
      <h3 class="section-title">Cards</h3>
      <div class="card card-0">
        <div class="background"></div>
        <div class="description">
          <h4>Friends</h4>
        </div>
      </div>
      <div class="card card-1">
        <div class="background"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consectetur accumsan rutrum. Vivamus et tellus.</p>
        <h4>Atmosphere</h4>
      </div>
      <div class="card card-2">
        <div class="background"></div>
        <h4>Gatherings</h4>
      </div>
      <div class="card card-3">
        <div class="background"></div>
        <h4>Traveling</h4>
      </div>
    </section>

    </div>
</template>

<script>
export default {
  name: "Templates",

};
</script>

<style lang="scss" scoped>
$primary-font: "Raleway", sans-serif;
$secondary-font: "Montserrat", sans-serif;
$b-r: 2vh;


#cards {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;

  .card {
    height: 30vh;
    width: 44vh;
    margin: 2vh;
    //border: 1px solid;
    border-radius: $b-r;
    * {
      transition: 0.5s;
    }
    h4 {
      font-weight: 300;
      font-size: 1.4rem;
      font-family: $primary-font;
      letter-spacing: 0.3rem;
    }
    .background {
      border-radius: $b-r;
      width: 100%;
      height: 100%;
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .card-0 {
    .background {
      background-image: url("https://pp.userapi.com/c7003/v7003319/40d24/ALeYXnWlbmw.jpg");
      background-size: auto 100%;
      background-repeat: no-repeat;
      width: calc(100% - 9.3rem);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      filter: brightness(70%);
    }
    .description {
      border-radius: $b-r;
      text-align: right;
      padding: 1rem;
      color: rgb(236, 236, 236);
      background: #606c88; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #3f4c6b,
        #606c88
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #3f4c6b,
        #606c88
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 4;
    }
    &:hover {
      .background {
        filter: brightness(100%);
        width: 100%;
      }
    }
  }
  .card-1 {
    .background {
      background-image: url("https://pp.userapi.com/c639318/v639318413/52053/N0RZqVbezwg.jpg");
    }
    p {
      position: absolute;
      bottom: 0%;
      left: 10%;
      padding: 0;
      margin: 0;
      width: 80%;
      text-align: center;
      color: #fff;
      opacity: 0;
    }
    h4 {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: #fff;
    }
    &:hover {
      p {
        opacity: 1;
        bottom: calc(50% - 1rem);
        transform: translateY(50%);
      }
      .background {
        filter: brightness(60%);
      }
      h4 {
        bottom: calc(50% + 2.4rem);
        right: 50%;
        transform: translateX(50%);
        font-weight: 500;
        text-decoration: underline;
      }
    }
  }
  .card-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    .background {
      background-image: url("https://pp.userapi.com/c639523/v639523440/4424f/vM-nfnSmp5U.jpg");
      background-size: 100% auto;
    }
    h4 {
      position: absolute;
      top: calc(50% - 0.7rem);
      left: 50%;
      color: white;
      transform: translateX(-50%);
      opacity: 0;
      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 0.7rem;
        width: 0.7rem;
        transition: 0.15s ease-in;
        opacity: 0;
      }
      &::before {
        bottom: -0.4rem;
        left: -0.9rem;
        border-bottom: 2px solid #fff;
        border-left: 2px solid #fff;
      }
      &::after {
        top: -0.4rem;
        right: -0.9rem;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
      }
    }
    &:hover {
      .background {
        background-size: 120% auto;
        filter: brightness(60%);
      }
      h4 {
        opacity: 1;
        &::before,
        &::after {
          transition-delay: 0.7s;
          opacity: 1;
        }
      }
    }
  }
  .card-3 {
    .background {
      background-size: auto 100%;
      transition: 1s;
      background-image: url("https://pp.userapi.com/c626616/v626616430/3cc7b/tFsEkPAabU0.jpg");
    }
    h4 {
      border-radius: 0;
      position: absolute;
      bottom: 10%;
      left: 10%;
      transition: 2s;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      background-repeat: no-repeat;
      background-size: 20% 100%;
      background-position: -30% center;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:hover {
      h4 {
        background-position: 130% center;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .background {
        background-size: auto 150%;
      }
    }
  }
}
</style>
