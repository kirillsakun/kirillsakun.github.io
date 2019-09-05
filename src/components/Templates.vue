<template>
  <div id="templates">
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

    <section id="elephant" class="col-bor">
      <h3 class="section-title">Elephant</h3>

      <div id="input-part">
        <form id="create-canvas" class="elephant-form">
          <label for="canvasWidth" class="elephant-label">Enter canvas width:</label>
          <input
            type="text"
            placeholder="Width"
            v-model="canvasWidth"
            id="canvasWidth"
            class="elephant-input"
          />

          <label for="canvasHeight" class="elephant-label">Enter canvas height:</label>
          <input
            type="text"
            placeholder="Height"
            v-model="canvasHeight"
            id="canvasHeight"
            class="elephant-input"
          />

          <button @click.prevent="createCanvas()" class="elephant-button">Create canvas</button>
        </form>

        <form id="add-line" class="elephant-form" v-if="isCanvasCreated">
          <label for class="elephant-label">Enter first coordinate:</label>
          <input type="text" placeholder="x1" v-model="lineX1" id="line-x1" class="elephant-input" />

          <input type="text" placeholder="y1" v-model="lineY1" id="line-y1" class="elephant-input" />

          <label for class="elephant-label">Enter second coordinate:</label>

          <input type="text" placeholder="x2" v-model="lineX2" id="line-x2" class="elephant-input" />

          <input type="text" placeholder="y2" v-model="lineY2" id="line-y2" class="elephant-input" />

          <button class="elephant-button" @click.prevent="addLine">Add line</button>
        </form>

        <form id="add-rectangle" class="elephant-form" v-if="isCanvasCreated">
          <label class="elephant-label">Enter first coordinate:</label>
          <input
            type="text"
            placeholder="x1"
            v-model="rectangleX1"
            id="rectangle-x1"
            class="elephant-input"
          />

          <input
            type="text"
            placeholder="y1"
            v-model="rectangleY1"
            id="rectangle-y1"
            class="elephant-input"
          />

          <label class="elephant-label">Enter second coordinate:</label>

          <input
            type="text"
            placeholder="x2"
            v-model="rectangleX2"
            id="rectangle-x2"
            class="elephant-input"
          />

          <input
            type="text"
            placeholder="y2"
            v-model="rectangleY2"
            id="rectangle-y2"
            class="elephant-input"
          />

          <button class="elephant-button" @click.prevent="addRectangle()">Add rectangle</button>
        </form>
        <p v-if="isCanvasCreated">Doubleclick on canvas to use bucked fill.</p>
        <form id="other-operatons" class="elephant-form" v-if="isCanvasCreated">
          <button class="elephant-button" @click.prevent="clearCanvas()">Clear all</button>
        </form>
      </div>
      <div id="output-part" :style="canvasSize" v-if="isCanvasCreated">
        <span
          class="free"
          v-for="(cell, index) in canvas"
          :key="cell.index"
          ref="cell"
          @dblclick="bucketFill(index, $event)"
        ></span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Templates",
  data() {
    return {
      canvasWidth: "30",
      canvasHeight: "20",
      lineX1: "",
      lineY1: "",
      lineX2: "",
      lineY2: "",
      rectangleX1: "",
      rectangleY1: "",
      rectangleX2: "",
      rectangleY2: "",
      canvas: [],
      isCanvasCreated: false
    };
  },
  computed: {
    canvasSize: function() {
      return {
        width: this.canvasWidth + "rem",
        height: this.canvasHeight + "rem"
      };
    }
  },
  methods: {
    createCanvas: function() {
      for (let i = 0; i < +this.canvasHeight * +this.canvasWidth; i++) {
        this.canvas[i] = true;
      }
      this.isCanvasCreated = true;
    },

    addLine: function() {
      let startIndex =
        (+this.lineY1 - 1) * +this.canvasWidth + +this.lineX1 - 1;
      let finallIndex =
        (+this.lineY2 - 1) * +this.canvasWidth + +this.lineX2 - 1;
      //horizontal line
      if (this.lineY1 === this.lineY2) {
        for (let j = startIndex; j <= finallIndex; j++) {
          this.$refs.cell[j].className = "active";
        }
      }
      //vertical line
      else if (this.lineX1 === this.lineX2) {
        for (let t = startIndex; t <= finallIndex; t += +this.canvasWidth) {
          this.$refs.cell[t].className = "active";
        }
      }
    },

    addRectangle: function() {
      //horizontal lines
      let startIndex =
        (+this.rectangleY1 - 1) * +this.canvasWidth + +this.rectangleX1 - 1;
      let finallIndex =
        (+this.rectangleY1 - 1) * +this.canvasWidth + +this.rectangleX2 - 1;
      for (let j = startIndex; j <= finallIndex; j++) {
        this.$refs.cell[j].className = "active";
      }
      startIndex =
        (+this.rectangleY2 - 1) * +this.canvasWidth + +this.rectangleX1 - 1;
      finallIndex =
        (+this.rectangleY2 - 1) * +this.canvasWidth + +this.rectangleX2 - 1;
      for (let j = startIndex; j <= finallIndex; j++) {
        this.$refs.cell[j].className = "active";
      }
      //vertical lines
      startIndex =
        (+this.rectangleY1 - 1) * +this.canvasWidth + +this.rectangleX1 - 1;
      finallIndex =
        (+this.rectangleY2 - 1) * +this.canvasWidth + +this.rectangleX1 - 1;
      for (let j = startIndex; j <= finallIndex; j += +this.canvasWidth) {
        this.$refs.cell[j].className = "active";
      }
      startIndex =
        (+this.rectangleY1 - 1) * +this.canvasWidth + +this.rectangleX2 - 1;
      finallIndex =
        (+this.rectangleY2 - 1) * +this.canvasWidth + +this.rectangleX2 - 1;
      for (let j = startIndex; j <= finallIndex; j += +this.canvasWidth) {
        this.$refs.cell[j].className = "active";
      }
    },

    clearCanvas: function() {
      this.$refs.cell.forEach(el => {
        el.className = "free";
      });
    },

    bucketFill: function(index) {
      const cw = +this.canvasWidth;
      //
      this.$refs.cell[index].className = "filled checked";

      for (
        let i = index + 1;
        i % cw !== 0 && this.$refs.cell[i].className !== "active";
        i++
      ) {
        this.$refs.cell[i].className = "filled";
      }
      for (
        let i = index + 1;
        i % cw !== 1 && this.$refs.cell[i - 2].className !== "active";
        --i
      ) {
        this.$refs.cell[i - 2].className = "filled";
      }
      for (
        let i = index;
        !!this.$refs.cell[i + cw] &&
        this.$refs.cell[i + cw].className !== "active";
        i += cw
      ) {
        this.$refs.cell[i + cw].className = "filled";
      }
      for (
        let i = index;
        !!this.$refs.cell[i - cw] &&
        this.$refs.cell[i - cw].className !== "active";
        i -= cw
      ) {
        this.$refs.cell[i - cw].className = "filled";
      }

      let j = 0;
      while (j < this.$refs.cell.length) {
        if (this.$refs.cell[j].className === "filled") {
          this.$refs.cell[j].className = "filled checked";

          for (
            let i = j + 1;
            i % cw !== 0 && this.$refs.cell[i].className !== "active";
            i++
          ) {
            if (this.$refs.cell[i].className !== "filled checked")
              this.$refs.cell[i].className = "filled";
          }
          for (
            let i = j + 1;
            i % cw !== 1 && this.$refs.cell[i - 2].className !== "active";
            --i
          ) {
            if (this.$refs.cell[i - 2].className !== "filled checked")
              this.$refs.cell[i - 2].className = "filled";
          }
          for (
            let i = j;
            !!this.$refs.cell[i + cw] &&
            this.$refs.cell[i + cw].className !== "active";
            i += cw
          ) {
            if (this.$refs.cell[i + cw].className !== "filled checked")
              this.$refs.cell[i + cw].className = "filled";
          }
          for (
            let i = j;
            !!this.$refs.cell[i - cw] &&
            this.$refs.cell[i - cw].className !== "active";
            i -= cw
          ) {
            if (this.$refs.cell[i - cw].className !== "filled checked")
              this.$refs.cell[i - cw].className = "filled";
          }
        }
        this.$refs.cell.filter(el => {
          return el.className == "filled";
        }).length !== 0 && j === this.$refs.cell.length - 1
          ? (j = 0)
          : j++;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$primary-font: "Raleway", sans-serif;
$secondary-font: "Montserrat", sans-serif;
$b-r: 2vh;
$vue-color: #41b883;

#templates {
  padding-top: 5rem;
}

.section-title {
  font-size: 2rem;
  margin: 0;
}
#cards {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  font-family: "Raleway", sans-serif;

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
        bottom: calc(50% + 1.5rem);
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
      background-image: url(https://pp.userapi.com/c626616/v626616430/3cc7b/tFsEkPAabU0.jpg);
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
.elephant-form {
  margin: 0.6rem 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0.1rem;
  border-radius: 0.4rem;
  box-shadow: #cccccc 0 0 0.4rem 0.1rem;
  * {
    margin: 0.1rem 0;
  }
}
.elephant-button,
.elephant-form{
  min-width: 20rem;
}
.elephant-input{
  min-width: 3rem;
}

.elephant-button {
  font-family: $primary-font;
  font-size: 1.1rem;
  width: 100%;
  height: 2rem;
  background-color: $vue-color;
  color: white;
  border: none;
  border-radius: 0.4rem 0.4rem;
}
.elephant-label {
  height: 1.7rem;
  padding: 0.25rem 0;
}
.elephant-input {
  height: 1.7rem;
  border: 1px #cccccc solid;
  border-radius: 0.2rem;
  outline-color: #41b883;
}
#elephant {
  #input-part {
    width: 30%;
    min-width: 22rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    #create-canvas {
      label {
        width: 11rem;
      }
      input {
        width: calc(100% - 11rem);
      }
    }
    #add-line,
    #add-rectangle {
      label {
        width: 13rem;
      }
      input {
        width: calc(50% - 6.65rem);
        &:nth-child(3) {
          margin-left: 0.3rem;
        }
        &:nth-child(6) {
          margin-left: 0.3rem;
        }
      }
    }
  }
  #output-part {
    border: 1px solid;
    letter-spacing: 0;
    line-height: 1rem;
    font-size: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0.7rem 0;
    padding: 0;
    box-sizing: content-box;
    span {
      height: 1rem;
      width: 1rem;
      margin: 0;
      padding: 0;
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        height: 1rem;
        width: 1rem;
        text-align: center;
      }
      &.free {
        &::before {
          content: " ";
        }
      }
      &.active {
        &::before {
          content: "x" !important;
        }
      }
      &.filled {
        &::before {
          content: "o";
        }
      }
    }
  }
}
@media (max-width: 670px){
  #elephant{
    #input-part{
      width: 100%;
    }
  }
}
</style>
