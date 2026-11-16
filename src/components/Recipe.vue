<script setup>

const props = defineProps({
    items:Array
})





</script>

<template>

<div class="container py-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div class="col">
      <div v-for="item in props.items" class="card h-100 border-0 rounded-4 shadow-sm recipe-card overflow-hidden">
        <div class="position-relative">
          <img :src=" item.getImg() " class="card-img-top object-fit-cover" style="height: 220px;" alt="Gulyásleves">
          <span class="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-white bg-opacity-75 rounded-pill fw-semibold text-dark small shadow-sm">
            🕒 x perc
          </span>
        </div>
        <div class="card-body d-flex flex-column p-4">
          <div class="mb-2">
            <span class="badge rounded-pill px-3 py-1 fw-semibold badge-easy">
              xnehezseg
            </span>
          </div>
          <h3 class="card-title h5 fw-bold text-dark mb-2">xnév</h3>
          <p class="card-text text-muted small mb-4">
            xleiras
          </p>
          <a href="#" class="btn btn-recipe w-100 mt-auto d-flex justify-content-between align-items-center py-2 px-3 rounded-3 fw-semibold">
            <span>Recept megtekintése</span>
            <span>&rarr;</span>
          </a>

        </div>
      </div>
    </div>

  </div>
</div>



</template>

<style scoped></style>