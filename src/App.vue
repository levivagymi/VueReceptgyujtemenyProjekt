<script setup>
import { defineStore } from "pinia";
import RecipeC from "./classes/RecipeC.js";
import Filter from "./components/Filter.vue";
import NewRecipe from "./components/NewRecipe.vue";
import Recipe from "./components/Recipe.vue";
import { RecipeBook } from "./data/recipeBook.js";
import { shoppingState } from "./Storage/Store.js";
import { ref } from "vue";
const store = shoppingState();
const recipeList;
const init = ()=>{
  for (let i = 0; i <RecipeBook.length; i++) {
      store.addItem(new RecipeC(RecipeBook[i].title,RecipeBook[i].description,RecipeBook[i].difficulty,RecipeBook[i].imgSrc,RecipeBook[i].time))

   }
  recipeList = ref(store.getItems())
}


init();
</script>
<template>
    <header>
        <NewRecipe />
    </header>
    <main>
        <Filter />
        <Recipe />
    </main>
    <footer>
        <p class="text-center">All rights reserved! &copy; bankitatabanya.hu</p>
    </footer>
</template>

<style scoped></style>