<script setup>
// imports
import { useRoute, useRouter } from 'vue-router';
import cars from "@/data/cars.json";

// const & vars
const route = useRoute();
const router = useRouter();

const currentRouter = router.currentRoute;
const routerOptions = router.options;
const car = cars.find(c => c.id === parseInt(route.params.id));

//functions
function pushRoute() {
  return router.push(`/cars/${car.id}/contact`)
}

// code 
console.log(currentRouter);
console.log(routerOptions);

</script>

<template>
  <div>
    <h1>contact info</h1>
    <p>{{ car.contact.dealer }}</p>
    <p>{{ car.contact.number }}</p>
  </div>

  <div class="router">
    <button @click="pushRoute">click here</button>
  </div>
</template>

<style scoped></style>