<script setup>
import { ref, watch } from 'vue';
import { shoppingState } from '../Storage/Store';

const store = shoppingState();
const input = ref("");
const difficulty = ref("");
const time = ref("");

const allRecipes = store.getItems();
const shopping = ref([...allRecipes.value]);

watch([input, difficulty, time], ([newInput, newDifficulty, newTime]) => {
  let result = [...allRecipes.value];

  if (newInput.trim() !== "") {
    const searchTerm = newInput.toLowerCase();
    result = result.filter((a) => 
      a.getName().toLowerCase().includes(searchTerm)
    );
  }

  if (newDifficulty !== "") {
    result = result.filter((a) => 
      String(a.getDifficulty()) == newDifficulty
    );
  }

  if (newTime == "1") {
    result.sort((a, b) => a.getTime() - b.getTime());
  } else if (newTime == "2") {
    result = result.filter((a) => a.getTime() <= 30);
  } else if (newTime == "3") {
    result = result.filter((a) => a.getTime() >= 60);
  }

  shopping.value = result;
}, { immediate: true });
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
          {{ shopping.length }} találat
        </span>
      </div>

      <form @submit.prevent class="bg-white p-2 rounded-4 shadow-sm border border-light" role="search">
        <div class="row g-2 align-items-center">
          <div class="col-12 col-md-6">
            <input 
              class="form-control border-light-subtle bg-light bg-opacity-25 py-2 px-3 rounded-3" 
              type="search" 
              placeholder="Keress receptet..." 
              aria-label="Keress receptet" 
              v-model="input"
            />
          </div>
          <div class="col-12 col-md-3">
            <select v-model="difficulty" class="form-select border-light-subtle bg-light bg-opacity-25 py-2 px-3 rounded-3 text-dark" aria-label="Nehézség kiválasztása">
              <option value="">Minden nehézség</option>
              <option value="0">Könnyű</option>
              <option value="1">Közepes</option>
              <option value="2">Nehéz</option>
            </select>
          </div>
          <div class="col-12 col-md-3">
            <select v-model="time" class="form-select border-light-subtle bg-light bg-opacity-25 py-2 px-3 rounded-3 text-dark" aria-label="Rendezés elkészítési idő szerint">
              <option value="">Elkészítési idő szerint</option>
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