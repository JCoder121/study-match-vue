<template>
  <div id="profile">
    <form @submit.prevent="handleSubmit">
      <label>Name</label>
      <input
        ref="first"
        type="text"
        v-model="student.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <label>Pronoun</label>
      <input type="text" v-model="student.pronoun" @focus="clearStatus" />
      <label>Year</label>
      <input type="text" v-model="student.year" @focus="clearStatus" />
      <label>Major(s)</label>
      <input type="text" v-model="student.major" @focus="clearStatus" />
      <label>Current Location</label>
      <input type="text" v-model="student.location" @focus="clearStatus" />
      <h5>Classes (Choose 3):</h5>
      <label>Class 1</label>
      <input type="text" v-model="student.class1" @focus="clearStatus" />
      <label>Class 2</label>
      <input type="text" v-model="student.class2" @focus="clearStatus" />
      <label>Class 3</label>
      <input type="text" v-model="student.class3" @focus="clearStatus" />
      <h5>Hobbies (Choose 3):</h5>
      <label>Hobby 1</label>
      <input type="text" v-model="student.hobby1" @focus="clearStatus" />
      <label>Hobby 2</label>
      <input type="text" v-model="student.hobby2" @focus="clearStatus" />
      <label>Hobby 3</label>
      <input type="text" v-model="student.hobby3" @focus="clearStatus" />
      <h5>Study Habits (Choose 3):</h5>
      <label>Study Habit 1</label>
      <input type="text" v-model="student.habit1" @focus="clearStatus" />
      <label>Study Habit 2</label>
      <input type="text" v-model="student.habit2" @focus="clearStatus" />
      <label>Study Habit 3</label>
      <input type="text" v-model="student.habit3" @focus="clearStatus" />

      <p v-if="success" class="success-message">
        ✅ Student successfully added
      </p>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "student-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      student: {
        name: "",
        pronoun: "",
        year: "",
        major: "",
        location: "",
        class1: "",
        class2: "",
        class3: "",
        hobby1: "",
        hobby2: "",
        hobby3: "",
        habit1: "",
        habit2: "",
        habit3: "",
      },
    };
  },

  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();

      if (
        this.invalidName ||
        this.invalidPronoun ||
        this.invalidYear ||
        this.invalidMajor ||
        this.invalidLocation ||
        this.invalidClass1 ||
        this.invalidClass2 ||
        this.invalidClass3 ||
        this.invalidHobby1 ||
        this.invalidHobby2 ||
        this.invalidHobby3 ||
        this.invalidHabit1 ||
        this.invalidHabit2 ||
        this.invalidHabit3
      ) {
        this.error = true;
        return;
      }

      this.$emit("add:student", this.student);
      this.$refs.first.focus();
      this.student = {
        name: "",
        pronoun: "",
        year: "",
        major: "",
        location: "",
        class1: "",
        class2: "",
        class3: "",
        hobby1: "",
        hobby2: "",
        hobby3: "",
        habit1: "",
        habit2: "",
        habit3: "",
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },

  computed: {
    invalidName() {
      return this.student.name === "";
    },

    invalidPronoun() {
      return this.student.pronoun === "";
    },

    invalidYear() {
      return this.student.year === "";
    },
    invalidMajor() {
      return this.student.major === "";
    },
    invalidLocation() {
      return this.student.location === "";
    },
    invalidClass1() {
      return this.student.class1 === "";
    },
    invalidClass2() {
      return this.student.class2 === "";
    },
    invalidClass3() {
      return this.student.class3 === "";
    },
    invalidHobby1() {
      return this.student.hobby1 === "";
    },
    invalidHobby2() {
      return this.student.hobby2 === "";
    },
    invalidHobby3() {
      return this.student.hobby3 === "";
    },
    invalidHabit1() {
      return this.student.habit1 === "";
    },
    invalidHabit2() {
      return this.student.habit2 === "";
    },
    invalidHabit3() {
      return this.student.hobby3 === "";
    },
  },
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
  margin-top: 120px;
}

[class*="-message"] {
  font-weight: 500;
}

/*
.error-message {
  color: #d33c40;
}
*/

.success-message {
  color: #32a95d;
}
</style>
