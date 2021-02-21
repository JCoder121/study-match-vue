<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h1>Students</h1>
        <hr />
        <br /><br />
        <alert :message="message" v-if="showMessage"></alert>
        <button
          type="button"
          class="btn btn-success btn-sm"
          v-b-modal.student-modal
        >
          Add Student
        </button>
        <br /><br />
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(student, index) in students" :key="index">
              <td>{{ student.name }}</td>
              <td>{{ student.year }}</td>

              <td>
                <div class="btn-group" role="group">
                  <button
                    type="button"
                    class="btn btn-warning btn-sm"
                    v-b-modal.student-update-modal
                    @click="editStudent(student)"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    @click="onDeleteStudent(student)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal
      ref="addStudentModal"
      id="student-modal"
      title="Add a new student"
      hide-footer
    >
      <b-form @submit="onSubmit" @reset="onReset" class="w-100">
        <b-form-group
          id="form-name-group"
          label="Name:"
          label-for="form-name-input"
        >
          <b-form-input
            id="form-name-input"
            type="text"
            v-model="addStudentForm.name"
            required
            placeholder="Enter name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-year-group"
          label="Year:"
          label-for="form-year-input"
        >
          <b-form-input
            id="form-year-input"
            type="text"
            v-model="addStudentForm.year"
            required
            placeholder="Enter year"
          >
          </b-form-input>
        </b-form-group>

        <b-button-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
    <b-modal
      ref="editStudentModal"
      id="student-update-modal"
      title="Update"
      hide-footer
    >
      <b-form @submit="onSubmitUpdate" @reset="onResetUpdate" class="w-100">
        <b-form-group
          id="form-name-edit-group"
          label="Name:"
          label-for="form-name-edit-input"
        >
          <b-form-input
            id="form-name-edit-input"
            type="text"
            v-model="editForm.name"
            required
            placeholder="Enter Name"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="form-year-edit-group"
          label="Year:"
          label-for="form-year-edit-input"
        >
          <b-form-input
            id="form-year-edit-input"
            type="text"
            v-model="editForm.name"
            required
            placeholder="Enter name"
          >
          </b-form-input>
        </b-form-group>

        <b-button-group>
          <b-button type="submit" variant="primary">Update</b-button>
          <b-button type="reset" variant="danger">Cancel</b-button>
        </b-button-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./Alert.vue";
export default {
  data() {
    return {
      students: [],
      addStudentForm: {
        name: "",
        year: "",
      },
      message: "",
      showMessage: false,
      editForm: {
        id: "",
        name: "",
        year: "",
      },
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    getStudents() {
      const path = "http://localhost:5000/students";
      axios
        .get(path)
        .then((res) => {
          this.students = res.data.students;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    addStudent(payload) {
      const path = "http://localhost:5000/students";
      axios
        .post(path, payload)
        .then(() => {
          this.getStudents();
          this.message = "Student added!";
          this.showMessage = true;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          this.getStudents();
        });
    },
    initForm() {
      this.addStudentForm.name = "";
      this.addStudentForm.year = "";
      this.editForm.id = "";
      this.editForm.name = "";
      this.editForm.year = "";
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.$refs.addStudentModal.hide();
      const payload = {
        name: this.addStudentForm.name,
        year: this.addStudentForm.year,
      };
      this.addStudent(payload);
      this.initForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.$refs.addStudentModal.hide();
      this.initForm();
    },
    editStudent(student) {
      this.editForm = student;
    },
    onSubmitUpdate(evt) {
      evt.preventDefault();
      this.$refs.editStudentModal.hide();

      const payload = {
        name: this.editForm.name,
        year: this.editForm.year,
      };
      this.updateStudent(payload, this.editForm.id);
    },
    updateStudent(payload, studentID) {
      const path = `http://localhost:5000/students/${studentID}`;
      axios
        .put(path, payload)
        .then(() => {
          this.getStudents();
          this.message = "Student updated!";
          this.showMessage = true;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          this.getStudents();
        });
    },
    onResetUpdate(evt) {
      evt.preventDefault();
      this.$refs.editStudentModal.hide();
      this.initForm();
      this.getStudents(); // why?
    },
    removeStudent(studentID) {
      const path = `http://localhost:5000/students/${studentID}`;
      axios
        .delete(path)
        .then(() => {
          this.getStudents();
          this.message = "Student removed!";
          this.showMessage = true;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          this.getStudents();
        });
    },
    onDeleteStudent(student) {
      this.removeStudent(student.id);
    },
  },
  created() {
    this.getStudents();
  },
};
</script>
