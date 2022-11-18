<template>
    <div>
        <Head>
            <Title>Nuxt 3 | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product, we need to use a key so useFetch won't be lazy and only run once
// without the key we'd just end up each time with the very first product we fetched on every product url
const { data: product } = await useFetch(uri, { key: id })

// we need to add "fatal: true" so Error page will show not just for server errors but browser errors as well
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
    layout: 'products'
})
</script>

<style scoped>

</style>