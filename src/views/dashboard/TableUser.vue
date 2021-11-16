<template>
  <Table :rows="rows" :cols="cols" class="dashboard-section" />
</template>

<script>
import { ref } from "vue";
import Table from "../../components/dashboard/Table.vue";
export default {
  components: { Table },
  setup() {
    const rows = ref([
      ["Hendy", "20", "Ngawi", "hendy@gmail.com"],
      ["Budi", "30", "Jember", "budi@gmail.com"],
    ]);

    const cols = ref(["Nama", "Umur", "Alamat", "Email"]);

    return { rows, cols };
  },
};
</script>
