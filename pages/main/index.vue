<template>
    <div v-if="useAuth()?.role?.value">
        <MainNavbar class="z-[1] relative"></MainNavbar>
        <TeacherLanding v-if="useAuth()?.role?.value == 'Professor'"></TeacherLanding>
        <StudentLanding v-else></StudentLanding>
        <MainFooter></MainFooter>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    middleware: ["auth"]
})

useAuth().getUser()
</script>
