<script setup>
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <p class="navbar-brand">
                <img href="../assets/recept.jpg" alt="Logo" width="30" height="24"
                    class="d-inline-block align-text-top">
                Receptkönyv
            </p>
            <p class="justify-content-end">
                <button type="button" class="btn btn-light">Receptek</button>
                <button type="button" class="btn btn-success" @click="add()">+ Új recept</button>
            </p>
        </div>
    </nav>
    <div>
        <div>
            <p>Ízek amik összehoznak</p>
            <h1>Találd meg a következő kedvenc recepted!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button type="button" class="btn btn-sucess">Receptek böngészése</button>
            <button type="button" class="btn btn-light" @click="add()">Saját recept hozzáadása</button>
            <p>X recept vár bővítésre</p>
        </div>
        <div>
            <img src="" alt="">
        </div>
    </div>
</template>

<style scoped></style>