<template>
  <section class="container">
    <div class="fixed header">
      <!--
      <i class="material-icons" @click="index = 0">refresh</i>
      <span>Study Group Match</span>
      <i class="material-icons">tune</i>
      -->
    </div>
    <div
      v-if="current"
      class="fixed fixed--center"
      style="z-index: 3"
      :class="{ transition: isVisible }"
    >
      <Vue2InteractDraggable
        v-if="isVisible"
        :interact-out-of-sight-x-coordinate="500"
        :interact-max-rotation="15"
        :interact-x-threshold="200"
        :interact-y-threshold="200"
        :interact-event-bus-events="interactEventBus"
        interact-block-drag-down
        @draggedRight="emitAndNext('match')"
        @draggedLeft="emitAndNext('reject')"
        @draggedUp="emitAndNext('skip')"
        class="rounded-borders card card--one"
      >
        <div class="firstsplit">
          <!-- <img
            :src="require(`../assets/images/${current.src}`)"
            class="rounded-borders"
          /> -->

          <!-- CLAIRE LEE top text box-->
          <div style="flex: 1; background: pink;">
            <h1>
              {{ current.name }}, <span>{{ current.age }}</span>
            </h1>
          </div>

          <!-- everything below the name-->
          <div class="threesplit" style="flex: 4; background: orange;">
            <!-- pronouns and picture-->
            <div style="flex: 1; background: red;">
              <div
                class="pronounpicture"
                style="padding-right: 3vH; padding-top: 3vH; padding-bottom: 4vH; padding-left: 3vH; max-height: 40vh"
              >
                <h2>she/her/hers</h2>
                <img :src="require(`../assets/images/${current.src}`)" />
              </div>
            </div>
            <!--basic info and classes -->
            <div style="flex: 1; ">
              <div class="bioclasses" style="flex: 3; padding-left: 2vH;">
                <!--bio that includes year, major, location -->
                <div>
                  <h3><i class="fas fa-user"></i> Freshman</h3>
                  <h3><i class="fas fa-user"></i> Intended Computer Science</h3>
                  <h3><i class="fas fa-user"></i> Berkeley, CA</h3>
                </div>
                <!--list of classes -->
                <div style="flex: 4">
                  <h2 style=" margin: 0.5vh; padding-top: 5vH; ">
                    Classes <i class="fas fa-pencil-alt"></i>
                  </h2>
                  <ul style=" margin: 1vh;">
                    <li>CS61B</li>
                    <li>EECS16B</li>
                    <li>ESPM40</li>
                    <li>DataSci</li>
                    <li>R1B Slavic</li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- hobbies and study habits-->
            <div style="flex: 1;">
              <div class="bioclasses" style="flex: 3">
                <!--bio that includes year, major, location -->
                <div>
                  <h2 style="margin: 0.5vh;">
                    Hobbies <i class="fas fa-basketball-ball"></i>
                  </h2>
                  <ul>
                    <li>dance</li>
                    <li>reading</li>
                    <li>hiking</li>
                  </ul>
                </div>
                <!--list of classes -->
                <div style="flex: 4">
                  <h2 style="margin: 0.5vh;">
                    Study Habits <i class="far fa-clock"></i>
                  </h2>
                  <ul>
                    <li>morning</li>
                    <li>late afternoon</li>
                    <li>pomodoro</li>
                    <li>groupstyle</li>
                    <li>review sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Vue2InteractDraggable>
    </div>
    <div
      v-if="next"
      class="rounded-borders card card--two fixed fixed--center"
      style="z-index: 2"
    >
      <div style="height: 100%">
        <img
          :src="require(`../assets/images/${next.src}`)"
          class="rounded-borders"
        />
        <div class="text">
          <h2>
            {{ next.name }}
          </h2>
          <h2>
            {{ next.age }}
          </h2>
        </div>
      </div>
    </div>
    <div
      v-if="index + 2 < cards.length"
      class="rounded-borders card card--three fixed fixed--center"
      style="z-index: 1"
    >
      <div style="height: 100%"></div>
    </div>
    <div class="footer fixed">
      <div class="btn btn--decline" @click="reject">
        <i class="material-icons">delete</i>
      </div>
      <div class="btn btn--skip" @click="skip">
        <i class="material-icons">call_missed</i>
      </div>
      <div class="btn btn--like" @click="match">
        <i class="material-icons">favorite</i>
      </div>
    </div>
  </section>
</template>

<script>
import { Vue2InteractDraggable, InteractEventBus } from "vue2-interact";
const EVENTS = {
  MATCH: "match",
  SKIP: "skip",
  REJECT: "reject",
};
export default {
  name: "SwipeableCards",
  components: { Vue2InteractDraggable },
  data() {
    return {
      isVisible: true,
      index: 0,
      interactEventBus: {
        draggedRight: EVENTS.MATCH,
        draggedLeft: EVENTS.REJECT,
        draggedUp: EVENTS.SKIP,
      },
      cards: [
        { src: "karina.jpg", name: "Karina", age: 7 },
        { src: "alexander.jpg", name: "Alexander", age: 5 },
        { src: "bona.jpg", name: "Bona", age: 3 },
        { src: "ichi.jpg", name: "Ichi", age: 7 },
        { src: "lloyd.jpg", name: "Lloyd", age: 4 },
        { src: "luiza.jpg", name: "Luiza", age: 9 },
        { src: "max.jpg", name: "Max", age: 6 },
        { src: "mona.jpg", name: "Mona", age: 3 },
        { src: "naru.jpg", name: "Naru", age: 7 },
        { src: "ramdan.jpg", name: "Ramdan", age: 8 },
        { src: "rikki-austin.jpg", name: "Rikki Austin", age: 3 },
        { src: "tucker.jpg", name: "Tucker", age: 9 },
        { src: "uriel.jpg", name: "Uriel", age: 6 },
        { src: "zoe.jpg", name: "Zoe", age: 2 },
      ],
    };
  },
  computed: {
    current() {
      return this.cards[this.index];
    },
    next() {
      return this.cards[this.index + 1];
    },
  },
  methods: {
    match() {
      InteractEventBus.$emit(EVENTS.MATCH);
    },
    reject() {
      InteractEventBus.$emit(EVENTS.REJECT);
    },
    skip() {
      InteractEventBus.$emit(EVENTS.SKIP);
    },
    emitAndNext(event) {
      this.$emit(event, this.index);
      setTimeout(() => (this.isVisible = false), 200);
      setTimeout(() => {
        this.index++;
        this.isVisible = true;
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 70px;
  margin: 1vh;
}

h2 {
  font-size: 30px;
  margin: 0.5vh;
}

h3 {
  font-size: 20px;
  margin: 1vh;
}

li {
  font-size: 18px;
}

.icon {
  top: 5px;
  left: 5px;
}

.firstsplit {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.threesplit {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  flex-grow: 1;
}

.pronounpicture {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  flex-grow: 1;
}

.bioclasses {
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-grow: 1;
}

.container {
  display: flex;
  background: #eceff1;
  width: 100%;
  height: 100vh;
}
.header {
  width: 100%;
  height: 60vh;
  z-index: 0;
  top: 0;
  left: 0;
  color: white;
  text-align: center;
  font-style: bold;
  font-family: "Staatliches", cursive;
  background: #000080;
  background: -webkit-linear-gradient(to top, #d1b70f, #000080);
  background: linear-gradient(to top, #d1b70f, #000080);
  clip-path: polygon(0 20%, 100% 20%, 100% 76%, 0 89%);
  display: flex;
  justify-content: space-between;
  span {
    display: block;
    font-size: 4rem;
    padding-top: 2rem;
    text-shadow: 1px 1px 1px red;
  }
  i {
    padding: 24px;
  }
}
.footer {
  width: 77vw;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding-bottom: 30px;
  justify-content: space-around;
  align-items: center;
}
.btn {
  position: relative;
  width: 50px;
  height: 50px;
  padding: 0.2rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.02),
    0 10px 14px 1px rgba(0, 0, 0, 0.02), 0 4px 18px 3px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  &:active {
    transform: translateY(4px);
  }
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &::before {
      content: "";
    }
  }
  &--like {
    background-color: green;
    padding: 0.5rem;
    color: white;
    box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2),
      0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);
    i {
      font-size: 32px;
    }
  }
  &--decline {
    color: red;
  }
  &--skip {
    color: green;
  }
}
.flex {
  display: flex;
  &--center {
    align-items: center;
    justify-content: center;
  }
}
.fixed {
  position: fixed;
  &--center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.rounded-borders {
  border-radius: 12px;
}
.card {
  width: 60vw;
  height: 60vh;
  color: white;
  img {
    object-fit: cover;
    display: block;
    width: 100%;
    height: 100%;
  }
  &--one {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),
      0 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  &--two {
    transform: translate(-48%, -48%);
    box-shadow: 0 6px 6px -3px rgba(0, 0, 0, 0.2),
      0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);
  }
  &--three {
    background: rgba(black, 0.8);
    transform: translate(-46%, -46%);
    box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2),
      0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);
  }
  .text {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: black;
    background: rgba(0, 0, 0, 0.5);
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    text-indent: 20px;
    span {
      font-weight: normal;
    }
  }
}
.transition {
  animation: appear 200ms ease-in;
}
@keyframes appear {
  from {
    transform: translate(-48%, -48%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}
</style>
