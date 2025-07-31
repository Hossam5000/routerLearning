<script setup>
// imports
import { RouterLink } from 'vue-router';
import {ref} from 'vue';

// cons & vars
const randomState = ref("");
</script>

<template>
    <div>
        {{ randomState }}
        <button @click="randomState='hello'">click me</button>
    </div>
    <div class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </div>
</template>

<style scoped>

</style>