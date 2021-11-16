<template>
  <div class="mt-5 p-2">
    <button class="btn-sm btn btn-primary mt-2 mb-3">Tambah Data</button>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <td v-for="col in cols" :key="col">{{ col }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
            <td>
              <button class="btn btn-warning btn-sm">Ubah</button> |
              <button class="btn btn-danger btn-sm">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rows: Array,
    cols: Array,
  },
  setup() {},
};
</script>
