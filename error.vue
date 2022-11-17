<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">
            {{ error.statusCode }}
        </p>
        <div class="mt-7 text-6xl">Error</div>
        <div class="mt-7">
            {{ error.message }}
        </div>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>