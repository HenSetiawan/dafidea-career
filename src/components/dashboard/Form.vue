<template>
  <div class="row">
    <div class="col-lg-6">
      <form action="" method="post">
        <h1>Tambah Data User</h1>
        <div class="mb-3">
          <label for="name" class="form-label">Nama</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Budi Setiawan"
            required
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="budi@gmail.com"
            required
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">Alamat</label>
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Jakarta"
            required
            autocomplete="off"
          />
        </div>
        <div class="mb-3">
          <label for="birthday" class="form-label">Tanggal Lahir</label>
          <input
            type="date"
            class="form-control"
            id="birthday"
            required
            autocomplete="off"
          />
        </div>

        <button type="submit" class="btn btn-primary btn-sm">Tambah</button>
      </form>
    </div>
  </div>
</template>
