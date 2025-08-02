<script setup>
// imports
import { useRoute } from 'vue-router';
import cars from "@/data/cars.json";
import ContactView from './ContactView.vue';

// cons & vars
const route = useRoute();
const car = cars.find(c => c.id === parseInt(route.params.id));

// code
</script>

<template>
    <div>
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.price }}</p>
        <p>{{ car.year }}</p>
    </div>
    <ContactView/>
</template>



<style scoped></style>