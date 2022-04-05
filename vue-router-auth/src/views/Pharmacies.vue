<template>
  <div>
    <NavBar />
    <li>
      <strong>
        <h2>Pharmacy List</h2>
      </strong>
      <button >Add new pharmacy</button>
    </li>
    <hr />
    <ul>
      <li></li>
    </ul>
    
    <table>
        <tr>
          <th>Name</th>
          <th>State Code</th>
          <th>Address</th>
          <th>Contact Email</th>
          <th>Contact Phone</th>
          <th></th>
        </tr>
    </table>
  </div>
</template>

<script>
import NavBar from "@/components/AdditionalTools/NaVBar";

export default {
  components: {
    NavBar,
  },
};
</script>

 - Pharmacies
   1) колонки: Name, State Code, Address, Contact Email, Contact Phone
   2) есть фильтр поле поиска по Name
   3) есть пагинация