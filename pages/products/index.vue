<template>
    <div>
        <h2>Products</h2>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

// grab products from a fake store
const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>