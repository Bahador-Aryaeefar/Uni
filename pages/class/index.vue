<template>
    <div v-if="useAuth()?.role?.value">
        <TeacherSession v-if="useAuth()?.role?.value == 'Professor'"></TeacherSession>
        <StudentSession v-else></StudentSession>
        <MainFooter></MainFooter>
    </div>
</template>

<script setup>
definePageMeta({
    // layout: 'main',
    middleware: ["auth"]
})
</script>

