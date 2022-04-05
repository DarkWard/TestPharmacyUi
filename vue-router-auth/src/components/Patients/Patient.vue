<template>
  <tr>
    <td>{{patient.FirstName}}</td>
    <td>{{patient.LastName}}</td>
    <td>{{patient.StateCode}}</td>
    <td>{{patient.PharmacyName}}</td>
    <td width="15%">{{patient.PharmacyAssignDate}}</td>
    <td class="buttons">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    patient: {
      required: true
    }
  },
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
  height: 40px;
  display: flex;
  background: cornflowerblue;
  color: #fff;
  border-radius: 10%;
  font-weight: bold;
  line-height: 33px;
}

.delete {
  height: 40px;
  display: flex;
  background: red;
  color: #fff;
  border-radius: 10%;
  font-weight: bold;
  line-height: 33px;
}
</style>