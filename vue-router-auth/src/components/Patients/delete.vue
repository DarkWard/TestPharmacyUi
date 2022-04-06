<template>
  <button class="delete" @click="deletePatient">Delete</button>
</template>

<script>
import axios from "axios";

export default {
  props: {
    patientId: Number,
  },
  methods: {
    deletePatient() {
      axios
        .delete("https://localhost:44377/api/Patients/" + this.patientId)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>


<style scoped>
.delete {
  width: 60px;
  height: 40px;
  background: red;
  color: #fff;
  border-radius: 10%;
  font-weight: bold;
  text-align: center;
}
</style>