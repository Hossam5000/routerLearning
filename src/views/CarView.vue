<script setup>
// imports
import { useRoute } from 'vue-router';
import cars from "@/data/cars.json";

// cons & vars
const route = useRoute();
const car = cars.find(c => c.id === parseInt(route.params.id));
</script>

<template>
    <div>
        <h1>Car View</h1>
        {{ car }}
    </div>
</template>



<style scoped>

</style>