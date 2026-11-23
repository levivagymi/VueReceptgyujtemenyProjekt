<script setup>
import { ref } from "vue";
import RecipeC from "./classes/RecipeC.js";
import Filter from "./components/Filter.vue";
import NewRecipe from "./components/NewRecipe.vue";
import Recipe from "./components/Recipe.vue";
import { RecipeBook } from "./data/recipeBook.js";
import { shoppingState } from "./Storage/Store.js";

const store = shoppingState();
const filteredList = ref([]);

const init = () => {
  if (store.getItems().length === 0) {
    for (let i = 0; i < RecipeBook.length; i++) {
      const r = RecipeBook[i];
      store.addItem(
        new RecipeC(r.title, r.description, r.difficulty, r.imgSrc, r.time)
      );
    }
  }
  filteredList.value = [...store.getItems()];
};

const defineFilteredList = (payload) => {
  filteredList.value = Array.isArray(payload) ? payload : [];
};

init();
</script>

<template>
  <header>
    <NewRecipe />
  </header>
  <main>
    <Filter @filteredList="defineFilteredList" />
    <Recipe :items="filteredList" />
  </main>
  <footer>
    <p class="text-center">All rights reserved! &copy; bankitatabanya.hu</p>
  </footer>
</template>

<style scoped></style>