<script setup>
import Filter from "./components/Filter.vue";
import NewRecipe from "./components/NewRecipe.vue";
import Recipe from "./components/Recipe.vue";

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
        <p>All rights reserved! &copy; bankitatabanya.hu</p>
    </footer>
</template>

<style scoped></style>