<template>
  <div>
    <NavBar />

    <h2>Add a new Patient</h2>
    <hr />

    <form @submit.prevent="createPatient">
      <div>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" v-model="newPatinet.firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" v-model="newPatinet.lastName" />
      </div>
      <div>
        <label for="stateCode">State Code</label>
        <input type="text" id="stateCode" v-model="newPatinet.stateCode" />
      </div>
      <div>
        <label for="pharmacyName">Pharmacy Name</label>
        <input type="text" id="pharmacyName" v-model="newPatinet.pharmacyName" />
      </div>
      <button>Create</button>
    </form>
  </div>
</template>

<script>
import NavBar from "@/components/AdditionalTools/NaVBar";
import axios from 'axios'

export default {
  data() {
    return {
      newPatinet: {
        firstName: '',
        lastName: '',
        stateCode: '',
        pharmacyName: '',
        pharmacyAssignDate: Date.now(),
      },
    }
  },
  components: {
    NavBar,
  },
  methods: {
    createPatient() {
      axios.post('https://localhost:44377/api/Patients', this.newPatinet)
        .then(response => console.log(response))
        .catch(error => console.log(error)); 
        console.log(this.newPatinet)
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: left;
  margin: 20px;
}

button {
  display: flex;
  width: 120px;
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