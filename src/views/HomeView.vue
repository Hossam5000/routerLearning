<script setup>
// import
import cars from "@/data/cars.json"
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <h1>Home</h1>
        <div class="cars">
            <RouterLink to="`/cars/${car.id}`" class="car" href="" v-for="car in cars" :key="car.id">{{ car.name }}</RouterLink>
        </div>
    </div>
</template>


<style scoped>
.cars{
    display: flex;
}

.cars .car{
    width: 100%;
    margin: 10px;

    color: #000;
    text-decoration: none;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.338);
}
</style>