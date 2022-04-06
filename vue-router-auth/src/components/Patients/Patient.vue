<template>
  <tr>
    <td>{{ patient.FirstName }}</td>
    <td>{{ patient.LastName }}</td>
    <td>{{ patient.StateCode }}</td>
    <td>{{ patient.PharmacyName }}</td>
    <td width="15%">{{ patient.PharmacyAssignDate }}</td>
    <td class="buttons">
      <router-link
        to="/edit-patient"
        class="edit"
        v-bind:patientId="patient.Id"
        v-bind:firstName="patient.FirstName"
        v-bind:lastName="patient.LastName"
        v-bind:stateCode="patient.StateCode"
        v-bind:pharmacyName="patient.PharmacyName"
        
        >Edit</router-link
      >
      <Delete v-bind:patientId="patient.Id" />
    </td>
  </tr>
</template>
      <Edit v-bind:patientId = "patient.Id" />

<script>
import Delete from "@/components/patients/delete.vue"
import Edit from "@/views/patients/edit.vue"

export default {
  props: {
    patient: {
      required: true
    }
  },
  components: {
    Delete,
    Edit
  }
}
</script>

<style scoped>

TD {
  padding: 3px;
  border: 1px solid black;
}

.buttons {
  width: 1px;
  display: right;
  justify-content: right;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.edit {
  width: 60px;
  height: 40px;
  background: cornflowerblue;
  color: #fff;
  border-radius: 10%;
  font-weight: bold;
  text-align: center;
  padding: 8px 15px;
}

.delete {
  height: 40px;
  background: red;
  color: #fff;
  border-radius: 10%;
  font-weight: bold;
}
</style>