<template>
  <section id="elephant" class="">
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
</template>

<script>

export default {
		name: 'TestTasks',
		  data() {
    return {
      canvasWidth: "30",
      canvasHeight: "20",
      lineX1: "1",
      lineY1: "5",
      lineX2: "10",
      lineY2: "5",
      rectangleX1: "1",
      rectangleY1: "3",
      rectangleX2: "10",
      rectangleY2: "15",
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

	}


</script>

<style lang="scss" scoped>
$primary-font: "Raleway", sans-serif;
$vue-color: #41b883;

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

