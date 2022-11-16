<template>
    <div>
        <p>Product detials for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est accusantium modi porro tenetur
            quisquam.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>

</style>