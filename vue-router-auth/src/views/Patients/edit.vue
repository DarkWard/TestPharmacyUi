<template>
  <div>
    <NavBar />

    <h2>Edit Patient</h2>
    <hr />
    <form @submit.prevent="createPatient">
      <div>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="this.firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
      </div>
      <div>
        <label for="stateCode">State Code</label>
      </div>
      <div>
        <label for="pharmacyName">Pharmacy Name</label>
      </div>
      <button class="edit">Edit</button>
    </form>
    <router-link to="/patient" class="back">Back to list</router-link>
  </div>
</template>


        <input type="text" id="lastName" v-model="this.lastName" />
        <input type="text" id="stateCode" v-model="this.stateCode" />
        <input type="text" id="pharmacyName" v-model="this.pharmacyName" />
      


currentPatient: 
        firstName: '',
        lastName: '',
        stateCode: '',
        pharmacyName: '',
    



<script>
import axios from "axios";
import NavBar from "@/components/additional-tools/nav-bar";

export default {
  props: {
    patientId: Number,
    firstName: '',
    lastName: '',
    stateCode: '',
    pharmacyName: '',
  },
  methods: {
    putPatient() {
      axios
        .put("https://localhost:44377/api/Patients/" + this.patientId)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
  components: {
    NavBar,
  },
};
</script>

<style scoped>

h2 {
  text-align: left;
  margin: 20px;
}

.back {
  
  background-color: black;
  color: white;
  text-align: left;
  padding: 14px 16px;
  text-decoration: none;
}

.edit {
  display: flex;
  width: 40px;
  margin: 20px;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
  background-color: green;
  color: #fff;
}

form {
  text-align: left;
  margin: 10px;
  padding: 10px;
}

input {
  width: 400px;
}

</style>