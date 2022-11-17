<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.id }}</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product, we need to use a key so useFetch won't be lazy and only run once
// without the key we'd just end up each time with the very first product we fetched on every product url
const { data: product } = await useFetch(uri, { key: id })

definePageMeta({
    layout: 'products'
})
</script>

<style scoped>

</style>