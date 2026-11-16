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
const recipeList = ref([]);
const init = ()=>{
  for (let i = 0; i <RecipeBook.length; i++) {
      store.addItem(new RecipeC(RecipeBook[i].title,RecipeBook[i].description,RecipeBook[i].difficulty,RecipeBook[i].imgSrc,RecipeBook[i].time))

   }
  recipeList.value = ref(store.getItems())
}
const filteredList = ref([]);
const defineFilteredList=(payload)=>{
  filteredList.value = payload;
}
init();
</script>
<template>
    <header>
        <NewRecipe />
    </header>
    <main>
        <Filter @filtered-list="defineFilteredList()" />
        <Recipe :filteredList="filteredList"/>
    </main>
    <footer>
        <p class="text-center">All rights reserved! &copy; bankitatabanya.hu</p>
    </footer>
</template>

<style scoped></style>