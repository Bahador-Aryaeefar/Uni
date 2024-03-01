<template>
    <div v-if="useAuth()?.role?.value">
        <div v-if="useAuth()?.role?.value == 'Professor'">
            <LandingNavbar class="z-[1] relative"></LandingNavbar>
            <LandingBody></LandingBody>
            <LandingFooter></LandingFooter>
        </div>
        <div v-else>
            <StudentNavbar></StudentNavbar>
            <Student></Student>
            <StudentFooter></StudentFooter>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    middleware: ["auth"]
})
</script>

