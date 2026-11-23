<script setup>

import { ref } from 'vue';
import { shoppingState } from '../Storage/Store';
import RecipeC from '../classes/RecipeC';

const store = shoppingState();

const title = ref("");
const description = ref("");
const time = ref("");
const difficulty = ref("");

const add = () => {
  if (!title.value.trim()) return;

  const newRecipe = new RecipeC(
    title.value.trim(),
    description.value.trim(),
    Number(difficulty.value || 0),
    "../assets/food.avif",
    Number(time.value || 0)
  );

  store.addItem(newRecipe);

  title.value = "";
  description.value = "";
  time.value = "";
  difficulty.value = "";



};

</script>

<template>

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"

        aria-labelledby="staticBackdropLabel" aria-hidden="true">

        <div class="modal-dialog">

            <div class="modal-content">

                <div class="modal-header">

                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Recipe</h1>

                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                </div>

                <div class="modal-body">

                    <form @submit.prevent="add">

                        <div class="mb-3">

                            <label for="recipeTitle" class="form-label">Title</label>

                            <input type="text" class="form-control" id="recipeTitle" v-model="title">

                        </div>

                        <div class="mb-3">

                            <label for="recipeDesc" class="form-label">Description</label>

                            <input type="text" class="form-control" id="recipeDesc" v-model="description">

                        </div>

                        <div class="mb-3">

                            <label for="recipeDiff" class="form-label">difficulty</label>

                            <select v-model="difficulty" class="form-select" id="recipeDiff">

                                <option value="" disabled>Open this select menu</option>

                                <option value="0">Easy</option>

                                <option value="1">Medium</option>

                                <option value="2">Hard</option>

                            </select>

                        </div>

                        <div class="mb-3">

                            <label for="recipeTime" class="form-label">Time in minutes</label>

                            <input type="number" class="form-control" id="recipeTime" v-model="time">

                        </div>

                        <button type="submit" class="btn btn-primary d-none" id="submitRecipeBtn">Submit</button>

                    </form>

                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    <button type="button" class="btn btn-primary" @click="add" data-bs-dismiss="modal">Add Recipe</button>

                </div>

            </div>

        </div>

    </div>





    <nav class="navbar navbar-expand-lg bg-white py-3">

        <div class="container">

            <p class="navbar-brand d-flex align-items-center fw-bold text-dark mb-0">

                <img src="../assets/recept.jpg" alt="Receptkönyv logó" class="rounded-3 me-2 object-fit-cover"

                    style="width: 36px; height: 36px;">

                Receptkönyv

            </p>

            <div class="d-flex align-items-center gap-3">

                <button type="button" class="btn btn-link text-decoration-none text-secondary fw-medium">

                    Receptek

                </button>

                <button type="button" class="btn btn-custom-green px-3 py-2 fw-medium" data-bs-toggle="modal"

                    data-bs-target="#staticBackdrop">

                    + Új recept

                </button>

            </div>

        </div>

    </nav>



    <div class="container my-4">

        <div class="hero-card row g-0 overflow-hidden shadow-sm">



            <div class="col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center">

                <p class="hero-subtitle text-uppercase fw-bold mb-2">

                    Ízek, amelyek összehoznak

                </p>



                <h1 class="hero-title fw-bold mb-3">

                    Találd meg a következő kedvenc recepted!

                </h1>



                <p class="hero-desc text-muted mb-4">

                    Egyszerű hétköznapi fogások és különleges finomságok egy helyen, átláthatóan összegyűjtve.

                </p>



                <div class="d-flex flex-wrap gap-3 mb-5">

                    <button type="button" class="btn btn-custom-green px-4 py-2 fw-medium">

                        Receptek böngészése

                    </button>

                    <button type="button" class="btn btn-white-custom px-4 py-2 fw-medium" data-bs-toggle="modal"

                        data-bs-target="#staticBackdrop">

                        Saját recept hozzáadása

                    </button>

                </div>



                <p class="mb-0 text-muted small">

                    <span class="stat-number fw-bold me-1">{{ store.getItems().length }}</span> recept vár felfedezésre

                </p>

            </div>



            <div class="col-lg-6 position-relative hero-image-wrapper">

                <img src="../assets/food.avif" alt="Gulyásleves" class="hero-img">



                <div class="floating-badge shadow-sm">

                    <span class="star-icon">★</span> Válogatott receptek

                </div>

            </div>



        </div>

    </div>



</template>



<style scoped>

.brand-badge {

    background-color: #2c6e58;

    color: white;

    width: 32px;

    height: 32px;

    border-radius: 8px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    font-weight: bold;

    font-size: 1.1rem;

}



.hero-card {

    background-color: #ebf3ef;

    border-radius: 24px;

    min-height: 520px;

}



.hero-subtitle {

    color: #2c6e58;

    font-size: 0.75rem;

    letter-spacing: 1.2px;

}



.hero-title {

    color: #162620;

    font-size: 3.1rem;

    line-height: 1.12;

    letter-spacing: -0.5px;

}



.hero-desc {

    font-size: 1.05rem;

    line-height: 1.6;

    max-width: 90%;

}



.stat-number {

    color: #2c6e58;

    font-size: 1.35rem;

}



.btn-custom-green {

    background-color: #2c6e58;

    color: #ffffff;

    border-radius: 8px;

    border: none;

    transition: background-color 0.2s ease;

}



.btn-custom-green:hover {

    background-color: #225645;

    color: #ffffff;

}



.btn-white-custom {

    background-color: #ffffff;

    color: #162620;

    border-radius: 8px;

    border: 1px solid #e0e7e4;

    transition: background-color 0.2s ease;

}



.btn-white-custom:hover {

    background-color: #f4f7f6;

}



.hero-image-wrapper {

    min-height: 350px;

}



.hero-img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

}



.floating-badge {

    position: absolute;

    bottom: 24px;

    right: 24px;

    background-color: #ffffff;

    color: #162620;

    padding: 8px 16px;

    border-radius: 10px;

    font-size: 0.85rem;

    font-weight: 600;

    display: flex;

    align-items: center;

    gap: 6px;

}



.star-icon {

    color: #e69d24;

    font-size: 1rem;

}



@media (max-width: 991.98px) {

    .hero-title {

        font-size: 2.3rem;

    }

}

</style>

