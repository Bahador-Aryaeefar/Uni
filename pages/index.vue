<template>
    <div class="relative">
        <div v-if="false">
            <LandingNavbar class="z-[1] relative"></LandingNavbar>
            <LandingBody></LandingBody>
        </div>
        <Student v-else></Student>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    middleware: ["auth"]
})
</script>

