<script setup>


</script>

<template>

  <section class="py-5" style="background-color: #f8faf9;">
  <div class="container">
    <div class="d-flex justify-content-between align-items-end mb-4">
      <div>
        <p class="text-uppercase fw-bold small mb-1" style="color: #2c6e49; letter-spacing: 0.08em; font-size: 0.75rem;">
          Receptgyűjtemény
        </p>
        <h2 class="fw-bolder mb-0" style="color: #163020; font-size: 2.25rem;">
          Mit főzzünk ma?
        </h2>
      </div>
      
      <span class="badge rounded-pill px-3 py-2 fw-semibold" style="background-color: #e6f0ec; color: #2c6e49;">
         x találat
      </span>
    </div>

    <form class="bg-white p-2 rounded-4 shadow-sm border border-light" role="search">
      <div class="row g-2 align-items-center">
        <div class="col-12 col-md-6">
          <input 
            class="form-control border-light-subtle bg-light bg-opacity-25 py-2 px-3 rounded-3" 
            type="search" 
            placeholder="Keress receptet..." 
            aria-label="Keress receptet" 
          />
        </div>
        <div class="col-12 col-md-3">
          <select class="form-select border-light-subtle bg-light bg-opacity-25 py-2 px-3 rounded-3 text-dark" aria-label="Nehézség kiválasztása">
            <option selected>Minden nehézség</option>
            <option value="1">Könnyű</option>
            <option value="2">Közepes</option>
            <option value="3">Nehéz</option>
          </select>
        </div>
        <div class="col-12 col-md-3">
          <select class="form-select border-light-subtle bg-light bg-opacity-25 py-2 px-3 rounded-3 text-dark" aria-label="Rendezés elkészítési idő szerint">
            <option selected>Elkészítési idő szerint</option>
            <option value="1">Leggyorsabb elöl</option>
            <option value="2">30 perc alatt</option>
            <option value="3">60 perc felett</option>
          </select>
        </div>
      </div>
    </form>
  </div>
</section>

</template>

<style scoped></style>