<template>
    <div class="relative">
        <LandingNavbar class="z-[1] relative"></LandingNavbar>
        <LandingBody></LandingBody>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    middleware: ["auth"]
})
</script>

