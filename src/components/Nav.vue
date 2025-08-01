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
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
    .active{
        color: dodgerblue;
        font-size: 20px;
    }
</style>