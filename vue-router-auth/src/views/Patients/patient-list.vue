<template>
  <div>
    <NavBar />
    <li class="top">
      <strong>
        <h2>Patient List</h2>
      </strong>
      <router-link to="/create-patient" class="add">Add new patient</router-link>
    </li>
    <Loader v-if="loading" />
    <table v-else-if="patients.length">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>State Code</th>
          <th>Pharmacy Name</th>
          <th>Assign Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Patient v-for="patient of patients" v-bind:patient="patient" />
      </tbody>
    </table>
    <p v-else>No Patients!</p>
  </div>
</template>

- Patients
   2) есть фильтр дропдаун с опциями: No, One month, Three monthes, фильтрует по Pharmacy Assign Date
   3) есть пагинация

<script>
import Loader from "@/components/additional-tools/loader";
import NavBar from "@/components/additional-tools/nav-bar";
import Patient from "@/components/patients/patient";

export default {
  data() {
    return {
      patients: [],
      loading: true,
    };
  },
  mounted() {
    fetch("https://localhost:44377/api/patients")
      .then((response) => response.json())
      .then((json) => {
        this.patients = json;
        this.loading = false;
      });
  },
  components: {
    NavBar,
    Loader,
    Patient,
  },
};
</script>

<style scoped>
h2 {
  text-align: left;
}

table {
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}

.top {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.add {
  height: 40px;
  display: flex;
  background: green;
  color: #fff;
  border-radius: 10%;
  font-weight: bold;
  line-height: 33px;
}
</style>