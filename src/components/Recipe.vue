<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});

const getDifficultyBadgeClass = (difficulty) => {
  if (difficulty === "Könnyű") return "bg-success-subtle text-success";
  if (difficulty === "Közepes") return "bg-warning-subtle text-warning-emphasis";
  return "bg-danger-subtle text-danger";
};
</script>

<template>
  <div class="container py-5">
    <div v-if="!props.items || props.items.length === 0" class="text-center py-5 text-muted">
      Nincs a szűrésnek megfelelő recept.
    </div>

    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div
        class="col"
        v-for="(item, index) in props.items"
        :key="`${item.getTitle()}-${index}`"
      >
        <div class="card h-100 border-0 rounded-4 shadow-sm recipe-card overflow-hidden">
          <div class="position-relative">
            <img
              :src="item.getImg()"
              class="card-img-top object-fit-cover"
              style="height: 220px;"
              :alt="item.getTitle()"
            />
            <span class="position-absolute bottom-0 end-0 m-3 px-3 py-1 bg-white bg-opacity-75 rounded-pill fw-semibold text-dark small shadow-sm">
              🕒 {{ item.getTime() }} perc
            </span>
          </div>

          <div class="card-body d-flex flex-column p-4">
            <div class="mb-2">
              <span
                class="badge rounded-pill px-3 py-1 fw-semibold"
                :class="getDifficultyBadgeClass(item.getDifficulty())"
              >
                {{ item.getDifficulty() }}
              </span>
            </div>

            <h3 class="card-title h5 fw-bold text-dark mb-2">
              {{ item.getTitle() }}
            </h3>

            <p class="card-text text-muted small mb-4">
              {{ item.getDescription() }}
            </p>

            <a
              href="#"
              class="btn btn-outline-success w-100 mt-auto d-flex justify-content-between align-items-center py-2 px-3 rounded-3 fw-semibold"
            >
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