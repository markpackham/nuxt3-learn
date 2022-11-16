<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Nuxt 3 Learn</NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">Products</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>

        <!-- output page content (like @yield in Laravel) -->
        <div>
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>